import { createContext } from "react"
import Video from "../../../domain/entities/Video"
interface IHomeContext {
  videos: Video[]
  currentVideo: Video | null
}

const HomeContext = createContext<IHomeContext | undefined>(undefined)

export default HomeContext
