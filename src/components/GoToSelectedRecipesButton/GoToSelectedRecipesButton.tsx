import { Link } from "react-router-dom";
import * as styles from "./GoToSelectedRecipesButton.module.scss";

interface GoToSelectedRecipesButtonProps {
	buttonText: string; // Текст на кнопці
	linkTo: string; // URL для переходу
}

const GoToSelectedRecipesButton = ({ buttonText, linkTo }: GoToSelectedRecipesButtonProps) => {
	return (
		<div className={styles.buttonContainer}>
			<Link to={linkTo} className={styles.goToSelectedButton}>
				{buttonText}
			</Link>
		</div>
	);
};

export default GoToSelectedRecipesButton;