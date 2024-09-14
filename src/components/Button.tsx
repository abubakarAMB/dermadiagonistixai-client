import { NEUTRAL, SECONDARY, pxToRem } from "@/theme";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const RoundedButton = styled(MuiButton)(({ theme }) => ({
  // borderRadius: "16px", // Adjust this value for more or less rounding
  textTransform: "initial",
  // You can add more custom styles here if needed
  background: SECONDARY[250],
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: pxToRem(14),
  padding: `${pxToRem(12)} ${pxToRem(20)} ${pxToRem(12)} ${pxToRem(20)}`, //  
  color: NEUTRAL[0],
  outline: "none",
  borderRadius: pxToRem(12),
  "&:hover": {
    background: SECONDARY[150],
  },
}));

export const Button: React.FC<MuiButtonProps> = (props) => (
  <RoundedButton {...props} />
);

export default Button;
