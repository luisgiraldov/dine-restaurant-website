import { FC, ReactElement } from "react";
import Styles from "./AboutSection.module.scss";

interface Images {
    small: string,
    small2x: string,
    medium: string,
    medium2x: string,
    large: string,
    large2x: string,
    alt: string
}

const AboutSection: FC<{ title: string; text: string; images: Images }> = ({
	title,
	text,
	images,
}): ReactElement => {
	return (
		<div className={Styles["about-section"]}>
			<div className={Styles["about-section__image-container"]}>
				<picture>
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
				</picture>
			</div>
			<div className={Styles["pattern-divide"]}></div>
			<h2 className={Styles["about-section__title"]}>{title}</h2>
            <p className={Styles["about-section__text"]}>{text}</p>
		</div>
	);
};

export default AboutSection;