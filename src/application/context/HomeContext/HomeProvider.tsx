import React, { useState, FC } from "react";
import HomeContext, { contextDefaultValues } from ".";
import Video from "../../../domain/entities/Video";
import { IHomeContextState } from "./interfaces";

const HomeProvider: FC = ({ children }) => {
  const [videos, setVideos] = useState<Video[]>(contextDefaultValues.videos);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(
    contextDefaultValues.currentVideo
  );
  const [brightPercentage, setBrightPercentage] = useState<number>(
    contextDefaultValues.brightPercentage
  );
  const [opacityPercentage, setOpacityPercentage] = useState<number>(
    contextDefaultValues.opacityPercentage
  );
  const [playVideo, setPlayVideo] = useState(contextDefaultValues.playVideo);
  return (
    <HomeContext.Provider
      value={
        {
          videos,
          setVideos,
          currentVideo,
          setCurrentVideo,
          brightPercentage,
          setBrightPercentage,
          opacityPercentage,
          setOpacityPercentage,
          playVideo,
          setPlayVideo,
        } as unknown as IHomeContextState
      }
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
