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
					<div>Marthwaite, Sedbergh</div>
					<div>Cumbria</div>
					<div>+00 44 123 4567</div>
				</p>
				<p className={Styles["footer__text--times"]}>
					<div>OPEN TIMES</div>
					<div>MON - FRI: 09:00 AM - 10:00 PM</div>
					<div>SAT - SUN: 09:00 AM - 11:30 PM</div>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
