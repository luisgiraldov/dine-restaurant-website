import "./App.scss";
import Header from "./components/pages/header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Header />} />
				{/* <Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/blog" element={<Blogs />} />
				<Route path="/contact" element={<Contact />} /> */}
			</Routes>
		</div>
	);
}

export default App;
