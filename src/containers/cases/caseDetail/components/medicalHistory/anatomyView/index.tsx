import { NEUTRAL, pxToRem } from "@/theme";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

export default function AnatomyView() {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        borderRight: `1px solid ${NEUTRAL[900]}`,
        borderLeft: `1px solid ${NEUTRAL[900]}`,
        width: "100%",
        height: { xs: "50vh", sm: "100%" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "block",
          height: "100%",
          width: { xs: "100%", sm: pxToRem(969) },
        }}
      >
        <Image
          src={"/images/human_anatomy_in_2.svg"}
          alt="anatomy"
          fill={true}
          layout="fill"
          objectFit=""
          objectPosition="none"
          priority={true}
        />
      </Box>
    </Stack>
  );
}
