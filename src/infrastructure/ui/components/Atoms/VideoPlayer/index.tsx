import ReactPlayer from "react-player"
import { BaseReactPlayerProps } from "react-player/base"

const VideoPlayer = ({ props }: BaseReactPlayerProps) => (
  <ReactPlayer {...props} />
)

export default VideoPlayer
