import Video from "../../domain/entities/Video"
import VideoRepository from "../../domain/interfaces/VideoRepository"

export async function getVideoList(
  videoRepository: VideoRepository
): Promise<Video[]> {
  const videoList = await videoRepository.getList()

  return videoList
}
