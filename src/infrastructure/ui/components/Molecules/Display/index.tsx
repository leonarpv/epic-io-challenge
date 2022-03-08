import { useContext } from "react";
import { Card, Typography } from "@material-ui/core";
import VideoPlayer from "../../Atoms/VideoPlayer";
import HomeContext from "../../../../../application/context/HomeContext";
import useVideos from "../../../../../application/hooks/useVideos";
import {
  CaptionContainer,
  PlayerContainer,
  StyledContainer,
} from "./styles.css";

const Display = () => {
  const { currentVideo, brightPercentage, opacityPercentage } =
    useContext(HomeContext);
  const { playVideo } = useVideos();

  return (
    <StyledContainer>
      {currentVideo ? (
        <>
          <PlayerContainer>
            <VideoPlayer
              url={currentVideo.url}
              playing={playVideo}
              brightPercentage={brightPercentage}
              opacityPercentage={opacityPercentage}
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
  );
};

export default Display;
