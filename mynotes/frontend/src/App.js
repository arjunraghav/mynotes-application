import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
	return (
		<div className='container dark'>
			<div className='app'>
				<Header />

				<Router>
					<Switch>
						<Route path='/' exact component={NotesListPage} />
						<Route path='/note/:id' component={NotePage} />
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
