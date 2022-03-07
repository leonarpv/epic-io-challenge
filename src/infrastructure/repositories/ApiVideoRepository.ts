import Video, { ResponseVideo } from "../../domain/entities/Video"
import VideoRepository from "../../domain/interfaces/VideoRepository"

export default class ApiVideoRepository implements VideoRepository {
  async getList(): Promise<Video[]> {
    const response = await fetch("")
    const data = await response.json()
    const videos = data.map((video: ResponseVideo) => {
      return new Video({
        src: video.sources,
        thumbnail: video.thumb,
        ...video,
      })
    })
    return videos
  }
}
