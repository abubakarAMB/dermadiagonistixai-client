import { NEUTRAL, pxToRem } from "@/theme";
import { Box, Stack } from "@mui/material";
import Button from "@/components/Button";


export default function CommentTab() {
  return (
    <Stack
      sx={{
        px: pxToRem(32),
        pt: pxToRem(24),
        pb: pxToRem(24),
        gap: pxToRem(32),
      }}
    >
      <Box
        component={"input"}
        placeholder="Type your comment"
        sx={{
          border: `1px solid ${NEUTRAL[301]}`,
          width: "100%",
          px: pxToRem(20),
          py: pxToRem(18.5),
          height: pxToRem(140),
          borderRadius: pxToRem(16),
        }}
      />
      <Button
        sx={{
          height: pxToRem(48),
          width: pxToRem(90),
          borderRadius: pxToRem(16),
          fontSize: pxToRem(16),
          fontWeight: 600,
        }}
      >
        Submit
      </Button>
    </Stack>
  );
}
