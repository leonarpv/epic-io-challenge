import { createContext } from "react"
import { IHomeContextState } from "./interfaces"

export const contextDefaultValues: IHomeContextState = {
  videos: [],
  currentVideo: null,
  brightPercentage: 0,
  opacityPercentage: 0,
  playVideo: false,
  setPlayVideo: () => {},
  setVideos: () => {},
  setBrightPercentage: () => {},
  setOpacityPercentage: () => {},
  setCurrentVideo: () => {},
};
const HomeContext = createContext<IHomeContextState>(contextDefaultValues)

export default HomeContext