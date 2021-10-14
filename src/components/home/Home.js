import React from "react";
import AboutMe from "../about-me/AboutMe";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MyProjects from "../my-projects/MyProjects";
import Skills from "../skills/Skills";
const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="home-content">
        <Header />
        <AboutMe />
        <MyProjects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
