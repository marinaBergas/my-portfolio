import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import AboutMe from "./components/about-me/AboutMe";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
