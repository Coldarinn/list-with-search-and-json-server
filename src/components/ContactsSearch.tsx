import { FC } from "react";
import { IContact } from "../models/IContact";

interface ContactsSearchProps {
	searchValue: string,
	setSearchValue: React.Dispatch<React.SetStateAction<string>>,
	list: IContact[],
	setSortedList: React.Dispatch<React.SetStateAction<IContact[]>>
}

export const ContactsSearch: FC<ContactsSearchProps> = ({ searchValue, setSearchValue, list, setSortedList }) => {

	const changehandler = (val: string) => {
		setSearchValue(val);

		const matches = list.filter(({ name, lastName, email }) => name.toLowerCase().includes(val.toLowerCase().split(/\s+/).join('')) ||
			lastName.toLowerCase().includes(val.toLowerCase().split(/\s+/).join('')) ||
			email.toLowerCase().includes(val.toLowerCase().split(/\s+/).join('')) ||
			(name + lastName).toLowerCase().split(/\s+/).join('').includes(val.toLowerCase().split(/\s+/).join('')));

		setSortedList(matches);
	};

	return (
		<div className="contacts__search search-contacts">
			<input type="text" className="search-contacts__input" value={searchValue} onChange={(event) => changehandler(event.target.value)} />
		</div>
	)
}