import React, { useContext } from "react";
import { Box, Typography } from "@material-ui/core";
import HomeContext from "../../../../../application/context/HomeContext";
import useVideos from "../../../../../application/hooks/useVideos";

import Controls from "../../Molecules/Controls";
import Display from "../../Molecules/Display";
import LightControl from "../../Molecules/LightControl";
import VideosList from "../../Molecules/VideosList";

export const Home = () => {
  const { playVideo, setPlayVideo } = useVideos();
  const { setLightPercentage, currentVideo } = useContext(HomeContext);
  const handleLightChange = (
    event: React.ChangeEvent<any>,
    value: number | number[]
  ) => {
    event.preventDefault();
    const lightValue = value as number;
    const percentage = lightValue / 100;
    setLightPercentage(percentage);
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      {!currentVideo && (
        <Typography gutterBottom variant="h2" align="center">
          Select one video
        </Typography>
      )}
      <Display />
      {currentVideo && (
        <Box display="flex" flexDirection="row" justifyContent="space-evenly">
          <Controls
            currentVideo={currentVideo}
            paused={!playVideo}
            handlePlay={() => setPlayVideo(!playVideo)}
          />
          <LightControl onChange={handleLightChange} />
        </Box>
      )}
      <Box display="flex" flexDirection="row">
        <VideosList />
      </Box>
    </Box>
  );
};
