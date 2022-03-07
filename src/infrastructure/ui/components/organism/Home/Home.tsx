import { stringify } from "querystring"
import React, { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { IVideo } from "../../../../../domain/entities/Video"
import VideoController from "../../../../controllers/VideoController"
import Controls from "../../Molecules/Controls"
import Display from "../../Molecules/Display"
import PlayerList from "../../Molecules/PlayerList"

export const Home = () => {
  const [loadingVideos, setLoadingVideos] = useState<boolean>(false)
  const [errorState, setErrorState] = useState<string>("")
  const [videos, setVideos] = useState<IVideo[]>([])

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

  return (
    <div>
      <Display />
      <Controls paused />
      <PlayerList videos={videos} />
    </div>
  )
}


