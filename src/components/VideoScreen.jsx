import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <ReactPlayer
          className="react-player"
          src="https://youtu.be/GSNLbLAQxuc"
          height="350px"
          width="650px"
        />
      </div>
      <br />
      <div className="video-wrapper">
        <ReactPlayer
          className="react-player"
          src="https://youtu.be/1XBwNgWyCSI?si=z4ofJQFNzOTOIhpn"
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
