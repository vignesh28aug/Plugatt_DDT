import { Grid } from "@mui/material";
import React from "react";
import CustomizedTreeView from "./treeView";
import AnalyticsDetails from "./AnalyticsDetails";
import { Map } from "./map";
function AnalyticsIndex() {
  return (
    <div>
      <Grid container >
        <Grid item md={3} sm={3} lg={3}>
          <CustomizedTreeView />
        </Grid>
        <Grid item md={9} sm={9} lg={9}>
          <AnalyticsDetails />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={12} sx={{marginTop:'10px'}}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default AnalyticsIndex;
