import { SECONDARY, pxToRem } from "@/theme";
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function MedicalTab() {
  return (
    <Stack
      sx={{
        px: pxToRem(32),
        pt: pxToRem(24),
        pb: pxToRem(24),
        gap: pxToRem(32),
      }}
    >
      <Stack gap={pxToRem(8)}>
        <Typography variant="h5" color={SECONDARY[500]}>
          Provider:
        </Typography>

        <Typography variant="body1" color={SECONDARY[400]}>
          PeaceHealth Southwest Regional
        </Typography>
      </Stack>
      <Stack gap={pxToRem(8)}>
        <Typography variant="h5" color={SECONDARY[500]}>
          Doctor:
        </Typography>

        <Typography variant="body1" color={SECONDARY[400]}>
          Robert Whitaker
        </Typography>
      </Stack>
      <Stack gap={pxToRem(8)}>
        <Typography variant="h5" color={SECONDARY[500]}>
          Source File
        </Typography>

        <Stack direction={"row"}></Stack>
      </Stack>
    </Stack>
  );
}
