import React, { FC, useEffect, useState } from "react";
import { IContact } from "../models/IContact";
import { ModalLayout } from "./ModalLayout";

interface EditContactProps {
	isVisible: boolean,
	onClose: () => void,
	contact: IContact,
	list: IContact[],
	setList: React.Dispatch<React.SetStateAction<IContact[]>>,
	setSortedList: React.Dispatch<React.SetStateAction<IContact[]>>,
	sortedList: IContact[],
	searchValue: string
};

export const EditContact: FC<EditContactProps> = ({ isVisible, onClose, contact, list, setList, setSortedList, sortedList, searchValue }) => {
	const [id, setId] = useState<number>(contact.id);
	const [name, setName] = useState<string>(contact.name);
	const [lastName, setLastName] = useState<string>(contact.lastName);
	const [email, setEmail] = useState<string>(contact.email);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const newList = [...list].map((item) => {
			if (item.id === id) {
				item.name = name;
				item.lastName = lastName;
				item.email = email;
			};
			return item;
		});
		setList(newList);

		if (searchValue) {
			const newSortedList = [...sortedList].map((item) => {
				if (item.id === id) {
					item.name = name;
					item.lastName = lastName;
					item.email = email;
				};
				return item;
			});
			setSortedList(newSortedList);
		};

		onClose();
	};

	useEffect(() => {
		setId(contact.id);
		setName(contact.name);
		setLastName(contact.lastName);
		setEmail(contact.email);
	}, [contact])

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
						Сохранить
					</button>
				</form>
			</div>
		</ModalLayout>
	)
}