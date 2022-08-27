import { FC, ReactElement } from "react";
import Styles from "./Description.module.scss";

const Description: FC<{title: string, text: string}> = ({ title, text }): ReactElement => {
    return (
        <>
            <div className={Styles["pattern-divide"]}></div>
			<h2 className={Styles["description__title"]}>{title}</h2>
            <p className={Styles["description__text"]}>{text}</p>
        </>
    );
};

export default Description;