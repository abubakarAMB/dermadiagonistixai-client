import { NEUTRAL, SECONDARY, pxToRem } from "@/theme";
import { IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SmallAddIcon } from "./svg/SmallAddIcon";
import { SmallCloseIcon } from "./svg/SmallCloseIcon";

export default function DiseaseTag({ title }: { title: string }) {
  const [selected, setSelected] = useState(false);
  return (
    <Stack
      onClick={() => setSelected(!selected)}
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: pxToRem(8),
        // justifyContent: "center",
        alignItems: "center",
        // minWidth: pxToRem(127),
        px: pxToRem(16),
        width: "fit-content",
        height: pxToRem(33),
        borderRadius: pxToRem(16),
        backgroundColor: selected ? NEUTRAL[200] : "#FFFFFF",
        border: `1px solid ${SECONDARY[200]}`,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: NEUTRAL[100],
        },
      }}
    >
      <Typography
        variant="subtitle2"
        color={selected ? SECONDARY[400] : SECONDARY[300]}
      >
        {title}
      </Typography>
      {selected ? (
        <IconButton onClick={() => ""}>
          <SmallCloseIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => ""}>
          <SmallAddIcon />
        </IconButton>
      )}
    </Stack>
  );
}
