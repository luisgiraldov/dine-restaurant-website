import { ReactElement } from "react";
import Styles from "./Booking.module.scss";
import Button from "../../button/Button";
import logo from "../../../images/logo.svg";
import Footer from "../../footer/Footer";

const Booking = (): ReactElement => {
	return (
		<>
			<section className={Styles["booking"]}>
				<div className={Styles["booking__logo-container"]}>
					<img
						src={logo}
						alt="Logo"
						className={Styles["booking__logo"]}
					/>
				</div>
				<div className={Styles["booking__text-container"]}>
					<h3 className={Styles["booking__title"]}>Reservations</h3>
					<p className={Styles["booking__text"]}>
						We can’t wait to host you. If you have any special
						requirements please feel free to call on the phone
						number below. We’ll be happy to accommodate you.
					</p>
					<Button text="Reserve place" address="#" />
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Booking;
