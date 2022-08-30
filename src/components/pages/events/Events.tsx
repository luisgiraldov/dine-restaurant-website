import { useState, useEffect, ReactElement } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Styles from "./Events.module.scss";
import EventPage from "../../eventPage/EventPage";
import { eventsData } from "../../../data/data";
import ShadowedPicture from "../../shadowedPicture/ShadowedPicture";

const Events = (): ReactElement => {
	/** Animation between routes */
	const location = useLocation();
	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransistionStage] = useState("fadeIn");

	useEffect(() => {
		if (location !== displayLocation) setTransistionStage("fadeOut");
	}, [location, displayLocation]);

	/** Active link */
	const [pathName, setPathName] = useState("/");
	const setActiveControl = (currentPath: string) => {
		setPathName(currentPath);
	};

	useEffect(() => {
		if (location) {
			let tmp = location.pathname.slice(
				location.pathname.lastIndexOf("/"),
				location.pathname.length
			);
			setPathName(tmp);
		}
	}, [location]);

	return (
		<section className={Styles.events}>
			<ShadowedPicture
				images={eventsData[3].images}
				className={Styles["events__image"]}
			/>
			<nav className={Styles["events__navigation"]}>
				<Link
					to="/family-gathering"
					className={`${Styles["events__link"]} 
								${"/family-gathering" === pathName ? Styles["active-btn"] : "" } 
								${"/" === pathName ? Styles["active-btn"] : ""}`}
					onClick={() => setActiveControl("/family-gathering")}
				>
					Family Gathering
				</Link>
				<Link
					to="/special-events"
					className={`${Styles["events__link"]} 
								${"/special-events" === pathName ? Styles["active-btn"] : ""}`}
					onClick={() => setActiveControl("/special-events")}
				>
					Special Events
				</Link>
				<Link
					to="/social-events"
					className={`${Styles["events__link"]} 
								${"/social-events" === pathName ? Styles["active-btn"] : ""}`}
					onClick={() => setActiveControl("/social-events")}
				>
					Social Events
				</Link>
			</nav>
			<div
				className={`${transitionStage}`}
				onAnimationEnd={() => {
					if (transitionStage === "fadeOut") {
						setTransistionStage("fadeIn");
						setDisplayLocation(location);
					}
				}}
			>
			<Routes location={displayLocation}>
				<Route
					path="/"
					element={
						<EventPage
							title={eventsData[0].title}
							text={eventsData[0].text}
						/>
					}
				/>
				<Route
					path="/family-gathering"
					element={
						<EventPage
							title={eventsData[0].title}
							text={eventsData[0].text}
						/>
					}
				/>
				<Route
					path="/special-events"
					element={
						<EventPage
							title={eventsData[1].title}
							text={eventsData[1].text}
						/>
					}
				/>
				<Route
					path="/social-events"
					element={
						<EventPage
							title={eventsData[2].title}
							text={eventsData[2].text}
						/>
					}
				/>
			</Routes>
			</div>
		</section>
	);
};

export default Events;
