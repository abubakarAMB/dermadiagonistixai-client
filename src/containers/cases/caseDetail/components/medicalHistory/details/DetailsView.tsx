import { IconContainer } from "@/components/IconContainer";
import ShareIcon from "@/components/svgs/ShareIcon";
import { BackIcon } from "@/containers/cases/components/svgs/BackIcon";
import { NEUTRAL, SECONDARY, pxToRem } from "@/theme";
import { IconButton, Stack, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";
import { CaseDetailEnum, MapViewEnum } from "../../../constants";
import DiseaseTag from "../../DiseaseTags";
import { QuestMarkIcon } from "../../svg/QuestMarkIcon";
import BottomTab from "./BottomTab";

const CustomToolTip = () => {
  return (
    <Stack>
      <Typography variant="subtitle2" color={"rgba(255, 255, 255, 1)"}>
        Adding Tags
      </Typography>
      <Typography variant="subtitle2" color={"rgba(255, 255, 255, 1)"}>
        Tooltips are used to describe or identify an element. In most scenarios,
        tooltips help the user understand the meaning, function or alt-text of
        an element.
      </Typography>
    </Stack>
  );
};

export default function DetailsView() {
  const router = useRouter();
  return (
    <Stack
      sx={{
        borderRight: `1px solid ${NEUTRAL[900]}`,
        borderLeft: `1px solid ${NEUTRAL[900]}`,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          px: { xs: pxToRem(16), sm: pxToRem(32) },
          py: pxToRem(24),
          pb: pxToRem(8),
          maxHeight: { sm: pxToRem(86) },
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={pxToRem(4)}
          sx={{ cursor: "pointer" }}
        >
          <BackIcon />
          <Typography
            variant="subtitle2"
            color={SECONDARY[300]}
            onClick={() =>
              router.push(
                `/dashboard/case/1/${CaseDetailEnum.medicalHistory}?view=${MapViewEnum.mapView}`
              )
            }
          >
            Go back to map view
          </Typography>
        </Stack>
        <IconContainer tooltip="Share" onClick={() => ""}>
          <ShareIcon />
        </IconContainer>
      </Stack>
      <Stack sx={{}}>
        <Stack
          sx={{
            px: { xs: pxToRem(16), sm: pxToRem(32) },
            py: pxToRem(8),
          }}
        >
          <Typography
            variant="h1"
            fontSize={pxToRem(48)}
            color={SECONDARY[500]}
          >
            Tuberculosis
          </Typography>
        </Stack>
        <Stack
          sx={{
            px: { xs: pxToRem(16), sm: pxToRem(32) },
            py: pxToRem(8),
            gap: pxToRem(8),
          }}
        >
          <Stack gap={pxToRem(8)}>
            <Typography variant="subtitle2" color={SECONDARY[300]}>
              Amount Spent
            </Typography>
            <Typography
              variant="h3"
              fontSize={pxToRem(23)}
              color={SECONDARY[400]}
            >
              $3,300
            </Typography>
          </Stack>
          <Stack gap={pxToRem(16)} py={pxToRem(8)}>
            <Stack direction={"row"} alignItems={"center"}>
              <Typography variant="subtitle2" color={SECONDARY[300]}>
                Tags
              </Typography>
              <Tooltip title={<CustomToolTip />} placement="right" arrow>
                <IconButton>
                  <QuestMarkIcon />
                </IconButton>
              </Tooltip>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={pxToRem(16)}
              flexWrap={"wrap"}
            >
              {["Claim related", "Privilliged", "Tag 3"].map((tag, index) => (
                <DiseaseTag title={tag} key={index} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <BottomTab />
      </Stack>
    </Stack>
  );
}
