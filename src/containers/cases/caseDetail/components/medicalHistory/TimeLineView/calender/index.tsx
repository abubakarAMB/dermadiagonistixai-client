import Button from "@/components/Button";
import { IconContainer } from "@/components/IconContainer";
import { CloseModalIcon } from "@/components/svgs/CloseModalIcon";
import { showTimelIneCalenderVar } from "@/containers/cases/caseDetail/state";
import { NEUTRAL, PRIMARY, SECONDARY, pxToRem } from "@/theme";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "react-calendar";
import { NextIcon } from "../../../svg/NextIcon";
import { PrevIcon } from "../../../svg/PrevIcon";

const dateBoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: pxToRem(39),
  borderRadius: pxToRem(12),
  border: `1px solid ${NEUTRAL[200]}`,
  py: pxToRem(11.5),
  px: pxToRem(24),
  cursor: "pointer",
  "&:hover": {
    bgcolor: PRIMARY[25],
  },
};

const iconStyle = {
  width: "auto",
  height: "auto",
};

export default function TimelineCalender() {
  const [selectionRange, setSelectionRange] = useState([
    new Date(),
    new Date(),
  ]);

  function handleSelect(ranges: any) {
    console.log(ranges);
  }

  function handleChange(
    value: any,
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    console.log(value);
    if (value) setSelectionRange(value);
  }
  return (
    <Stack
      sx={{
        position: "absolute",
        bottom: pxToRem(100),
        left: "50%",
        transform: "translateX(-50%)",
        height: pxToRem(485),
        // width: pxToRem(810),
        bgcolor: NEUTRAL[0],
        borderRadius: pxToRem(16),
        boxShadow: "0px 0px 24px rgba(2, 38, 37, 0.1)",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={pxToRem(20)}
        height={pxToRem(64)}
      >
        <Typography variant={"h5"} color={SECONDARY[400]}>
          Select a timeline
        </Typography>
        <IconContainer
          tooltip="Close"
          onClick={() => showTimelIneCalenderVar(false)}
        >
          <CloseModalIcon />
        </IconContainer>
      </Stack>
      <Stack
        direction={"row"}
        // alignItems={"center"}
        sx={{
          borderTop: `1px solid ${NEUTRAL[200]}`,
          height: "100%",
          width: "100%",
          // bgcolor: "red",
        }}
      >
        <Stack
          sx={{
            borderRight: `1px solid ${NEUTRAL[200]}`,
            padding: pxToRem(8),
            gap: pxToRem(8),
            // minWidth: pxToRem(145),
            // width: "min-content",
            alignItems: "flex-start",
            height: "100%",
          }}
        >
          {[
            { title: "Custom", value: "custom" },
            { title: "Today", value: "today" },
            { title: "This week", value: "week" },
            { title: "This month", value: "month" },
            { title: "Last 3 months", value: "3month" },
            { title: "Last 12 months", value: "12month" },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                height: pxToRem(32),
                width: "100%",
                minWidth: "max-content",
                borderRadius: pxToRem(10),
                py: pxToRem(8),
                px: pxToRem(16),
                "&:hover": {
                  background: PRIMARY[25],
                  cursor: "pointer",
                },
                "& .active": {
                  color: SECONDARY[300],
                },
              }}
            >
              <Typography variant="subtitle2" color={SECONDARY[400]}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Stack width={"100%"}>
          <DateRangeCalendarValue
            handleChange={handleChange}
            selectionRange={selectionRange}
          />

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
              borderTop: `1px solid ${NEUTRAL[200]}`,
              padding: pxToRem(16),
              gap: pxToRem(8),
              width: "100%",
              // height: pxToRem(72),
            }}
          >
            <Stack direction={"row"} alignItems={"center"} gap={pxToRem(8)}>
              <Box sx={dateBoxStyle}>
                <Typography variant="subtitle2" color={SECONDARY[400]}>
                  {format(selectionRange[0], "MMM dd, yyyy")}
                </Typography>
              </Box>
              <Divider
                orientation="horizontal"
                sx={{
                  width: pxToRem(16),
                  color: NEUTRAL[200],
                }}
              />
              <Box sx={dateBoxStyle}>
                <Typography variant="subtitle2" color={SECONDARY[400]}>
                  {format(selectionRange[1], "MMM dd, yyyy")}
                </Typography>
              </Box>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={pxToRem(8)}>
              <Button
                sx={{
                  height: pxToRem(40),
                  width: pxToRem(86),
                  bgcolor: NEUTRAL[0],
                  border: `1px solid ${NEUTRAL[200]}`,
                  fontSize: pxToRem(16),
                  color: SECONDARY[300],
                  "&:hover": {
                    bgcolor: PRIMARY[25],
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  height: pxToRem(40),
                  width: pxToRem(86),
                }}
              >
                Apply
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

function DateRangeCalendarValue({
  handleChange,
  selectionRange,
}: {
  handleChange: (
    value: any,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  selectionRange: any;
}) {
  return (
    <Stack direction={"row"}>
      <Calendar
        value={selectionRange}
        returnValue="range"
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={true}
        selectRange={true}
        onChange={handleChange}
        className="tabcalender"
        showDoubleView={true}
        formatShortWeekday={(locale: string | undefined, date: Date) =>
          format(date, "EEEEE")
        }
        nextLabel={
          <IconContainer sx={iconStyle} tooltip="" onClick={() => ""}>
            <NextIcon size={pxToRem(19.2)} />
          </IconContainer>
        }
        prevLabel={
          <IconContainer sx={iconStyle} tooltip="" onClick={() => ""}>
            <PrevIcon size={pxToRem(19.2)} />
          </IconContainer>
        }
      />
      {/* <Calendar
        value={[new Date(), new Date()]}
        prev2Label={null}
        selectRange={true}
        next2Label={null}
        showNeighboringMonth={true}
        className="tabcalender"
        nextLabel={
          <IconContainer sx={iconStyle} tooltip="" onClick={() => ""}>
            <NextIcon size={pxToRem(19.2)} />
          </IconContainer>
        }
        prevLabel={
          <IconContainer sx={iconStyle} tooltip="" onClick={() => ""}>
            <PrevIcon size={pxToRem(19.2)} />
          </IconContainer>
        }
      /> */}
    </Stack>
  );
}
