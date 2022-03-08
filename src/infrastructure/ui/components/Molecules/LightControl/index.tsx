import React, { useContext } from "react";
import { Box } from "@material-ui/core";

import SliderControl from "../../Atoms/SliderControl";
import HomeContext from "../../../../../application/context/HomeContext";

export default function LightControl() {
  const { setBrightPercentage, setOpacityPercentage } = useContext(HomeContext);
  const handleOpacityChange = (
    event: React.ChangeEvent<any>,
    value: number | number[]
  ) => {
    event.preventDefault();
    const lightValue = value as number;
    const percentage = lightValue / 100;
    setOpacityPercentage(percentage);
  };

  const handleBrightChange = (
    event: React.ChangeEvent<any>,
    value: number | number[]
  ) => {
    event.preventDefault();
    const lightValue = value as number;
    const percentage = lightValue / 100;
    setBrightPercentage(percentage);
  };

  return (
    <Box flexDirection="row" display="flex">
      <SliderControl title="Brightness" onChange={handleBrightChange} />
      <SliderControl title="Opacity" onChange={handleOpacityChange} />
    </Box>
  );
}
