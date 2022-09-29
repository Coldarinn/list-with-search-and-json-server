import { IContacts } from '../../models/IContacts';
import { IUser } from '../../models/IUser';
import { AppDispatch } from './../index';
import { authSlice } from './auth';

export const login = (login: string, password: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(authSlice.actions.changeIsLoading(true));
		setTimeout(async () => { // timeout для показа loader
			const resp = await fetch(`http://localhost:3001/users?login=${login}&password=${password}`)
				.then(response => response.json() as Promise<IUser[]>);

			if (resp[0]) {
				dispatch(authSlice.actions.changeAuth(true));
				dispatch(authSlice.actions.changeUser({ login: resp[0].login, userId: resp[0].id }));
				localStorage.setItem("userLogin", resp[0].login);
				localStorage.setItem("userPassword", resp[0].password);
			} else {
				alert("Пользователь не существует либо неверный пароль");
			};
			dispatch(authSlice.actions.changeIsLoading(false));
		}, 1000)
	} catch (error) {
		console.log('fetch users error: ', error);
	}
};

export const getUser = (login: string, password: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(authSlice.actions.changeIsLoading(true));
		setTimeout(async () => { // timeout для показа loader
			if (login && password) {
				const resp = await fetch(`http://localhost:3001/users?login=${login}&password=${password}`)
					.then(response => response.json() as Promise<IUser[]>);

				if (resp[0]) {
					dispatch(authSlice.actions.changeAuth(true));
					dispatch(authSlice.actions.changeUser({ login: resp[0].login, userId: resp[0].id }));
				};
			};
			dispatch(authSlice.actions.changeIsLoading(false));
		}, 1000)
	} catch (error) {
		console.log('fetch user error: ', error);
	}
};

export const logout = () => async (dispatch: AppDispatch) => {
	localStorage.removeItem("userLogin");
	localStorage.removeItem("userPassword");
	dispatch(authSlice.actions.changeAuth(false));
	dispatch(authSlice.actions.changeUser({ login: '', userId: NaN }));
};

export const fetchContacts = async (userId: number) => {
	try {
		const resp = await fetch(`http://localhost:3001/contacts?id=${userId}`)
			.then(response => response.json() as Promise<IContacts[]>);

		if (resp[0]) {
			return resp[0].contacts;
		} else {
			return [];
		};
	} catch (error) {
		console.log('fetch contacts error: ', error);
	}
};