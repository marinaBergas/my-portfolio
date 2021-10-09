import React from "react";
import "./AboutMe.scss";
import myProfileImage from "../../assets/marinasaber.png";
const AboutMe = () => {
  return (
    <div className="about__content">
      <div className="img-container">
        <img src={myProfileImage} alt="marina saber" className="img" />
      </div>
      <article>
        <p>
          I’m a hard working and dedicated front-end developer with a keen eye
          for detail,and a determination to deliver the very highest quality. I
          take great pride in my work, and I always try to better myself with
          every project I work on.
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
        </p>
      </article>
    </div>
  );
};

export default AboutMe;
