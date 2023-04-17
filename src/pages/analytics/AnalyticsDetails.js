import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chart from "react-apexcharts";
import { options2 } from "./utilities";
import { useState } from "react";
import { optionbarchart } from "./utilities";
import EChartsReact from "echarts-for-react";
import Voltage from "../../assets/voltage-indicator.png";
import { TextField, Typography } from "@mui/material";
import "./analytics.css";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#191c24",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function AnalyticsDetails({ details }) {
  const { selectedItem } = useSelector(
    (state) => state.dashboardreducer.analytics
  );
  // const mockdata1 = {
  //   timestamp: [12, 22, 21, 21, 22],
  //   value: [18, 36, 20, 32, 11],
  // };

  return (
    <Grid container spacing={2} rowGap={2}>
      <Grid
        container
        // maxWidth="calc(100% - 20px)"
        className="container_with_shadow"
        justifyContent="center"
      >
        <Grid md={3} lg={3} sm={3}>
          <Chart
            key={selectedItem.totalVoltage}
            options={options2.options(
              "Total Cities",
              selectedItem.totalCities,
              "#ea5545"
            )}
            series={options2.series(75)}
            type="radialBar"
            height="220"
          />
        </Grid>
        <Grid md={3} lg={3} sm={3}>
          <Chart
            key={selectedItem.totalNodes}
            options={options2.options(
              "Total Nodes",
              selectedItem.totalNodes,
              "#f46a9b"
            )}
            series={options2.series(75)}
            type="radialBar"
            height="220"
          />
        </Grid>
        <Grid md={3} lg={3} sm={3}>
          <Chart
            key={selectedItem.totalZones}
            options={options2.options(
              "Total Zones",
              selectedItem.totalZones,
              "#ef9b20"
            )}
            series={options2.series(75)}
            type="radialBar"
            height="220"
          />
        </Grid>

        <Grid md={3} lg={3} sm={3}>
          <Chart
            key={selectedItem.totalZones}
            options={options2.options(
              "Total Voltage",
              selectedItem.totalVoltage,
              "#edbf33"
            )}
            series={options2.series(75)}
            type="radialBar"
            height="220"
          />
        </Grid>
      </Grid>

      <Grid item md={12} className="analyticsBottom container_with_shadow">
        <EChartsReact
          style={{ height: "200px" }}
          option={optionbarchart(selectedItem.mockdata1.timestamp ,selectedItem.mockdata1.value , [
            "#bdcf32",
            "#87bc45",
            "#27aeef",
            "#b33dc6",
          ])}
        />
      </Grid>
    </Grid>
  );
}
export default AnalyticsDetails;
