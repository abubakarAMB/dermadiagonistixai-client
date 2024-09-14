import { IconContainer } from "@/components/IconContainer";
import { NEUTRAL, PRIMARY, SECONDARY, pxToRem } from "@/theme";
import { useReactiveVar } from "@apollo/client";
import {
  ClickAwayListener,
  IconButton,
  Portal,
  Stack,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { MapViewEnum } from "../../../constants";
import { showTimelIneCalenderVar } from "../../../state";
import { NextIcon } from "../../svg/NextIcon";
import { PrevIcon } from "../../svg/PrevIcon";
import { TimelineAddIcon } from "../../svg/TimelineAddIcon";
import AppSlider from "./Slider";
import TimelineCalender from "./calender";

const iconStyle = {
  width: "auto",
  height: "auto",
};

export function MapViewTimeLine() {
  const sliderRef = useRef<any>(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      console.log(sliderRef.current);
      sliderRef.current?.slickPrev();
    }
  };

  const handleNext = () => {
    console.log(sliderRef.current);
    if (sliderRef.current) {
      sliderRef.current?.slickNext();
    }
  };

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        width: "100%",
        height: pxToRem(72),
        padding: pxToRem(16),
        borderTop: `1px solid rgba(241, 243, 243, 1)`,
        gap: pxToRem(8),
      }}
    >
      <Stack gap={pxToRem(4)} direction={"row"} alignItems={"center"}>
        <IconContainer sx={iconStyle} tooltip="" onClick={() => handlePrev()}>
          <PrevIcon size={pxToRem(19.2)} />
        </IconContainer>
        <Typography variant="subtitle2" color={SECONDARY[400]}>
          2021
        </Typography>
      </Stack>
      <Stack padding={pxToRem(8)} width={"100%"}>
        <AppSlider sliderRef={sliderRef} />
      </Stack>
      <Stack gap={pxToRem(4)} direction={"row"} alignItems={"center"}>
        <Typography variant="subtitle2" color={SECONDARY[400]}>
          2004
        </Typography>
        <IconContainer sx={iconStyle} tooltip="" onClick={() => ""}>
          <NextIcon size={pxToRem(19.2)} />
        </IconContainer>
      </Stack>
    </Stack>
  );
}

export function DetailViewTimeLine() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        width: "100%",
        height: pxToRem(72),
        padding: pxToRem(16),
        borderTop: `1px solid rgba(241, 243, 243, 1)`,
      }}
    >
      <Typography variant="subtitle2" color={SECONDARY[400]}>
        25 March, 2021
      </Typography>
      <Stack gap={pxToRem(12)} direction={"row"} alignItems={"center"}>
        <IconButton>
          <PrevIcon size={pxToRem(19.2)} />
        </IconButton>
        <Typography variant="subtitle2" color={SECONDARY[400]}>
          2/4
        </Typography>
        <IconButton>
          <NextIcon size={pxToRem(19.2)} />{" "}
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default function TimeLineView({ view }: { view: string }) {
  return (
    <Stack
      justifyContent={"flex-end"}
      sx={{
        position: "relative",
        width: "100%",
        height: view == MapViewEnum.mapView ? pxToRem(100) : 'auto',
        bgcolor: "transparent",
      }}
    >
      {view == MapViewEnum.mapView && <MapViewTimeLine />}
      {view == MapViewEnum.detailsView && <DetailViewTimeLine />}
      {view == MapViewEnum.mapView && <TimelinePill />}
    </Stack>
  );
}

function TimelinePill() {
  const showTimelIneCalender = useReactiveVar(showTimelIneCalenderVar);

  const handleClick = () => {
    showTimelIneCalenderVar(!showTimelIneCalender);
  };
  const handleClickAway = () => {
    showTimelIneCalenderVar(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Stack>
        <Stack
          onClick={handleClick}
          direction={"row"}
          alignItems={"center"}
          gap={pxToRem(4)}
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: pxToRem(7),
            border: `1px solid ${NEUTRAL[200]}`,
            borderRadius: pxToRem(20),
            py: pxToRem(8),
            px: pxToRem(16),
            bgcolor: NEUTRAL[0],
            "&:hover": {
              bgcolor: PRIMARY[25],
              border: `1px solid #DDE1E1`,
              cursor: "pointer",
            },
          }}
        >
          <Typography variant="body2" color={SECONDARY[400]}>
            Select a Timeline
          </Typography>
          <TimelineAddIcon />
        </Stack>
        {showTimelIneCalender ? (
          <Portal>
            <TimelineCalender />
          </Portal>
        ) : null}
      </Stack>
    </ClickAwayListener>
  );
}
// CloseModalIcon
