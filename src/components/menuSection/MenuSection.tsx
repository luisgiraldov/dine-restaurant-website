import { FC, ReactElement } from "react";
import Styles from "./MenuSection.module.scss";
import { Images } from "../../App";
import Picture from "../picture/Picture";

const MenuSection: FC<{ title: string; text: string; images: Images }> = ({
	title,
	text,
	images,
}): ReactElement => {
	return (
		<div className={Styles["menu-section"]}>
			<div className={Styles["menu-section__image-contianer"]}>
				<Picture
					images={images}
					className={Styles["menu-section__image"]}
				/>
			</div>
            <h3 className={Styles["menu-section__title"]}>
                {title}
            </h3>
            <p className={Styles["menu-section__text"]}>
                {text}
            </p>
		</div>
	);
};

export default MenuSection;
