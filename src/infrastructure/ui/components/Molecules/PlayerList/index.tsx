import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@material-ui/core"

import { IVideo } from "../../../../../domain/entities/Video"

export default function PlayerList({ videos }: { videos: IVideo[] }) {
  return (
    <ImageList>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {videos.map((video: IVideo) => (
        <ImageListItem key={video.thumbnail}>
          <img
            src={`${video.thumbnail}?w=248&fit=crop&auto=format`}
            srcSet={`${video.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={video.title}
            loading="lazy"
          />
          <ImageListItemBar title={video.title} subtitle={video.description} />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
