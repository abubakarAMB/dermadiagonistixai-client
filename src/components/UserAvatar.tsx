import { SECONDARY, pxToRem } from "@/theme";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { CustomImage } from "./CustomImage";

export function UserAvatar({
  title,
  subtitle,
  imgSx,
  textStackSx,
}: {
  title: string;
  subtitle: string;
  imgSx?: any;
  textStackSx?: any;
}) {
  return (
    <Stack gap={pxToRem(4)} direction={"row"} alignItems={"center"}>
      <CustomImage
        src="/images/userHeader.png"
        wrapperSx={{
          height: pxToRem(44),
          width: pxToRem(44),
          ...imgSx,
        }}
      />
      <Stack gap={pxToRem(4)} sx={{ ...textStackSx }}>
        <Typography variant="h5" color={SECONDARY[400]}>
          {title}
        </Typography>
        <Typography variant="body1" color={SECONDARY[300]}>
          {subtitle}
        </Typography>
      </Stack>
    </Stack>
  );
}
