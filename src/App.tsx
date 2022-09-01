import "./App.scss";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./components/pages/main/Main";
import Booking from "./components/pages/booking/Booking";

export interface Images {
	small: string;
	small2x: string;
	medium: string;
	medium2x: string;
	large: string;
	large2x: string;
	alt: string;
}

function App() {
	/** Animation between routes */
	const location = useLocation();
	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionStage, setTransistionStage] = useState("fadeIn");

	useEffect(() => {
		if (location !== displayLocation) setTransistionStage("fadeOut");
	}, [location, displayLocation]);

	return (
		<div className="App">
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
					<Route path="/" element={<Main />} />
					<Route path="/booking" element={<Booking />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
