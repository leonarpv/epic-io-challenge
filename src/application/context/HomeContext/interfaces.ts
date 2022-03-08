import Video from "../../../domain/entities/Video"

export interface IHomeContextState {
  videos: Video[]
  currentVideo: Video | null
  setVideos: (videos: Video[]) => void
  setCurrentVideo: (video: Video) => void
  lightPercentage: number
  setLightPercentage: (percentage: number) => void
  playVideo: boolean
  setPlayVideo: (value: boolean) => void
}
