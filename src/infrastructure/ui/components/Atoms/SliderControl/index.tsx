import React from "react";
import { Box, Slider, Typography } from "@material-ui/core";

export default function SliderControl({
  title,
  onChange,
}: {
  title: string;
  onChange: (event: React.ChangeEvent<any>, value: number | number[]) => void;
}) {
  return (
    <Box flexDirection="row" display="flex" justifyContent="space-between">
      <Typography id="input-slider" gutterBottom>
        {title}
      </Typography>
      <Box width={150} padding="20" flexDirection="row" display="flex">
        <Slider
          defaultValue={50}
          aria-labelledby="input-slider"
          onChange={onChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  );
}
