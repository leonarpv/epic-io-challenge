import React from "react"
import { Box, InputLabel, Slider } from "@material-ui/core"
import { Brightness1, Brightness4, WbSunny } from "@material-ui/icons"

export default function LightControl({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<any>, value: number | number[]) => void
}) {
  return (
    <Box width={200} flexDirection="row" display="flex">
      <InputLabel id="demo-simple-slider-label">Brightness</InputLabel>
      <Box width={150} flexDirection="row" display="flex">
        <Brightness4 />
        <Slider
          defaultValue={50}
          aria-label="demo-simple-slider-label"
          onChange={onChange}
          valueLabelDisplay="auto"
        />
        <WbSunny />
      </Box>
    </Box>
  )
}
