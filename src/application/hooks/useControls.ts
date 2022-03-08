import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import Video from "../../domain/entities/Video"
import VideoController from "../../infrastructure/controllers/VideoController"
import HomeContext from "../context/HomeContext"
import useVideos from "./useVideos"

const useControls = ({ currentVideo }: { currentVideo: Video }) => {
  const { setCurrentVideo } = useContext(HomeContext)
  const { videos } = useVideos()

  const currentIndex = useMemo(
    () => videos.findIndex((item) => item.id === currentVideo.id),
    [currentVideo]
  )
  const isTheFirsVideo = currentIndex === 0
  const isTheLastVideo = currentIndex === videos.length - 1
  // Prev
  const handlePrevious = () => {
    const indexSelected = videos.findIndex(
      (item) => item.id === currentVideo.id
    )
    setCurrentVideo(videos[indexSelected - 1])
  }

  // Next
  const handleNext = () => {
    const indexSelected = videos.findIndex(
      (item) => item.id === currentVideo.id
    )
    setCurrentVideo(videos[indexSelected + 1])
  }

  return { handlePrevious, handleNext, isTheFirsVideo, isTheLastVideo }
}

export default useControls
