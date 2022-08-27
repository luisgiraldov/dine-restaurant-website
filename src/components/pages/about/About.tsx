import { ReactElement } from "react";
import Styles from "./About.module.scss";
import AboutSection from "../../aboutSection/AboutSection";
import { aboutData } from "../../../data/data";

const About = (): ReactElement => {
	return (
		<section className={Styles.about}>
			<AboutSection title={aboutData[0].title} text={aboutData[0].text} images={aboutData[0].images} />
			<AboutSection title={aboutData[1].title} text={aboutData[1].text} images={aboutData[1].images} />
		</section>
	);
};

export default About;
