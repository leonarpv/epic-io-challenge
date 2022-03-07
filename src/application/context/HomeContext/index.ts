import { createContext } from "react"
import { IVideo } from "../../../domain/entities/Video"
interface IHomeContext {
  videos: IVideo[]
}

const HomeContext = createContext<IHomeContext | undefined>(undefined)

export default HomeContext
