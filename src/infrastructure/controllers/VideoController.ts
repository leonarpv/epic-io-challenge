import { getVideoList } from "../../application/useCases/VideoUseCases"
import Video from "../../domain/entities/Video"
import ApiVideoRepository from "../repositories/ApiVideoRepository"

const api = new ApiVideoRepository()

export default class VideoController {
  static async getAllBreeds(): Promise<Video[]> {
    return getVideoList(api)
  }
}
