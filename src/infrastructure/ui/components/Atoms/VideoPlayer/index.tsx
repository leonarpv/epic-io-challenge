import React from "react"
import {
  StyledVideoContainer,
  StyledVideoLight,
  StyledVideoOpacity,
  StyledVideoPlayer,
} from "./style.css";

const VideoPlayer = ({
  url,
  playing,
  brightPercentage = 0.0,
  opacityPercentage = 0.0,
}: {
  url: string;
  playing: boolean;
  brightPercentage: number;
  opacityPercentage: number;
}) => {
  return (
    <StyledVideoContainer>
      <StyledVideoPlayer url={url} playing={playing} id="videoPlayer" />
      <StyledVideoLight brightPercentage={brightPercentage} />
      <StyledVideoOpacity opacityPercentage={opacityPercentage} />
    </StyledVideoContainer>
  );
};

export default VideoPlayer
