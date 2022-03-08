import { Pause, PlayArrow, SkipNext, SkipPrevious } from "@material-ui/icons"
import useControls from "../../../../../application/hooks/useControls"
import Video from "../../../../../domain/entities/Video"
import Button from "../../Atoms/Button"
import ButtonGroup from "../../Atoms/ButtonGroup";

export default function Controls({
  paused,
  handlePlay,
  currentVideo,
}: {
  paused: boolean;
  handlePlay: () => void;
  currentVideo: Video;
}) {
  const { handlePrevious, handleNext, isTheFirsVideo, isTheLastVideo } =
    useControls({
      currentVideo,
    });
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button disabled={isTheFirsVideo}>
        <SkipPrevious onClick={handlePrevious} />
      </Button>
      <Button onClick={handlePlay}>{paused ? <PlayArrow /> : <Pause />}</Button>
      <Button disabled={isTheLastVideo}>
        <SkipNext onClick={handleNext} />
      </Button>
    </ButtonGroup>
  );
}

