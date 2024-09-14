import { Grid } from "@mui/material";
import AnatomyView from "../anatomyView";
import DetailsView from "./DetailsView";

export default function Details() {
  return (
    <Grid container sx={{ height: "calc(100vh - 112px - 180px)" }}>
      <Grid item xs={12} sm={6}>
        <AnatomyView />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DetailsView />
      </Grid>
    </Grid>
  );
}
