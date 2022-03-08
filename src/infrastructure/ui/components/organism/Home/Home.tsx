import React, { useContext, useEffect, useState } from "react"
import HomeContext from "../../../../../application/context/HomeContext"
import VideoController from "../../../../controllers/VideoController"
import Controls from "../../Molecules/Controls"
import Display from "../../Molecules/Display"
import VideosList from "../../Molecules/VideosList"

export const Home = () => {
  const [playVideo, setPlayVideo] = useState<boolean>(false)

  const { setLightPercentage } = useContext(HomeContext)
  const handleLightChange = (
    event: React.ChangeEvent<any>,
    value: number | number[]
  ) => {
    const lightValue = value as number
    const percentage = lightValue / 100
    setLightPercentage(percentage)
  }

  return (
    <>
      <Display playing={playVideo} />
      <Controls
        paused={!playVideo}
        handleLightChange={handleLightChange}
        handlePlay={() => setPlayVideo(!playVideo)}
      />
      <VideosList />
    </>
  )
}
