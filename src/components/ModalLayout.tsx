import React, { FC, useEffect } from "react";

interface ModalLayoutProps {
	isVisible: boolean,
	onClose: () => void,
	children: React.ReactNode,
};

export const ModalLayout: FC<ModalLayoutProps> = ({ isVisible, onClose, children }) => {
	const keydownHandler = (key: string) => {
		switch (key) {
			case 'Escape':
				onClose();
				break;
			default:
		}
	};

	useEffect(() => {
		if (isVisible) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isVisible])

	useEffect(() => {
		document.addEventListener('keydown', (e) => keydownHandler(e.key));
		return () => document.removeEventListener('keydown', (e) => keydownHandler(e.key));
	});

	return (
		<div className={isVisible ? "modal active" : "modal"} onClick={onClose}>
			<div className="modal__container" onClick={e => e.stopPropagation()}>
				<div className="modal__body">
					{children}
				</div>
			</div>
		</div>
	)
}