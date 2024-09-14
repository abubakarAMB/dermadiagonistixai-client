import { CustomImage } from "@/components/CustomImage";
import { IconContainer } from "@/components/IconContainer";
import { SECONDARY, pxToRem } from "@/theme";
import { Stack, Typography } from "@mui/material";
import { MoreIcon } from "../../svg/MoreIcon";

const GridCard = () => {
  return (
    <Stack
      sx={{
        borderRadius: pxToRem(16),
        border: `1px solid rgba(221, 225, 225, 1)`,
        width: "fit-content",
      }}
    >
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        sx={{
          padding: pxToRem(16),
          borderTopLeftRadius: pxToRem(16),
          borderTopRightRadius: pxToRem(16),
          maxHeight: pxToRem(56),
        }}
      >
        <Typography variant={"h3"}>Maintenance</Typography>
        <IconContainer
          tooltip="More"
          sx={{ "&:hover": { background: "transparent" } }}
          onClick={() => ""}
        >
          <MoreIcon />
        </IconContainer>
      </Stack>
      <Stack>
        <CustomImage
          src="/images/pdf_sample.png"
          wrapperSx={{
            height: pxToRem(200),
            width: pxToRem(373),
          }}
        />
      </Stack>
      <Stack
        alignItems={"center"}
        direction={"row"}
        sx={{
          padding: pxToRem(16),
          borderBottomLeftRadius: pxToRem(16),
          borderBottomRightRadius: pxToRem(16),
          maxHeight: pxToRem(69),
        }}
      >
        <Stack gap={pxToRem(8)} direction={"row"} alignItems={"center"}>
          <CustomImage
            src="/images/userHeader.png"
            wrapperSx={{
              height: pxToRem(30),
              width: pxToRem(30),
            }}
          />
          <Stack gap={pxToRem(2)}>
            <Typography variant="subtitle1" color={SECONDARY[400]}>
              Justin Collins
            </Typography>
            <Typography variant="caption" color={SECONDARY[200]}>
              3 February, 2024
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default function MaintenanceGridView() {
  return (
    <Stack
      direction={"row"}
      sx={{
        padding: pxToRem(24),
        gap: pxToRem(24),
        flexWrap: "wrap",
      }}
    >
      <GridCard />
      <GridCard />
      <GridCard />
    </Stack>
  );
}
