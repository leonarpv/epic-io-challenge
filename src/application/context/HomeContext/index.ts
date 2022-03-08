import { createContext } from "react"
import { IHomeContextState } from "./interfaces"

export const contextDefaultValues: IHomeContextState = {
  videos: [],
  currentVideo: null,
  lightPercentage: 0,
  playVideo: false,
  setPlayVideo: () => {},
  setVideos: () => {},
  setLightPercentage: () => {},
  setCurrentVideo: () => {},
}
const HomeContext = createContext<IHomeContextState>(contextDefaultValues)

export default HomeContext