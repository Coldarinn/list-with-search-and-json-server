import { FC } from "react";

export const Loader: FC = () => {
	return (
		<div className="loader">
			<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
		</div>
	)
}