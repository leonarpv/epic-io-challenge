import { Pause, PlayArrow, SkipNext, SkipPrevious } from "@material-ui/icons"
import Button from "../../Atoms/Button"
import ButtonGroup from "../../Atoms/ButtonGroup"

const Controls = ({
  paused,
  handlePlay,
}: {
  paused: boolean
  handlePlay: () => void
}) => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>
        <SkipPrevious />
      </Button>
      <Button onClick={handlePlay}>{paused ? <PlayArrow /> : <Pause />}</Button>
      <Button>
        <SkipNext />
      </Button>
    </ButtonGroup>
  )
}

export default Controls
