import React, { useEffect, useState } from "react"
import HomeContext from "../../../../../application/context/HomeContext"
import Video from "../../../../../domain/entities/Video"
import VideoController from "../../../../controllers/VideoController"
import Controls from "../../Molecules/Controls"
import Display from "../../Molecules/Display"
import PlayerList from "../../Molecules/PlayerList"

export const Home = () => {
  const [loadingVideos, setLoadingVideos] = useState<boolean>(false)
  const [errorState, setErrorState] = useState<string>("")
  const [lightPercentage, setLightPercentage] = useState<number>(0.5)
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

  const handleLightChange = (
    event: React.ChangeEvent<any>,
    value: number | number[]
  ) => {
    const lightValue = value as number
    const light = lightValue / 100
    setLightPercentage(light)
  }
  return (
    <HomeContext.Provider value={{ videos, currentVideo, lightPercentage }}>
      <Display playing={playVideo} />
      <Controls
        disabled={loadingVideos}
        disabledPlay={!currentVideo}
        paused={!playVideo}
        handleLightChange={handleLightChange}
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
