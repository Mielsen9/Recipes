import React from "react";
import * as s from "./Button.module.scss"
import {Link} from "react-router-dom";
// Type
type PropsType = {
	linkTo: string; // URL для переходу
	buttonText: string; // Текст на кнопці
};
// Button
export const Button: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<Link to={p.linkTo} className={s.button}>
			{p.buttonText}
		</Link>
	)
});