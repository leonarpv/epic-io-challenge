import { createContext } from "react"
import Video from "../../../domain/entities/Video"

interface IHomeContextState {
  videos: Video[]
  currentVideo: Video | null
  lightPercentage: number
}

const HomeContext = createContext<IHomeContextState | null>(null)

export default HomeContext
