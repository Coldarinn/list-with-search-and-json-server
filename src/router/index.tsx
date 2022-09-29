import Contacts from "../pages/Contacts";
import Login from "../pages/Login";

export const routes = {
	CONTACTS: {
		path: '/',
		element: <Contacts />
	},
	LOGIN: {
		path: 'login',
		element: <Login />
	},
};

export const publicRoutes = [
	{
		path: routes.LOGIN.path,
		element: routes.LOGIN.element
	},
	{
		path: '*',
		element: routes.LOGIN.element
	}
];

export const privateRoutes = [
	{
		path: routes.CONTACTS.path,
		exact: false,
		element: routes.CONTACTS.element
	},
	{
		path: '*',
		exact: false,
		element: routes.CONTACTS.element
	}
];