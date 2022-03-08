import { useCallback, useContext, useState } from "react";
import VideoController from "../../infrastructure/controllers/VideoController";
import HomeContext from "../context/HomeContext";

const useVideos = () => {
  const [loadingVideos, setLoadingVideos] = useState<boolean>(false);
  const { videos, setVideos, setCurrentVideo, setPlayVideo, playVideo } =
    useContext(HomeContext);
  const getAllVideos = useCallback(async () => {
    setLoadingVideos(true);
    try {
      const videosResponse = await VideoController.getAllVideos();
      setVideos(videosResponse);
      setLoadingVideos(false);
    } catch (error: unknown) {
      setLoadingVideos(false);
    }
  }, [setVideos]);

  const handleSelectVideo = (
    event: React.ChangeEvent<{ name?: string; value: any }>
  ) => {
    const id = event.target.value;
    const indexSelected = videos.findIndex((item) => item.id === id);
    const selectedVideo = videos[indexSelected];
    setPlayVideo(true);
    setCurrentVideo(selectedVideo);
  };

  return {
    videos,
    getAllVideos,
    loadingVideos,
    handleSelectVideo,
    playVideo,
    setPlayVideo,
  };
};

export default useVideos;
