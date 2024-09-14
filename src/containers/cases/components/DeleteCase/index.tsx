import { NEUTRAL, SECONDARY, pxToRem } from "@/theme";
import { Button, Stack, Typography } from "@mui/material";
import { DeleteNotification } from "../svgs/DeleteNotification";

export default function DeleteCase() {
  return (
    <Stack
      sx={{
        width: pxToRem(327),
        padding: pxToRem(20),
        gap: pxToRem(32),
      }}
    >
      <Stack gap={pxToRem(8)} alignItems={'center'}>
        <DeleteNotification />
        <Stack gap={pxToRem(16)}>
          <Typography variant="h5" color={SECONDARY[400]}>
            Upload File
          </Typography>
        </Stack>
        <Typography variant="body2" color={SECONDARY[300]} textAlign={'center'}>
          Are you sure you want to delete this case? This action can not be
          undone!
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={pxToRem(16)}>
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            border: `1px solid ${NEUTRAL[300]}`,
            borderRadius: pxToRem(16),
          }}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ width: "100%", borderRadius: pxToRem(16) }}
        >
          No
        </Button>
      </Stack>
    </Stack>
  );
}
