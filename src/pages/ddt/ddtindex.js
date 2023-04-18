import { Grid } from "@mui/material";
import React from "react";
// import CustomizedTreeView from "./treeView";
// import AnalyticsDetails, { Chartdata } from "./AnalyticsDetails";
import CustomizedTreeView from "../analytics/treeView";
// import AnalyticsDetails, { Chartdata} from "../analytics/AnalyticsDetails";
import DdtDetails,{ Chartdata} from "./ddtdetails";
// import { Map } from "./map";
function DdtIndex() {
  return (
    <div>
      <Grid container  >
        <Grid item md={3} sm={3} lg={3}>
          <CustomizedTreeView />
        </Grid>
        <Grid item md={9} sm={9} lg={9}>
          <DdtDetails />
        </Grid>
      </Grid>

      <Grid container height={'40vh'} sx={{pt:'10px'}} >
        {/* <Grid item md={5} sx={{marginTop:'10px'}}>
          <Map />
        </Grid> */}
        <Grid item md={12} sx={{display:'flex'}}>
          <Chartdata />
          {/* <Chartdata /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default DdtIndex;
