import { NEUTRAL, SECONDARY, pxToRem } from "@/theme";
import { Grid, Stack, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { CaseDetailEnum } from "../constants";

export enum TableView {
  medicalHistory_detailview = "medicalHistory_detailview",
  medicalHistory_mapview = "medicalHistory_mapview",
  maintenance = "maintenance",
  reports = "reports",
}

export default function TopNav() {
  const router = useRouter();
  const { tab } = useParams();

  const getViewName = (view: string) => {
    switch (view) {
      case CaseDetailEnum.medicalHistory:
        return "Medical History";
      case CaseDetailEnum.maintenance:
        return "Maintenance";
      case CaseDetailEnum.reports:
        return "Reports";
      default:
        return "";
    }
  };

  return (
    <Stack padding={pxToRem(14)}>
      <Grid container direction={"row"} alignItems={"center"}>
        <Grid item xs={12} md={12}>
          <Grid container alignItems={"center"} gap={pxToRem(48)}>
            {["medicalHistory", "maintenance", "reports"].map(
              (view: any, index) => (
                <Grid item xs={12} md={'auto'} key={index}>
                  <Typography
                    key={index}
                    variant="subtitle1"
                    fontWeight={600}
                    fontSize={pxToRem(19)}
                    onClick={() => router.push(`/dashboard/case/1/${view}`)}
                    sx={{
                      cursor: "pointer",
                      color: tab == view ? SECONDARY[500] : NEUTRAL[300],
                    }}
                  >
                    {getViewName(view)}
                  </Typography>
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}
