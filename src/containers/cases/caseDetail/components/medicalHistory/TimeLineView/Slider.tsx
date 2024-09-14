import { PRIMARY, SECONDARY, pxToRem } from "@/theme";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";
import { useSlider } from "@mui/base/useSlider";

const PrettoSlider = styled(Slider)({
  color: SECONDARY[50],
  height: pxToRem(8),
  "& .MuiSlider-track": {
    border: "none",
    color: SECONDARY[50],
  },
  "& .MuiSlider-thumb": {
    height: pxToRem(20),
    width: pxToRem(20),
    backgroundColor: SECONDARY[400],
    border: "none",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-mark": {
    height: pxToRem(8),
    width: pxToRem(8),
    backgroundColor: PRIMARY[500],
    borderRadius: "50%",
  },
});

const marks = [
  {
    value: 2016,
    // label: "0°C",
  },
  {
    value: 2018,
    // label: "20°C",
  },
  {
    value: 2020,
    // label: "37°C",
  },
  {
    value: 2022,
    // label: "100°C",
  },
  {
    value: 2024,
    // label: "100°C",
  },
];

const AppSlider = forwardRef(({ sliderRef }: { sliderRef: any }) => {
  return (
    <PrettoSlider
      valueLabelDisplay="off"
      aria-label="pretto slider"
      defaultValue={20}
      marks={marks}
      step={null}
      track={false}
      min={marks[0].value}
      max={marks[marks.length - 1].value}
      ref={sliderRef}
    />
  );
});

export default AppSlider;
