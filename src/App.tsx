import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { AppRouter } from "./components/AppRouter";
import { Loader } from "./components/Loader";
import { Header } from "./components/Header";
import { getUser } from "./store/reducers/actionCreators";
import "./styles.scss";

const App: FC = () => {
	const { isLoading, isAuth } = useAppSelector((state) => state.authReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const login = localStorage.getItem("userLogin") || '';
		const password = localStorage.getItem("userPassword") || '';
		dispatch(getUser(login, password));
	}, []);

	return (
		<div className="app">
			{isLoading ? <Loader /> : (
				<>
					{isAuth && <Header />}
					<AppRouter />
				</>
			)}
		</div>
	);
};

export default App;
