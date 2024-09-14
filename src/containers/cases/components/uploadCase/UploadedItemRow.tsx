import { NEUTRAL, SECONDARY, pxToRem } from "@/theme";
import { Stack, Typography } from "@mui/material";
import { DeleteIcon } from "../svgs/DeleteIcon";
import { PdfIcon } from "../svgs/PdfIcon";

export default function UploadedItemRow() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderRadius={pxToRem(16)}
      border={`1px solid ${NEUTRAL[200]}`}
      width={"100%"}
      padding={pxToRem(8)}
    >
      <Stack direction={"row"} alignItems={"center"} gap={pxToRem(4)}>
        <PdfIcon />
        <Stack gap={pxToRem(2)}>
          <Typography variant="subtitle1" color={SECONDARY[400]}>
            Migrane.pdf
          </Typography>
          <Typography
            variant="subtitle1"
            color={SECONDARY[300]}
            fontSize={pxToRem(12)}
          >
            Uploaded | 5mb
          </Typography>
        </Stack>
      </Stack>
      <DeleteIcon />
    </Stack>
  );
}
