import { FC, ReactElement } from "react";
import Styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const Button: FC<{text: string, type?: string, address: string}> = ({ text, type, address }): ReactElement => {
    if(type && type === "submit") {
        return (
            <button type={type} className={`${Styles.button} ${Styles["button__dark"]}`}>{text}</button>
        );
    }

    if(type && type === "dark-button") {
        return (
            <Link to={address} className={`${Styles.button} ${Styles["button__dark"]}`}>{text}</Link>
        );
    }

    return (
        <Link to={address} className={`${Styles.button} ${Styles["button__light"]}`}>{text}</Link>
    )
};

export default Button;