import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { privateRoutes, publicRoutes } from '../router';

export const AppRouter: FC = () => {
	const { isAuth } = useAppSelector((state) => state.authReducer);

	return (
		<Routes>
			{isAuth ? (
				privateRoutes.map((item) => <Route key={item.path} path={item.path} element={item.element} />)
			) : (
				publicRoutes.map((item) => <Route key={item.path} path={item.path} element={item.element} />)
			)}
		</Routes>
	)
}