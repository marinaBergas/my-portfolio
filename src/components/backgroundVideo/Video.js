import React from "react";
import backgroundVideo from "../../assets/background-video.mp4";
import "./Video.scss";
const Video = () => {
  return (
    <div>
      <video muted loop autoPlay className="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
