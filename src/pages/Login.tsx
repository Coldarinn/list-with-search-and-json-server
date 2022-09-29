import { FC } from "react";
import { LoginForm } from "../components/LoginForm";

const Login: FC = () => {
	return (
		<div className="login">
			<div className="container">
				<LoginForm />
			</div>
		</div>
	)
};

export default Login;