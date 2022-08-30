import "./App.scss";
import Header from "./components/pages/header/Header";
import About from "./components/pages/about/About";
import Menu from "./components/pages/menu/Menu";
import Events from "./components/pages/events/Events";

export interface Images {
    small: string,
    small2x: string,
    medium: string,
    medium2x: string,
    large: string,
    large2x: string,
    alt: string
}

function App() {

	return (
		<div className="App">
			<main className="main">
				<Header />
				<About />
				<Menu />
				<Events />
			</main>
		</div>
	);
}

export default App;
