import { SECONDARY, pxToRem } from "@/theme";
import { Stack, Typography } from "@mui/material";

export default function GeneralTab() {
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
          Charts Notes:
        </Typography>

        <Typography variant="body1" color={SECONDARY[400]} lineHeight={pxToRem(19.2)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </Stack>
      <Stack gap={pxToRem(8)}>
        <Typography variant="h5" color={SECONDARY[500]}>
          Related:
        </Typography>

        <Typography variant="body1" color={SECONDARY[400]}>
          25 March, 2021
        </Typography>
      </Stack>
    </Stack>
  );
}
