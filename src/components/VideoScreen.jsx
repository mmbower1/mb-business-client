import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer
        src="https://youtu.be/1XBwNgWyCSI?si=z4ofJQFNzOTOIhpn"
        height="350px"
        width="650px"
      />
      <br />
      <ReactPlayer
        src="https://youtu.be/Wg9wa6W7Tos?si=m2lT1uVxD6bHhG2P"
        height="350px"
        width="650px"
      />
    </div>
  );
};

export default VideoPlayer;
