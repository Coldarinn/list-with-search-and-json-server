import React, { FC, useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { login } from "../store/reducers/actionCreators";

export const LoginForm: FC = () => {
	const [userLogin, setUserLogin] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const dispatch = useAppDispatch();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(login(userLogin, password));
	};

	return (
		<form className="login__form form" onSubmit={(event) => handleSubmit(event)}>
			<h2 className="form__title">Login</h2>
			<div className="form__item">
				<input type="text" className="form__input" required value={userLogin} onChange={(event) => setUserLogin(event.target.value)} />
				<label className="form__label">Логин</label>
			</div>
			<div className="form__item">
				<input type="password" className="form__input" required value={password} onChange={(event) => setPassword(event.target.value)} />
				<label className="form__label">Пароль</label>
			</div>
			<button className="form__button" type="submit" title="войти в аккаунт">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Войти
			</button>
		</form>
	)
};