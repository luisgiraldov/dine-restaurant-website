import { ReactElement } from "react";
import Styles from "./Header.module.scss";
import logo from "../../../images/logo.svg";
import Button from "../../button/Button";

const Header = (): ReactElement => {
	return (
		<header className={Styles.header}>
			<div className={Styles["header__logo-container"]}>
				<img src={logo} alt="" className={Styles["header__logo"]} />
			</div>
			<div className={Styles["header__text-container"]}>
				<h1 className={Styles["header__title"]}>
					Exquisite dining <span>since 1989</span>
				</h1>
				<p className={Styles["header__text"]}>
					Experience our seasonal menu in beautiful country
					surroundings. Eat the freshest produce from the comfort of
					our farmhouse.
				</p>
				<Button text="Book a table" address="#" />
			</div>
		</header>
	);
};

export default Header;
