import { useState, useEffect, ReactElement } from "react";
import Styles from "./Events.module.scss";
import EventPage from "../../eventPage/EventPage";
import { eventsData } from "../../../data/data";
import ShadowedPicture from "../../shadowedPicture/ShadowedPicture";

const Events = (): ReactElement => {
	/** Active link */
	const [slide, setSlide] = useState("family-gathering");
	const setActiveControl = (currentSlide: string) => {
		setSlide(currentSlide);
	};

	/** Animation between slides */
	const [displayCurrentSlide, setDisplayCurrentSlide] = useState(slide);
	const [transitionStage, setTransistionStage] = useState("fadeIn");

	useEffect(() => {
		if (slide !== displayCurrentSlide) setTransistionStage("fadeOut");
	}, [slide, displayCurrentSlide]);

	return (
		<section className={Styles.events}>
			<ShadowedPicture
				images={eventsData[3].images}
				className={Styles["events__image"]}
			/>
			<nav className={Styles["events__navigation"]}>
				<button
					className={`${Styles["events__button"]}
                               ${
									"family-gathering" === slide
										? Styles["active-btn"]
										: ""
								}`}
					onClick={() => setActiveControl("family-gathering")}
				>
					Family Gathering
				</button>
				<button
					className={`${Styles["events__button"]}
                               ${
									"special-events" === slide
										? Styles["active-btn"]
										: ""
								}`}
					onClick={() => setActiveControl("special-events")}
				>
					Special Events
				</button>
				<button
					className={`${Styles["events__button"]}
                               ${
									"social-events" === slide
										? Styles["active-btn"]
										: ""
								}`}
					onClick={() => setActiveControl("social-events")}
				>
					Social Events
				</button>
			</nav>
			<div
				className={`${transitionStage}`}
				onAnimationEnd={() => {
					if (transitionStage === "fadeOut") {
						setTransistionStage("fadeIn");
						setDisplayCurrentSlide(slide);
					}
				}}
			>
				{"family-gathering" === displayCurrentSlide && (
					<EventPage
						title={eventsData[0].title}
						text={eventsData[0].text}
					/>
				)}
				{"special-events" === displayCurrentSlide && (
					<EventPage
						title={eventsData[1].title}
						text={eventsData[1].text}
					/>
				)}
				{"social-events" === displayCurrentSlide && (
					<EventPage
						title={eventsData[2].title}
						text={eventsData[2].text}
					/>
				)}
			</div>
		</section>
	);
};

export default Events;
