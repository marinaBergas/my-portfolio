import React, { Fragment } from "react";
import backgroundVideo from "../../assets/background-video.mp4";
import "./Video.scss";
const Video = () => {
  return (
    <Fragment>
      <video
        muted
        loop
        autoPlay
        src={backgroundVideo}
        className="video"
      ></video>
    </Fragment>
  );
};

export default Video;
