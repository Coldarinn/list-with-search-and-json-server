import { FC, useState } from "react";
import { IContact } from "../models/IContact";
import { ModalLayout } from "./ModalLayout";

interface AddContactProps {
	isVisible: boolean,
	onClose: () => void,
	list: IContact[],
	setList: React.Dispatch<React.SetStateAction<IContact[]>>,
	setSortedList: React.Dispatch<React.SetStateAction<IContact[]>>,
	sortedList: IContact[],
	searchValue: string
};

export const AddContact: FC<AddContactProps> = ({ isVisible, onClose, list, setList, setSortedList, sortedList, searchValue }) => {
	const [name, setName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const newItem = {
			id: list.length + 1,
			name,
			lastName,
			email
		};
		const newList = [...list];
		newList.push(newItem);
		setList(newList);

		if (searchValue) {
			const newSortedList = [...sortedList];
			newSortedList.push(newItem);
			setSortedList(newSortedList);
		};

		setName('');
		setLastName('');
		setEmail('');

		onClose();
	};

	return (
		<ModalLayout isVisible={isVisible} onClose={onClose}>
			<div className="contact__edit edit-contact">
				<form className="edit-contact__form form" onSubmit={(event) => submitHandler(event)}>
					<div className="form__item">
						<input type="text" className="form__input" required value={name} onChange={(event) => setName(event.target.value)} />
						<label className="form__label">Имя</label>
					</div>
					<div className="form__item">
						<input type="text" className="form__input" required value={lastName} onChange={(event) => setLastName(event.target.value)} />
						<label className="form__label">Фамилия</label>
					</div>
					<div className="form__item">
						<input type="email" className="form__input" required value={email} onChange={(event) => setEmail(event.target.value)} />
						<label className="form__label">Email</label>
					</div>
					<button className="form__button" type="submit" title="сохранить изменения">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Добавить
					</button>
				</form>
			</div>
		</ModalLayout>
	);
};