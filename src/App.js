import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import AboutMe from "./components/about-me/AboutMe";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutMe} />
      </Router>
    </div>
  );
}

export default App;
