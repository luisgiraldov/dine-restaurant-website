import { FC, ReactElement } from "react";
import Styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const Button: FC<{text: string, type?: string, address: string}> = ({ text, type, address }): ReactElement => {
    if(type && type === "submit") {
        return (
            <button type={type} className={Styles.button}>{text}</button>
        );
    }

    if(type && type === "light-button") {
        <Link to={address} className={`${Styles.button} ${Styles["light-button"]}`}>{text}</Link>
    }

    return (
        <Link to={address} className={`${Styles.button} ${Styles["dark-button"]}`}>{text}</Link>
    )
};

export default Button;