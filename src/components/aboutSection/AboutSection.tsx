import { FC, ReactElement } from "react";
import Styles from "./AboutSection.module.scss";
import Description from "../description/Description";
import { Images } from "../../App";
import ShadowedPicture from "../shadowedPicture/ShadowedPicture";

const AboutSection: FC<{ title: string; text: string; images: Images }> = ({
	title,
	text,
	images,
}): ReactElement => {
	return (
		<div className={Styles["about-section"]}>
			<div className={Styles["about-section__image-container"]}>
				<ShadowedPicture images={images} className={Styles["about-section__image"]} />
			</div>
			<Description title={title} text={text} />
		</div>
	);
};

export default AboutSection;