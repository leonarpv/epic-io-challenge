import { useContext, useEffect } from "react"
import { Card, Container, Typography } from "@material-ui/core"
import VideoPlayer from "../../Atoms/VideoPlayer"
import HomeContext from "../../../../../application/context/HomeContext"
import useVideos from "../../../../../application/hooks/useVideos"
import {
  CaptionContainer,
  PlayerContainer,
  StyledContainer,
} from "./styles.css"

const Display = () => {
  const { currentVideo, lightPercentage } = useContext(HomeContext)
  const { playVideo } = useVideos()

  return (
    <StyledContainer>
      {currentVideo ? (
        <>
          <PlayerContainer>
            <VideoPlayer
              url={currentVideo.url}
              playing={playVideo}
              lightPercentage={lightPercentage}
            />
          </PlayerContainer>
          <CaptionContainer>
            <Typography gutterBottom variant="h4">
              {currentVideo?.title}
            </Typography>
            <Typography gutterBottom variant="h6">
              {currentVideo?.subtitle}
            </Typography>
            <Typography variant="body2" className="description" gutterBottom>
              {currentVideo?.description}
            </Typography>
          </CaptionContainer>
        </>
      ) : (
        <Card />
      )}
    </StyledContainer>
  )
}

export default Display
