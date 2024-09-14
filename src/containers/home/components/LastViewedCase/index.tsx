import Button from "@/components/Button";
import { CustomImage } from "@/components/CustomImage";
import { NEUTRAL, SECONDARY, pxToRem } from "@/theme";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { CaseIcon } from "../svg/CaseIcon";

export default function LastViewedCase() {
  return (
    <Stack
      sx={{
        borderRadius: pxToRem(15),
        gap: pxToRem(24),
        bgcolor: NEUTRAL[0],
        width: "100%",
        height: "100%",
        padding: pxToRem(16),
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid container>
          <Grid item xs={8}>
            <Stack gap={pxToRem(16)} direction={"row"} alignItems={"center"}>
              <CaseIcon fill1={SECONDARY[50]} fill2={NEUTRAL[800]} />
              <Typography variant="subtitle1" color={SECONDARY[0]}>
                Last Viewed Case
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            <Button
              sx={{
                height: pxToRem(36),
              }}
            >
              View case
            </Button>
          </Grid>
        </Grid>
      </Stack>
      <Stack
        direction="row"
        sx={{
          // borderTop: `1px solid ${SECONDARY[100]}`,
          // borderBottom: `1px solid ${SECONDARY[100]}`,
          padding: pxToRem(16),
          borderRadius: pxToRem(16),
          bgcolor: SECONDARY[50],
        }}
      >
        <Stack pr={pxToRem(12)}>
          <CustomImage
            src="/images/userHeader.png"
            wrapperSx={{
              height: pxToRem(44),
              width: pxToRem(44),
            }}
          />
        </Stack>
        <Stack width="100%" gap={pxToRem(5)}>
          <Stack gap={pxToRem(4)}>
            <Typography variant="h5" color={SECONDARY[500]}>
              Allen Harper
            </Typography>
            <Typography variant="body1" color={SECONDARY[500]}>
              Case Number: 12457-980
            </Typography>
          </Stack>
          <Divider
            orientation="horizontal"
            sx={{
              //   width: pxToRem(375),
              color: SECONDARY[100],
            }}
          />
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={pxToRem(8)}
          >
            <Typography variant="subtitle2" color={SECONDARY[300]}>
              Amount Spent
            </Typography>
            <Typography
              variant="subtitle1"
              color={SECONDARY[300]}
              fontWeight={700}
              fontSize={pxToRem(23)}
            >
              $20,000
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack justifyContent="center" alignItems="center">
      <img src="/skinStructure.png" alt="Main" width={'100%'} />
      </Stack>
    </Stack>
  );
}
