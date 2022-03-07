import { memo } from "react"
import ReactPlayer from "react-player"
import { BaseReactPlayerProps } from "react-player/base"

const VideoPlayer = ({ props }: BaseReactPlayerProps) => (
  <ReactPlayer {...props} />
)

export default memo(VideoPlayer)
