import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import {BrowserRouter as Router,Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
      <Route exact path="/" component={About} />
    </div>
    </Router>
  );
}

export default App;
