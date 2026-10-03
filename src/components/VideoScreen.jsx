import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <ReactPlayer
          className="react-player"
          src="https://www.youtube.com/watch?v=UB1sT9dQyHM"
          height="350px"
          width="650px"
        />
      </div>
      <br />
      <div className="video-wrapper">
        <ReactPlayer
          className="react-player"
          src="https://www.youtube.com/watch?v=GSNLbLAQxuc&t=61s"
          height="350px"
          width="650px"
        />
      </div>

      <br />
      <div className="video-wrapper">
        <ReactPlayer
          className="react-player"
          src="https://youtu.be/Wg9wa6W7Tos?si=m2lT1uVxD6bHhG2P"
          height="350px"
          width="650px"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
