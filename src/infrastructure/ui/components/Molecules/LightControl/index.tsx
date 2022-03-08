import React from "react"
import { Box, Slider } from "@material-ui/core"

export default function LightControl({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<any>, value: number | number[]) => void
}) {
  return (
    <Box width={300}>
      <Slider
        defaultValue={50}
        aria-label="Default"
        onChange={onChange}
        valueLabelDisplay="auto"
      />
    </Box>
  )
}
