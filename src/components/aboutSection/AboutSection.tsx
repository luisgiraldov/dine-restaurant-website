import { FC, ReactElement } from "react";
import Styles from "./AboutSection.module.scss";
import Description from "../description/Description";
import Picture from "../picture/Picture";
import { Images } from "../../App";

const AboutSection: FC<{ title: string; text: string; images: Images }> = ({
	title,
	text,
	images,
}): ReactElement => {
	return (
		<div className={Styles["about-section"]}>
			<div className={Styles["about-section__image-container"]}>
				{/* <picture>
					<source
						srcSet={`${images.small} 1x, ${images.small2x} 2x`}
						media="(max-width: 767px)"
					></source>
					<source
						srcSet={`${images.medium} 1x, ${images.medium2x} 2x`}
						media="(max-width: 1023px)"
					></source>
					<source
						srcSet={`${images.large} 1x, ${images.large2x} 2x`}
						media="(min-width: 1024px)"
					></source>
					<img
						srcSet={`${images.large} 1x, ${images.large2x} 2x`}
						alt={images.alt}
						src={images.large2x}
						className={Styles["about-section__image"]}
					/>
				</picture> */}
				<Picture images={images} className={Styles["about-section__image"]} />
			</div>
			<Description title={title} text={text} />
		</div>
	);
};

export default AboutSection;