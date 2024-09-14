import { SECONDARY, pxToRem } from "@/theme";
import { useReactiveVar } from "@apollo/client";
import { Box, Collapse, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CaseDetailEnum, MapViewEnum } from "../../../constants";
import { showTimelIneCalenderVar } from "../../../state";
import TimelineCalender from "../TimeLineView/calender";

const SECONDARY400 = "rgba(53, 81, 81, 1)";

export default function IcdCodeDescription() {
  const router = useRouter();
  const showTimelIneCalender = useReactiveVar(showTimelIneCalenderVar);
  const [checked, setChecked] = useState(false);

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 112px - 180px)",
        position: "relative",
        pt: pxToRem(41),
      }}
    >
      <Stack
        sx={{
          width: pxToRem(282),
          border: "1px solid rgba(221, 225, 225, 1)",
          borderTop: "none",
          borderBottomLeftRadius: pxToRem(16),
          borderBottomRightRadius: pxToRem(16),
          position: "absolute",
          top: 0,
          left: pxToRem(16),
          zIndex: 10,
          bgcolor: "white",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            padding: pxToRem(16),
            width: "100%",
            borderBottom: `1px solid rgba(221, 225, 225, 1)`,
          }}
        >
          <Typography variant={"h5"} color={`rgba(69, 72, 73, 1)`}>
            Total Amount
          </Typography>
          <Typography
            variant={"subtitle1"}
            color={`rgba(23, 26, 28, 1)`}
            onClick={() => setChecked(!checked)}
            sx={{ cursor: "pointer" }}
          >
            {checked ? "Hide" : "View"}
          </Typography>
        </Stack>
        <Collapse in={checked}>
          <Stack
            sx={{
              padding: pxToRem(16),
              gap: pxToRem(12),
            }}
          >
            {[
              "Migraine",
              "Asthma",
              "Hypertension",
              "Bruise of right thigh",
            ].map((item, index) => (
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent={"space-between"}
                key={index}
              >
                <Typography
                  onClick={() =>
                    router.push(
                      `/dashboard/case/1/${CaseDetailEnum.medicalHistory}?view=${MapViewEnum.detailsView}`
                    )
                  }
                  variant={"body1"}
                  color={`${SECONDARY400}`}
                  sx={{
                    ":hover": {
                      color: SECONDARY[500],
                      fontWeight: 600,
                      cursor: "pointer",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item}
                </Typography>
                <Typography
                  variant={"body1"}
                  color={`${SECONDARY400}`}
                  // sx={{
                  //   ":hover": {
                  //     color: SECONDARY[500],
                  //     fontWeight: 600,
                  //     cursor: "pointer",
                  //   },
                  // }}
                >
                  $7,000
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Collapse>
        <Stack
          sx={{
            py: pxToRem(8),
            px: pxToRem(12),
            bgcolor: "rgba(240, 248, 248, 1)",
            borderBottomLeftRadius: pxToRem(16),
            borderBottomRightRadius: pxToRem(16),
          }}
        >
          <Typography
            variant={"h2"}
            color={`${SECONDARY[500]}`}
            fontSize={pxToRem(32)}
          >
            $12,000
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          position: "relative",
          display: "block",
          height: "100%",
          width: pxToRem(320),
        }}
      >
        <Image
          src={"/images/human_anatomy_out.svg"}
          alt="anatomy"
          fill={true}
          layout="fill"
          objectFit=""
          objectPosition="none"
          priority={true}
        />
      </Box>

      {/* <TimelineCalender /> */}
      {/* {showTimelIneCalender ? <TimelineCalender /> : null} */}
    </Stack>
  );
}
