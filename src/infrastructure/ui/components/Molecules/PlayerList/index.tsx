import {
  CircularProgress,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@material-ui/core"
import { PlayArrow } from "@material-ui/icons"

import Video from "../../../../../domain/entities/Video"

export default function PlayerList({
  videos,
  loading,
  handleClickItem,
}: {
  videos: Video[]
  loading: boolean
  handleClickItem: ({ itemId }: { itemId: number }) => void
}) {
  if (loading) {
    return (
      <ImageListItem key="Subheader" cols={2}>
        <CircularProgress />
      </ImageListItem>
    )
  }

  return (
    <ImageList>
      {videos.map((video: Video) => (
        <ImageListItem key={video.thumbnail}>
          <img
            src={`${video.thumbnail}?w=248&fit=crop&auto=format`}
            srcSet={`${video.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={video.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={video.title}
            subtitle={video.description}
            actionIcon={
              <IconButton onClick={() => handleClickItem({ itemId: video.id })}>
                <PlayArrow />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
