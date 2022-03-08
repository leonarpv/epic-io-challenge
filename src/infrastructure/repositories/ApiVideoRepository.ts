import Video, { ResponseVideo } from "../../domain/entities/Video"
import VideoRepository from "../../domain/interfaces/VideoRepository"

export default class ApiVideoRepository implements VideoRepository {
  async getList(): Promise<Video[]> {
    const response = await fetch(
      `${process.env.REACT_APP_API}/b/5ef409df2406353b2e0c4068`
    )
    const { categories } = await response.json()
    const [movies] = categories
    const newVideos = [...movies.videos].map((video: ResponseVideo) => {
      return new Video({
        url: video.sources,
        thumbnail: video.thumb,
        ...video,
      })
    })

    return newVideos
  }
}
