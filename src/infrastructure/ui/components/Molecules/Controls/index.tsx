import { Pause, PlayArrow, SkipNext, SkipPrevious } from "@material-ui/icons"
import Button from "../../Atoms/Button"
import ButtonGroup from "../../Atoms/ButtonGroup"

const Controls = ({ paused }: { paused: boolean }) => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>
        <SkipPrevious />
      </Button>
      <Button>{paused ? <PlayArrow /> : <Pause />}</Button>
      <Button>
        <SkipNext />
      </Button>
    </ButtonGroup>
  )
}

export default Controls
