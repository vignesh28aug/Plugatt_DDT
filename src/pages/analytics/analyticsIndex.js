import { Grid } from "@mui/material";
import React from "react";
import CustomizedTreeView from "./treeView";
import AnalyticsDetails, { Chartdata } from "./AnalyticsDetails";
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

      <Grid container >
        <Grid item md={5} sx={{marginTop:'10px'}}>
          <Map />
        </Grid>
        <Grid item md={7} sx={{marginTop:'10px'}} rowSpacing={2}>
          <Chartdata />
          {/* <Chartdata /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default AnalyticsIndex;
