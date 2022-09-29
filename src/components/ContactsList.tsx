import { FC, useState } from "react";
import { IContact } from "../models/IContact";
import { EditContact } from "./EditContact";

interface ContactsListProps {
	list: IContact[],
	setList: React.Dispatch<React.SetStateAction<IContact[]>>,
	setSortedList: React.Dispatch<React.SetStateAction<IContact[]>>,
	sortedList: IContact[],
	searchValue: string
};

export const ContactsList: FC<ContactsListProps> = ({ list, setList, setSortedList, sortedList, searchValue }) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [currentContact, setCurrentContact] = useState<IContact>({ id: NaN, name: '', lastName: '', email: '' });

	const deleteHandler = (itemId: number) => {
		const newList = [...list].filter((item) => item.id !== itemId);
		if (searchValue) {
			const newSortedList = [...sortedList].filter((item) => item.id !== itemId);
			setSortedList(newSortedList);
		};
		setList(newList);
	};

	const editHandler = (item: IContact) => {
		setCurrentContact(item);
		setIsVisible(true);
	};

	return (
		<>
			<ul className="contacts__list">
				{list.length > 0 ? (
					<>
						{searchValue ? (
							<>
								{sortedList.length > 0 ? (
									<>
										{sortedList.map((item, idx) => (
											<li className="contacts__item item-contacts" key={item.id}>
												<div className="item-contacts__body">
													<div className="item-contacts__content">
														<div className="item-contacts__num">
															{idx + 1}
														</div>
														<div className="item-contacts__info">
															<span className="item-contacts__name">
																{item.name} {item.lastName}
															</span>
															<a href={`mailto:${item.email}`} className="item-contacts__email">
																{item.email}
															</a>
														</div>
													</div>
													<div className="item-contacts__buttons">
														<button className="item-contacts__button item-contacts__button--red" title="удалить контакт" onClick={() => deleteHandler(item.id)}>
															удалить
														</button>
														<button className="item-contacts__button item-contacts__button--blue" title="редактировать контакт" onClick={() => editHandler(item)}>
															редактировать
														</button>
													</div>
												</div>
											</li>
										))}
									</>
								) : (
									<div className="contacts__empty">По данному запросу ничего не найдено</div>
								)}
							</>
						) : (
							<>
								{list.map((item, idx) => (
									<li className="contacts__item item-contacts" key={item.id}>
										<div className="item-contacts__body">
											<div className="item-contacts__content">
												<div className="item-contacts__num">
													{idx + 1}
												</div>
												<div className="item-contacts__info">
													<span className="item-contacts__name">
														{item.name} {item.lastName}
													</span>
													<a href={`mailto:${item.email}`} className="item-contacts__email">
														{item.email}
													</a>
												</div>
											</div>
											<div className="item-contacts__buttons">
												<button className="item-contacts__button item-contacts__button--red" title="удалить контакт" onClick={() => deleteHandler(item.id)}>
													удалить
												</button>
												<button className="item-contacts__button item-contacts__button--blue" title="редактировать контакт" onClick={() => editHandler(item)}>
													редактировать
												</button>
											</div>
										</div>
									</li>
								))}
							</>
						)}
					</>
				) : (
					<div className="contacts__empty">Контактов пока что нету</div>
				)}
			</ul>
			<EditContact
				isVisible={isVisible}
				onClose={() => setIsVisible(false)}
				contact={currentContact}
				list={list}
				setList={setList}
				setSortedList={setSortedList}
				sortedList={sortedList}
				searchValue={searchValue}
			/>
		</>
	)
}