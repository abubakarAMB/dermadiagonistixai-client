import FilterDrop from "@/containers/cases/components/FilterDrop";
import { pxToRem } from "@/theme";
import { Collapse, Grid, Stack } from "@mui/material";

export default function Filter({ showFilter }: { showFilter: boolean }) {
  return (
    <Collapse in={showFilter}>
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        gap={pxToRem(12)}
        sx={{
          py: pxToRem(20),
          px: pxToRem(16),
          borderBottom: `1px solid rgba(241, 243, 243, 1)`,
          maxHeight: { sm: pxToRem(82) },
        }}
      >
        <FilterDrop
          title="Body part"
          options={[
            "Migraine",
            "Asthma",
            "Hypertension",
            "Bruise of right thigh",
          ]}
        />
        <FilterDrop
          title="Tags"
          options={["Claim Related", "Privileged", "Yet to be decided"]}
        />
        <FilterDrop
          title="Provider"
          search={true}
          options={[
            "PeaceHealth Southwest Regional",
            "Vanderbilt Health Clinic at Walgreens",
            "California Pacific Medical Center",
            "Franco-USAese Hospital",
            "Bascom Palmer Anne Bates",
          ]}
        />
        <FilterDrop
          title="Date of Claim"
          search={true}
          options={["Intake Process", "Conduction Review", "Sending to SIU"]}
        />
      </Grid>
    </Collapse>
  );
}
