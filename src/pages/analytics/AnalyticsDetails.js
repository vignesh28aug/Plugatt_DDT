// import { Grid } from "@mui/material";
// import React from "react";
// import { optionbarchart } from "../consumption/utilities";
// import EChartsReact from "echarts-for-react";
// import Chart from "react-apexcharts";
// import { useState } from "react";
// import { options2 } from "../consumption/utilities";
// import Voltage from "../../assets/voltage-indicator.png";
// import { TextField, Typography } from "@mui/material";
// function AnalyticsDetails(){
//     // const mockdata = {
//     //     left : "A city is a human settlement of notable size. It can be defined as a permanent and densely settled place with administratively defined boundaries whose members work primarily on non-agricultural tasks. Cities generally have extensive systems for housing, transportation, sanitation, utilities, land use, production of goods, and communication. Their density facilitates interaction between people, government organisations and businesses, sometimes benefiting different parties in the process, such as improving efficiency of goods and service distribution. This increased influence means that cities also have significant influences on global issues, such as sustainable development, global warming, and global health. Because of these major influences on global issues, the international community has prioritized investment in sustainable cities through Sustainable Development Goal 11. Due to the efficiency of transportation and the smaller land consumption, dense cities hold the potential to have a smaller ecological footprint per inhabitant than more sparsely populated areas. Therefore, compact cities are often referred to as a crucial element of fighting climate change. However, this concentration can also have significant negative consequences, such as forming urban heat islands, concentrating pollution, and stressing water supplies and other resources." ,
//     //     right : "Historically, city-dwellers have been a small proportion of humanity overall, but following two centuries of unprecedented and rapid urbanization, more than half of the world population now lives in cities, which has had profound consequences for global sustainability.Present-day cities usually form the core of larger metropolitan areas and urban areas—creating numerous commuters traveling towards city centres for employment, entertainment, and education. However, in a world of intensifying globalization, all cities are to varying degrees also connected globally beyond these regions." ,
//     //     bottom : "This increased influence means that cities also have significant influences on global issues, such as sustainable development, global warming, and global health. Because of these major influences on global issues, the international community has prioritized investment in sustainable cities through Sustainable Development Goal 11. Due to the efficiency of transportation and the smaller land consumption, dense cities hold the potential to have a smaller ecological footprint per inhabitant than more sparsely populated areas. Therefore, compact cities are often referred to as a crucial element of fighting climate change. However, this concentration can also have significant negative consequences, such as forming urban heat islands, concentrating pollution, and stressing water supplies and other resources."
//     // }
//     const mockdata1 = {
//         timestamp: [12, 22, 21, 21, 22],
//         value: [18, 36, 20, 32, 11, 20],
//       };

//     const [threeconsuption, setThreeConsumtion] = useState("28");
//     // setThreeConsumtion(Math.random().toFixed(2));
//     return (
//         <>

//         </>
//     )
// }
// export default AnalyticsDetails;

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#191c24",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function AnalyticsDetails({ details }) {
  console.log({details});
  const [threeconsuption, setThreeConsumtion] = useState("28");
  const mockdata1 = {
    timestamp: [12, 22, 21, 21, 22],
    value: [18, 36, 20, 32, 11, 20],
  };
  return (
    // <Box sx={{ flexGrow: 0 }}>
    <Grid container spacing={2} rowGap={2}>
      <Grid  container
        maxWidth="calc(100% - 20px)"
        className="container_with_shadow"
        justifyContent="center" md={8} lg={8} sm={8}>
        {/* <Item className="analyticsTop"> */}
        <Grid md={4} lg={4} sm={4}>
        <Chart
          key={threeconsuption}
          options={options2.options("Total Cities", threeconsuption, "#f368e0")}
          series={options2.series(75)}
          type="radialBar"
          height="220"
        />
        </Grid>
        <Grid md={4} lg={4} sm={4}>
        <Chart
          key={threeconsuption}
          options={options2.options("Total Nodes", threeconsuption, "#f368e0")}
          series={options2.series(75)}
          type="radialBar"
          height="220"
        />
        </Grid>
        <Grid md={4} lg={4} sm={4}>
        <Chart
          key={threeconsuption}
          options={options2.options("Total Zones", threeconsuption, "#f368e0")}
          series={options2.series(75)}
          type="radialBar"
          height="220"
        />
        </Grid>
        {/* </Item> */}
      </Grid>
      <Grid item md={3} lg={3} className="container_with_shadow">
        {/* <Item className="analyticsTop"> */}
        <div className="analyticsRight container_with_shadow">
          <div className="power_mainmenu">
            <Typography className="text_grey">
              <b>Total Voltage</b>
            </Typography>
            <Typography variant="h6" className="power_values">
              85
              <span className="power_units">
                <sup>V</sup>
              </span>
            </Typography>
          </div>
          <div className="main_menu_righticon">
            <img src={Voltage} height="40px" alt="voltage" />
          </div>
        </div>
        {/* </Item> */}
      </Grid>
      <Grid item md={12} className="analyticsBottom container_with_shadow">
        {/* <Item> */}
        <EChartsReact
          style={{ height: "280px" }}
          option={optionbarchart(mockdata1.timestamp, mockdata1.value, [
            "#bdcf32",
            "#87bc45",
            "#27aeef",
            "#b33dc6",
          ])}
        />
        {/* </Item> */}
      </Grid>
    </Grid>
    // </Box>
  );
}
export default AnalyticsDetails;
