import { Switch, Route, HashRouter } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app-container">
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
