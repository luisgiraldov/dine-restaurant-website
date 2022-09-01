import { FC, ReactElement } from "react";
import Styles from "./EventPage.module.scss";
import Button from "../button/Button";

const EventPage: FC<{ title: string; text: string }> = ({
	title,
	text,
}): ReactElement => {
	return (
		<div className={Styles["event-page"]}>
			<h2 className={Styles["event-page__title"]}>{title}</h2>
			<p className={Styles["event-page__text"]}>{text}</p>
			<Button text="Book a table" address="/booking" type="dark-button" />
		</div>
	);
};

export default EventPage;
