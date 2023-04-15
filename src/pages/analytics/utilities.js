import { height } from "@mui/system";
import dayjs from "dayjs";
import * as echarts from "echarts";

// const color = ["#ff9ff3", "#feca57", "#ff6b6b", "#48dbfb", "#1dd1a1"];
const color = [
  "#ea5545",
  "#f46a9b",
  "#ef9b20",
  "#edbf33",
  "#ede15b",
  "#bdcf32",
  "#87bc45",
  "#27aeef",
  "#b33dc6",
];

const colors = ["#849cdd", "#aed29f"];

// Left bar chart
export let optionbarchart = (x, y, color = color) => ({
  xAxis: {
    name: "Date",
    nameLocation: "middle",
    nameGap: 50,
    nameTextStyle: {
      fontFamily: "serif",
    },
    type: "category",
    axisLabel: {
      color: "#6c7293",
    },
    axisLine: {
      onZero: false,
      lineStyle: {
        color: "#6c7293",
      },
    },
    data: ["", "", "", "", "", "", ""].map((item, ind) => {
      return x[x?.length > 7 ? x?.length + ind - 7 : ind]
        ? dayjs(x[x.length > 7 ? x.length + ind - 7 : ind]).format("DD-MM")
        : item;
    }),
  },
  yAxis: {
    type: "value",
    name: "kWh",
    nameLocation: "middle",
    nameGap: 35,
    nameTextStyle: {
      fontFamily: "serif",
    },
    axisLabel: {
      color: "#6c7293",
    },
    axisLine: {
      onZero: false,
      lineStyle: {
        color: "#6c7293",
      },
    },
    splitLine: {
      show: false,
      lineStyle: { color: ["#3c3f45"] },
    },
  },
  series: [
    {
      barWidth: "25%",
      itemStyle: {
        opacity: 0.7, // set opacity to 0.7
      },
      data: [0, 0, 0, 0, 0, 0, 0]?.map((val, ind) => ({
        value: y[y?.length > 7 ? y?.length + ind - 7 : ind],
        itemStyle: {
          color: color[ind],
          // borderColor: color[ind], // set border color to black with 50% opacity
          // borderWidth: 5,
        },
      })),
      type: "bar",
    },
  ],
});
//co2
// export let co2option = (timestamp, energy_savings, co2) => ({
//   backgroundColor: "#191c24",
//   xAxis: {
//     type: "category",
//     boundaryGap: false,
//     data: timestamp,
//   },
//   yAxis: {
//     type: "value",
//     splitLine: false,
//   },
//   series: [
//     {
//       name: "Energy Savings",
//       data: energy_savings,
//       type: "line",
//       smooth: true,
//       emphasis: {
//         focus: "series",
//       },
//       // areaStyle: {}
//     },
//     {
//       name: "Co2 Reduction",
//       type: "line",
//       smooth: true,
//       data: co2,
//       emphasis: {
//         focus: "series",
//       },
//       // areaStyle: {}
//     },
//   ],
//   height: "130px",
// });

export const co2option = (
  timestamp,
  energy_savings,
  co2,
  color = ["#849cdd", "#aed29f"]
) => {
  return {
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        axis: "auto",
        label: {
          show: false,
        },
      },
    },
    legend: {
      show: true,
      textStyle: { color: "#585a63" },
    },
    grid: {
      top: 70,
      bottom: 50,
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          onZero: true,
          lineStyle: {
            color: colors[1],
          },
        },
        axisPointer: {
          label: "value",
        },
        boundaryGap: false,
        // prettier-ignore
        data: ["Jan", "Feb", "Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].filter((data, ind) => ind < timestamp.length),
      },
    ],
    yAxis: [
      {
        splitLine: false,
        type: "value",
        name: "kWh",
        nameLocation: "middle",
        nameGap: 45,
        nameTextStyle: {
          fontFamily: "roboto",
          fontWeight: "bold",
        },
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        splitLine: false,
        type: "value",
        name: "grCO2",
        nameLocation: "middle",
        nameGap: 45,
        nameTextStyle: {
          fontFamily: "sans-sherif",
          fontWeight: "bold",
        },
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "Energy Savings",
        type: "line",
        smooth: true,
        emphasis: {
          focus: "series",
        },
        yAxisIndex: 0,
        data: energy_savings,
      },
      {
        name: "CO2",
        type: "line",
        smooth: true,
        emphasis: {
          focus: "series",
        },
        yAxisIndex: 1,
        data: co2,
      },
    ],
  };
};

// export const optionbarchart = (x, y) => {
//   return {
//     data: {
//       labels: ["", "", "", "", "", ""].map((item, ind) => {
//         return x[x.length > 5 ? x.length + ind - 5 : ind]
//           ? dayjs(x[x.length > 5 ? x.length + ind - 5 : ind]).format("DD-MM")
//           : item;
//       }),
//       datasets: [
//         {
//           label: "My First Dataset",
//           data: [0, 0, 0, 0, 0, 0]?.map((val, ind) => {
//             return y[y?.length > 5 ? y?.length + ind - 5 : ind];
//           }),
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.5)",
//             "rgba(48, 132, 191, 0.6)",
//             "rgba(227, 184, 8, 0.6)",
//             "rgba(59, 138, 141, 0.6)",
//             "rgba(127, 87, 211, 0.6)",
//           ],
//           borderColor: [
//             "rgba(255, 99, 132, 1)",
//             "rgba(48, 132, 191, 1)",
//             "rgba(227, 184, 8, 1)",
//             "rgba(59, 138, 141, 1)",
//             "rgba(127, 87, 211, 1)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     },

//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: true,
//             },
//             gridLines: {
//               display: false,
//               color: "#FFFFFF",
//             },
//           },
//         ],
//         xAxes: [
//           {
//             barPercentage: 0.4,
//             gridLines: {
//               display: false,
//               color: "#FFFFFF",
//             },
//           },
//         ],
//       },
//       barThickness: "10px",
//       barPercentage: 0.7,
//     },
//   };
// };

// +++++++++++++++++++++++++++++++++++++++++++++ piechart +++++++++++++++++++++++++++++++++++++
export const piechartleft = {
  title: {
    text: "Nightingale Chart",
    subtext: "Fake Data",
    left: "center",
  },
  legend: {
    left: "center",
    top: "bottom",
    show: false,
    data: [
      "rose1",
      "rose2",
      "rose3",
      "rose4",
      "rose5",
      "rose6",
      "rose7",
      "rose8",
    ],
  },
  toolbox: {
    show: false,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: "Radius Mode",
      type: "pie",
      radius: [60, 80],
      center: ["25%", "50%"],
      roseType: "radius",
      itemStyle: {
        borderRadius: 5,
      },
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      data: [
        { value: 20, name: "rose 1" },
        { value: 28, name: "rose 2" },
        { value: 20, name: "rose 3" },
        { value: 20, name: "rose 4" },
        { value: 20, name: "rose 5" },
      ],
    },
  ],
};

//=============================================== Corbonemmitin Right ===============================================
export const carbonrigt = (value, unit) => ({
  series: [
    {
      type: "gauge",
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 240,
      legend: false,
      splitNumber: 12,
      itemStyle: {
        color: "#8fc18f",
      },
      progress: {
        show: true,
        roundCap: false,
        width: 30,
      },
      pointer: {
        show: false,
      },
      axisLine: {
        roundCap: false,
        lineStyle: {
          width: 30,
        },
      },
      axisTick: {
        splitNumber: 2,
        lineStyle: {
          width: 2,
          color: "#ABE5A1",
        },
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      title: {
        show: false,
      },
      detail: {
        width: "90%",
        lineHeight: 20,
        height: 20,
        borderRadius: 8,
        offsetCenter: [0, "-30%"],
        valueAnimation: true,
        formatter: function (s) {
          return "{value|" + value + "}{unit|" + unit + "}";
        },
        rich: {
          value: {
            fontSize: 20,
            fontWeight: "bolder",
            color: "#888888",
          },
          unit: {
            fontSize: 18,
            color: "#888888",
            padding: [0, 0, 0, 8],
          },
        },
      },
      data: [
        {
          value: 180,
        },
      ],
    },
  ],
});

// Topbar Apex
export const barchart = {
  series: () => [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ],
  options: () => ({
    colors: color,
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["John", "Doe"],
        ["Joe", "Smith"],
        ["Jake", "Williams"],
        "Amber",
        ["Peter", "Brown"],
        ["Mary", "Evans"],
        ["David", "Wilson"],
        ["Lily", "Roberts"],
      ],
      labels: {
        style: {
          colors: color,
          fontSize: "12px",
        },
      },
    },
  }),
};

// top apexchart
export const options2 = {
  series: (val) => [val],

  options: (label, value, color) => ({
    colors: [color],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "68%",
          // background: "#191c24",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: false,
            // top: 3,
            // left: 0,
            // blur: 4,
            // opacity: 0.24,
          },
        },
        track: {
          background: "#111111",
          strokeWidth: "100%",
          margin: 0,
          dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "white",
            fontSize: "14px",
          },
          value: {
            formatter: function (val) {
              return value ?? 0;
            },
            color: "#6c7293",
            fontSize: "20px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        // shadeIntensity: 0.5,
        // gradientToColors: ["#6c7293"],
        // inverseColors: true,
        // opacityFrom: 1,
        // opacityTo: 1,
        stops: [0, 200],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: [label],
  }),
};

// apex charts
export const apexoptions = {
  series: [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ],
  chart: {
    height: 350,
    type: "bar",
    events: {
      click: function (chart, w, e) {},
    },
  },
  // colors: colors,
  plotOptions: {
    bar: {
      columnWidth: "45%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: [
      ["John", "Doe"],
      ["Joe", "Smith"],
      ["Jake", "Williams"],
      "Amber",
      ["Peter", "Brown"],
      ["Mary", "Evans"],
      ["David", "Wilson"],
      ["Lily", "Roberts"],
    ],
    labels: {
      style: {
        // colors: colors,
        fontSize: "12px",
      },
    },
  },
};
