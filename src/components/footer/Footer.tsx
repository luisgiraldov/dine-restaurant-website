import { ReactElement } from "react";
import Styles from "./Footer.module.scss";
import logo from "../../images/logo.svg";

const Footer = (): ReactElement => {
	return (
		<footer className={Styles["footer"]}>
			<div className={Styles["footer__logo-container"]}>
				<img src={logo} alt="logo" className={Styles["footer__logo"]} />
			</div>
			<div className={Styles["footer__text"]}>
				<p className={Styles["footer__text--address"]}>
					<span>Marthwaite, Sedbergh</span>
					<span>Cumbria</span>
					<span>+00 44 123 4567</span>
				</p>
				<p className={Styles["footer__text--times"]}>
					<span>OPEN TIMES</span>
					<span>MON - FRI: 09:00 AM - 10:00 PM</span>
					<span>SAT - SUN: 09:00 AM - 11:30 PM</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
