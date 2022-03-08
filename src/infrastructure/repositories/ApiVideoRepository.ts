import axios, { AxiosResponse } from "axios"
import Video, { ResponseVideo } from "../../domain/entities/Video"
import VideoRepository from "../../domain/interfaces/VideoRepository"

export default class ApiVideoRepository implements VideoRepository {
  async getList(): Promise<Video[]> {
    const response: AxiosResponse<any, any> = await axios.get(
      `${process.env.REACT_APP_API}/b/5ef409df2406353b2e0c4068`
    )
    if (response.status !== 200) {
      throw new Error("Error getting data")
    }
    const { categories } = response.data
    const [movies] = categories
    const newVideos = [...movies.videos].map((video: ResponseVideo) => {
      return new Video({
        url: video.sources,
        thumbnail: video.thumb,
        ...video,
      })
    })
    console.log({ newVideos })
    return newVideos
  }
}
