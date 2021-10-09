import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import AboutMe from "./components/about-me/AboutMe";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Header />
          <AboutMe />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
