import * as React from "react";
import TreeView from "@mui/lab/TreeView";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
// import { useCallback } from "react";
// import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
// import AnalyticsDetails from "./AnalyticsDetails";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import "../../App.css";
import { useDispatch } from "react-redux";
import { setAnalyticsselectedItem } from "../../redux/dashboardslice";

function FileSystemNavigator() {
  const details = [
    {
      id: 1,
      totalCities: 280,
      totalZones: 230,
      totalVoltage: 2969,
      totalNodes: 210,
      value: 34,
      mockdata1 : {
        timestamp: [12, 22, 21, 21, 22],
        value: [18, 36, 20, 32, 11],
      }
    },
    {
      id: 2,
      totalCities: 100,
      totalZones: 20,
      totalVoltage: 4969,
      totalNodes: 10,
      value: 4,
      mockdata1 : {
        timestamp: [29, 42, 12, 13, 19],
        value: [98, 56, 123, 73, 61],
      }
    },
    {
      id: 3,
      totalCities: 60,
      totalZones: 12,
      totalVoltage: 969,
      totalNodes: 16,
      value: 4,
      mockdata1 : {
        timestamp: [12, 22, 21, 21, 22],
        value: [18, 36, 20, 32, 11],
      }
    },
    {
      id: 11,
      totalCities: 280,
      totalZones: 230,
      totalVoltage: 2969,
      totalNodes: 210,
      value: 34,
      mockdata1 : {
        timestamp: [12, 22, 21, 21, 22],
        value: [18, 36, 20, 32, 11],
      }
    },
    {
      id: 12,
      totalCities: 100,
      totalZones: 20,
      totalVoltage: 4969,
      totalNodes: 10,
      value: 4,
      mockdata1 : {
        timestamp: [54, 35, 11, 26, 18],
        value: [76, 49, 65, 14, 43],
      }
    },
    {
      id: 13,
      totalCities: 60,
      totalZones: 12,
      totalVoltage: 969,
      totalNodes: 16,
      value: 4,
      mockdata1 : {
        timestamp: [12, 22, 21, 21, 22],
        value: [18, 36, 20, 32, 11],
      }
    },
    {
      id: 5,
      totalCities: 60,
      totalZones: 12,
      totalVoltage: 969,
      totalNodes: 16,
      value: 4,
      mockdata1 : {
        timestamp: [12, 22, 21, 21, 22],
        value: [18, 36, 20, 32, 11],
      }
    },
    {
      id: 6,
      totalCities: 100,
      totalZones: 20,
      totalVoltage: 4969,
      totalNodes: 10,
      value: 4,
      mockdata1 : {
        timestamp: [129, 242, 121, 86, 198],
        value: [180, 236, 120, 332, 211],
      }
    },
  ];

  const treeViewdata = [
    {
      id: "Chennai",
      nodeId: 1,
      children: [
        {
          id: "node1",
          nodeId: 2,
          children: [
            {
              id: "zone1",
              nodeId: 3,
            },
          ],
        },
        {
          id: "node2",
          nodeId: 5,
          children: [
            {
              id: "zone2",
              nodeId: 6,
            },
          ],
        },
      ],
    },
    {
      id: "Bengaluru",
      nodeId: 11,
      children: [
        {
          id: "Node 1",
          nodeId: 12,
          children: [
            {
              id: "zone 1",
              nodeId: 13,
            },
          ],
        },
      ],
    },
  ];

  const dispatch = useDispatch();

  const handleclicktree = (data) => {
    const selected = details.find((detail) => detail.id === data.nodeId);
    console.log(selected);
    dispatch(setAnalyticsselectedItem(selected ?? {}));
  };

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={
        <LocationCityOutlinedIcon
          style={{ color: "#1db8b4", fontSize: "18px" }}
        />
      }
      defaultExpandIcon={
        <LocationCityOutlinedIcon
          style={{ color: "#1db8b4", fontSize: "21px" }}
        />
      }
      sx={{
        height: 340,
        width: 200,
        overflowY: "auto",
      }}
    >
      <ITreeView data={treeViewdata} handleclicktree={handleclicktree} />
    </TreeView>
  );
}
export default FileSystemNavigator;

function ITreeView({ data, handleclicktree }) {
  return (
    <>
      {data?.map((data1) =>
        !data1.children ? (
          <TreeItem
            key={data1.nodeId}
            nodeId={data1.nodeId}
            label={data1.id}
            onClick={() => handleclicktree(data1)}
          />
        ) : (
          <TreeItem
            key={data1.nodeId}
            nodeId={data1.nodeId}
            label={data1.id}
            id="treeview_title"
            onClick={() => handleclicktree(data1)}
          >
            <ITreeView
              data={data1.children}
              handleclicktree={handleclicktree}
            />
          </TreeItem>
        )
      )}
    </>
  );
}
