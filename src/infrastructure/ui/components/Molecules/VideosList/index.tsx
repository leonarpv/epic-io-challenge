import { useEffect } from "react";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

import useVideos from "../../../../../application/hooks/useVideos";
import {
  LoaderContainer,
  StyledContainer,
  StyledImage,
  StyledSpan,
} from "./styles.css";

export default function VideosList() {
  const { videos, getAllVideos, loadingVideos, handleSelectVideo } =
    useVideos();

  useEffect(() => {
    getAllVideos();
  }, [getAllVideos]);
  if (loadingVideos) {
    return (
      <LoaderContainer>
        <CircularProgress size={90} />
      </LoaderContainer>
    );
  }

  return (
    <StyledContainer>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Videos</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Videos"
          onChange={handleSelectVideo}
        >
          {videos.map((video, index) => {
            return (
              <MenuItem key={video.id} value={video.id}>
                <StyledImage
                  src={`${video.thumbnail}?w=20&h=20&fit=crop&auto=format`}
                  srcSet={`${video.thumbnail}?w=20&h=20&fit=crop&auto=forma`}
                  alt={video.title}
                  loading="lazy"
                />
                <StyledSpan> {video.title}</StyledSpan>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </StyledContainer>
  );
}
