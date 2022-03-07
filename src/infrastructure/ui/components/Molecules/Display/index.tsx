import { Container } from "@material-ui/core"
import VideoPlayer from "../../Atoms/VideoPlayer"

const Display = ({ src, playing }: { src: string; playing: boolean }) => {
  return (
    <Container maxWidth="md">
      <VideoPlayer width="100%" url={src} playing={playing} />
    </Container>
  )
}

export default Display
