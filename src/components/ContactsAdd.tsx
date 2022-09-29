import { FC, useState } from "react";
import { IContact } from "../models/IContact";
import { AddContact } from "./AddContact";

interface ContactsAddProps {
	list: IContact[],
	setList: React.Dispatch<React.SetStateAction<IContact[]>>,
	setSortedList: React.Dispatch<React.SetStateAction<IContact[]>>,
	sortedList: IContact[],
	searchValue: string
};

export const ContactsAdd: FC<ContactsAddProps> = ({ list, setList, setSortedList, sortedList, searchValue }) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	return (
		<>
			<div className="contacts__add add-contacts">
				<button className="add-contacts__button" onClick={() => setIsVisible(true)}>добавить</button>
			</div>
			<AddContact
				isVisible={isVisible}
				onClose={() => setIsVisible(false)}
				list={list}
				setList={setList}
				setSortedList={setSortedList}
				sortedList={sortedList}
				searchValue={searchValue}
			/>
		</>
	);
};