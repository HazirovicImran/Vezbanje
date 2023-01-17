import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton/styledButton";
import StyledHeader from "./components/StyledHeader/styledHeader";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<StyledHeader innerText="This is header" />
				<StyledButton innerText="Click" />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
