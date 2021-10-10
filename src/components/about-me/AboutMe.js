import React from "react";
import "./AboutMe.scss";
import myProfileImage from "../../assets/marinasaber.png";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import ScrollAnimation from "react-animate-on-scroll";
const AboutMe = () => {
  return (
    <section className="about__wrapper">
      <h2 className="about-header">About Me</h2>
      <div className="about__container" id="about">
        <ScrollAnimation
          animateIn="fadeIn"
          initiallyVisible={true}
          className="img-container"
        >
          <img src={myProfileImage} alt="marina saber" className="img" />
        </ScrollAnimation>
        <article className="about__content">
          <p>
            I’m a hard working and dedicated front-end developer with a keen eye
            for detail,and a determination to deliver the very highest quality.
            I take great pride in my work, and I always try to better myself
            with every project I work on.
          </p>
          <p>
            I like to write code that is re-useable, maintainable and easy to
            understand.
          </p>
          <p>
            The main areas of my expertise are HTML(5), CSS(3) , JavaScript ,
            React,angular,responsive web design (RWD)
          </p>
          <p>
            <strong>Interested in working with me? </strong>
            Get in touch
          </p>
          <p>
            <button className="btn resume-btn" id="Resume">
              <a href="https://docs.google.com/document/d/1mMw_q-KDrhouaa7jBCH_YuTSiM-iHwXtB2m8uCE4Hn8/edit">
                Resume
              </a>
            </button>
            <a
              className="btn linkedin-btn"
              href="https://www.linkedin.com/in/marina-saber-7852bb14a/"
            >
              <FiLinkedin />
            </a>
            <a className="btn git-btn" href="https://github.com/marinaBergas">
              <FiGithub />
            </a>
          </p>
          <p>and I’d be happy to talk to you.</p>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
