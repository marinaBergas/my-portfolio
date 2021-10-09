import React from "react";
import AboutMe from "../about-me/AboutMe";
import Header from "../header/Header";

const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="home-content">
        <Header />
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;
