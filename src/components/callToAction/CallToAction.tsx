import { ReactElement } from "react";
import Styles from "./CallToAction.module.scss";
import Button from "../button/Button";

const CallToAction = (): ReactElement => {
    return (
        <section className={Styles["call-to-action"]}>
            <h3 className={Styles["call-to-action__title"]}>
                Ready to make a reservation?
            </h3>
            <Button text="Book a table" address="#" />
        </section>
    );
};

export default CallToAction;