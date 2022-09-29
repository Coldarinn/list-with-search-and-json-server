import { FC, useEffect, useState } from "react";
import { ContactsAdd } from "../components/ContactsAdd";
import { ContactsList } from "../components/ContactsList";
import { ContactsSearch } from "../components/ContactsSearch";
import { useAppSelector } from "../hooks/redux";
import { IContact } from "../models/IContact";
import { fetchContacts } from "../store/reducers/actionCreators";

const Contacts: FC = () => {
	const [searchValue, setSearchValue] = useState<string>('');
	const [list, setList] = useState<IContact[]>([]);
	const [sortedList, setSortedList] = useState<IContact[]>([]);
	const { userId } = useAppSelector((state) => state.authReducer);

	useEffect(() => {
		(async function () {
			const resp = await fetchContacts(userId);
			if (resp?.length) setList(resp);
		})();
	}, []);

	return (
		<div className="contacts">
			<div className="container">
				<h1 className="contacts__title">Список контактов</h1>
				<ContactsSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					list={list}
					setSortedList={setSortedList} />
				<ContactsAdd
					list={list}
					setList={setList}
					setSortedList={setSortedList}
					sortedList={sortedList}
					searchValue={searchValue}
				/>
				{list && <ContactsList
					list={list}
					setList={setList}
					setSortedList={setSortedList}
					sortedList={sortedList}
					searchValue={searchValue} />}
			</div>
		</div>
	)
};

export default Contacts;