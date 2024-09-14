import { Stack } from "@mui/material";
import ReportTable from "./table";
import { reportData } from "./table/constants";

export default function Report() {
  return (
    <Stack>
      <ReportTable reportData={reportData} />
    </Stack>
  );
}
