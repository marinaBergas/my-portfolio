import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import AboutMe from "./components/about-me/AboutMe";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutMe} />
      </Router>
    </div>
  );
}

export default App;
