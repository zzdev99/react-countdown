import logo from "./logo.svg";
import "./App.css";
import Countdown from "./components/Countdown";

function App() {
	return (
		<>
			<div className="App">
				<img className="App-logo" src={logo} alt="" />
				<Countdown datetime="2022-08-01 18:00:00"/>
			</div>
		</>
	);
}

export default App;