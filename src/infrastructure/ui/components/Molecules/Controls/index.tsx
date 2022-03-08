import { Pause, PlayArrow, SkipNext, SkipPrevious } from "@material-ui/icons"
import Button from "../../Atoms/Button"
import ButtonGroup from "../../Atoms/ButtonGroup"
import LightControl from "../LightControl"

const Controls = ({
  paused,

  handlePlay,
  handleLightChange,
}: {
  paused: boolean

  handlePlay: () => void
  handleLightChange: (
    event: React.ChangeEvent<any>,
    value: number | number[]
  ) => void
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
      <LightControl onChange={handleLightChange} />
    </ButtonGroup>
  )
}

export default Controls
