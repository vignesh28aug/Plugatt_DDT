import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useCallback } from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import AnalyticsDetails from "./AnalyticsDetails";
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import '../../App.css'
// const details = {
//   city : {'Total Cities' : 280 , 'Total Voltage' : 2969 , 'value' : 34 } ,
//   zone : {'Total zones' : 876 , 'Total Voltage' : 12973414 , 'value' : 31824 } ,
//   node : {'Total nodes' : 9124791 , 'Total Voltage' : 14197421 , 'value' : 21938734 } ,
// }

// function getDetails(details) {
//   let data = async () => {
//     alert("Hi");
//   };
//   data();
//   <AnalyticsDetails  name={"vignesh"}/>
//   console.log("clicked");
// }

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="21px" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 24, height: 24}} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function FileSystemNavigator() {
  // const getDetails = useCallback((name) => {
  //   // handle click logic here
  //   alert("Hi" + name)
  //   console.log(name);
  // }, []);

  const details = {
    city : {'Total Cities' : 280 , 'Total Voltage' : 2969 , 'value' : 34 } ,
    zone : {'Total zones' : 876 , 'Total Voltage' : 12973414 , 'value' : 31824 } ,
    node : {'Total nodes' : 9124791 , 'Total Voltage' : 14197421 , 'value' : 21938734 } ,
  }
  
  function getDetails(details) {
    let data = async () => {
    //  <AnalyticsDetails details={details} />
    };
    data();
    
    console.log("clicked");
  }
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<LocationCityOutlinedIcon style={{ color: "#1db8b4" ,fontSize:'18px'}} />}
      defaultExpandIcon={<LocationCityOutlinedIcon style={{ color: "#1db8b4" ,fontSize:'21px'}}/>}
      sx={{
        height: 340,
        width: 200,
        overflowY: "auto",
      }}
    >
      <TreeItem nodeId="1" label="Chennai" id="treeview_title">
        <TreeItem
          nodeId="2"
          label="Zones"
          onClick={() => getDetails()}
        />
        <TreeItem
          nodeId="10"
          label="Nodes"
          onClick={() => getDetails()}
        />
      </TreeItem>
      {/* <AnalyticsDetails  details= {details} /> */}
      <TreeItem nodeId="3" label="Mumbai">
      <TreeItem
          nodeId="2"
          label="Zones"
          onClick={() => getDetails()}
        />
        <TreeItem
          nodeId="10"
          label="Nodes"
          onClick={() => getDetails()}
        />
        {/* <TreeItem nodeId="4" label="OSS" />
        <TreeItem nodeId="5" label="MUI">
          <TreeItem nodeId="6" label="index.js" />
        </TreeItem> */}
      </TreeItem>
      <TreeItem nodeId="7" label="Bengaluru">
      <TreeItem
          nodeId="2"
          label="Zones"
          onClick={() => getDetails()}
        />
        <TreeItem
          nodeId="10"
          label="Nodes"
          onClick={() => getDetails()}
        />
        {/* <TreeItem nodeId="6" label="index.js" /> */}
      </TreeItem>
    </TreeView>
  );
}
export default FileSystemNavigator;
