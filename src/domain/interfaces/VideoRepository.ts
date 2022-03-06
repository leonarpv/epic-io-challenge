import Video from "../entities/Video"

export default interface VideoRepository {
  getList(): Promise<Video[]>
}
