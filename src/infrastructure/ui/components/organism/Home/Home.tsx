import { Container } from "@material-ui/core"
import { stringify } from "querystring"
import React, { useEffect, useState } from "react"
import HomeContext from "../../../../../application/context/HomeContext"
import VideoContext from "../../../../../application/context/VideoContext"
import Video from "../../../../../domain/entities/Video"
import VideoController from "../../../../controllers/VideoController"
import Controls from "../../Molecules/Controls"
import Display from "../../Molecules/Display"
import PlayerList from "../../Molecules/PlayerList"

export const Home = () => {
  const [loadingVideos, setLoadingVideos] = useState<boolean>(false)
  const [errorState, setErrorState] = useState<string>("")
  const [videos, setVideos] = useState<Video[]>([])
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null)
  const [playVideo, setPlayVideo] = useState<boolean>(false)

  const getAllVideos = async () => {
    setLoadingVideos(true)
    try {
      const videosResponse = await VideoController.getAllVideos()
      setVideos(videosResponse)
      setLoadingVideos(false)
    } catch (error: unknown) {
      setErrorState(error as string)
      setLoadingVideos(false)
    }
  }
  useEffect(() => {
    getAllVideos()
  }, [])

  const handleClickItem = ({ itemId }: { itemId: number }) => {
    const indexSelected = videos.findIndex((item) => item.id === itemId)
    const selectedVideo = videos[indexSelected]
    setPlayVideo(true)
    setCurrentVideo(selectedVideo)
  }

  return (
    <HomeContext.Provider value={{ videos, currentVideo }}>
      {currentVideo && <Display src={currentVideo.src} playing={playVideo} />}
      <Controls
        paused={!playVideo}
        handlePlay={() => setPlayVideo(!playVideo)}
      />
      <PlayerList
        videos={videos}
        handleClickItem={handleClickItem}
        loading={loadingVideos}
      />
    </HomeContext.Provider>
  )
}
