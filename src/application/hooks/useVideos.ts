import { useCallback, useContext, useEffect, useState } from "react"
import VideoController from "../../infrastructure/controllers/VideoController"
import HomeContext from "../context/HomeContext"

const useVideos = () => {
  const [loadingVideos, setLoadingVideos] = useState<boolean>(false)
  const { videos, setVideos } = useContext(HomeContext)
  const getAllVideos = useCallback(async () => {
    setLoadingVideos(true)
    try {
      const videosResponse = await VideoController.getAllVideos()
      setVideos(videosResponse)
      setLoadingVideos(false)
    } catch (error: unknown) {
      setLoadingVideos(false)
    }
  }, [])

  useEffect(() => {
    getAllVideos()
  }, [getAllVideos])

  return { videos, loadingVideos }
}

export default useVideos
