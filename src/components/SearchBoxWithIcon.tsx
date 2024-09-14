import theme, { NEUTRAL, pxToRem } from "@/theme";
import { Box, Stack } from "@mui/material";
import React from "react";
import { SearchIcon } from "./svgs/SearchIcon";

export default function SearchBoxWithIcon({
  inputProps,
  inputStyles,
  boxStyles,
}: {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputStyles?: React.CSSProperties;
  boxStyles?: React.CSSProperties;
}) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{
        height: pxToRem(48),
        width: pxToRem(400),
        borderRadius: pxToRem(16),
        px: pxToRem(16),
        py: pxToRem(11),
        gap: pxToRem(8),
        border: `1px solid ${NEUTRAL[300]}`,
        ...boxStyles,
        "& input": {
          outline: "none",
          border: "none",
          width: "100%",
          ...inputStyles,
        },
      }}
    >
      <SearchIcon />
      <Box component={"input"} placeholder="Search" {...inputProps} />
    </Stack>
  );
}
