import React from "react";
import * as s from "./Header.module.scss"
import {Button} from "@/shared/components/Button/Button";

// Type
type PropsType = {};
// Header
export const Header: React.FC<PropsType> = (p) => {

	// Return
	return (
		<div className={s.conteiner}>
			<div>
				<Button linkTo="/" buttonText="Home"/>
			</div>
			<div >
				<h1 className={s.headerTitle}>Recipes App</h1>
			</div>
			<div>
				<Button linkTo="/selected" buttonText="Selected"/>
			</div>
		</div>
	)
};