import { pxToRem } from "@/theme";
import { Stack } from "@mui/material";
import FilterDrop from "../../FilterDrop";

export default function Filter() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      gap={pxToRem(12)}
      sx={{
        py: pxToRem(20),
        px: pxToRem(16),
        borderTop: `1px solid rgba(241, 243, 243, 1)`,
        maxHeight: pxToRem(82),
      }}
    >
      <FilterDrop
        title="Claim Status"
        isClaimStatus={true}
        options={["New", "In progress", "Escalated"]}
      />
      <FilterDrop
        title="Action Required"
        options={["Intake Process", "Conduction Review", "Sending to SIU"]}
      />
      <FilterDrop
        title="Date of Claim"
        options={["Intake Process", "Conduction Review", "Sending to SIU"]}
      />
    </Stack>
  );
}
