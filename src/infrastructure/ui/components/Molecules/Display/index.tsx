import { useContext } from "react"
import { Card, Container, Typography } from "@material-ui/core"
import VideoPlayer from "../../Atoms/VideoPlayer"
import HomeContext from "../../../../../application/context/HomeContext"

const Display = ({ playing }: { playing: boolean }) => {
  const { currentVideo, lightPercentage } = useContext(HomeContext)

  return (
    <Container maxWidth="md">
      {currentVideo ? (
        <>
          <VideoPlayer
            url={currentVideo.url}
            playing={playing}
            lightPercentage={lightPercentage}
          />
          <Typography gutterBottom variant="h3" component="div">
            {currentVideo?.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {currentVideo?.subtitle}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {currentVideo?.description}
          </Typography>
        </>
      ) : (
        <Card />
      )}
    </Container>
  )
}

export default Display
