import { Switch, Route, HashRouter } from "react-router-dom";
import "./App.scss";
import AboutMe from "./components/about-me/AboutMe";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app-container">
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutMe} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
