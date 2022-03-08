import React from "react"
import {
  StyledVideoContainer,
  StyledVideoLight,
  StyledVideoPlayer,
} from "./style.css"

const VideoPlayer = ({
  url,
  playing,
  lightPercentage = 0.0,
}: {
  url: string
  playing: boolean
  lightPercentage: number
}) => {
  return (
    <StyledVideoContainer>
      <StyledVideoPlayer url={url} playing={playing} id="videoPlayer" />
      <StyledVideoLight lightPercentage={lightPercentage} />
    </StyledVideoContainer>
  )
}

export default VideoPlayer
