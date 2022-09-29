import React, { FC } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { logout } from "../store/reducers/actionCreators";

export const Header: FC = () => {
	const dispatch = useAppDispatch();
	const { login } = useAppSelector((state) => state.authReducer);

	const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		dispatch(logout());
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header__body">
					<div className="header__name">
						{login}
					</div>
					<button className="header__button" onClick={(event) => clickHandler(event)} title="выйти из аккаунта">
						выйти
					</button>
				</div>
			</div>
		</header>
	)
}