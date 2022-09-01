import { ReactElement } from "react";
import Header from "../header/Header";
import About from "../about/About";
import Menu from "../menu/Menu";
import Events from "../events/Events";
import CallToAction from "../../callToAction/CallToAction";
import Footer from "../../footer/Footer";

const Main = (): ReactElement => {
	return (
		<>
			<main className="main">
				<Header />
				<About />
				<Menu />
				<Events />
				<CallToAction />
			</main>
			<Footer />
		</>
	);
};

export default Main;
