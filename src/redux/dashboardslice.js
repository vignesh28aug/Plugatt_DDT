import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
  mainmenu: {
    selectedRow: {
      devicename: "total",
      voltage: 0,
      current: 0,
      power: 0,
    },
    totaldevices: 0,
    deviceStatus: [],
    devices: {
      total: {
        current: 0,
        voltage: 0,
        power: 0,
      },
    },
  },
  consumption: {
    row: [
      {
        current: 0,
        price: 0,
        total: 0,
      },
      {
        value: "12",
        timestamp: "12-02-2033",
      },
    ],
    dailyMonthly: "monthly",
    // userid: "worldadbiomass@gmail.com",
    userid: localStorage?.getItem("auth")
      ? jwtDecode(localStorage?.getItem("auth"))?.email
      : "",
    snackbar: {
      open: false,
      severity: "",
      message: "",
    },
  },
  analytics: {
    selectedItem: {
      id: 0,
      totalCities: 0,
      totalVoltage: 0,
      value: 0,
    },
  },
};

const dashboardslice = createSlice({
  name: "dashbaordslice",
  initialState,
  reducers: {
    setSelectedRow(state, { payload }) {
      state.mainmenu.selectedRow = payload;
    },
    setDevicestatus(state, { payload }) {
      state.mainmenu.deviceStatus = payload;
    },
    setTotaldevices(state, { payload }) {
      console.log("totaldevices", payload);
      state.mainmenu.totaldevices = payload;
    },
    setDataGridrow2(state, { payload }) {
      state.consumption.row = payload;
    },
    setDataGridprice(state, { payload }) {
      state.consumption.row[payload.ind].price = payload.value;
      state.consumption.row[payload.ind].total = (
        Number(payload.value) * Number(payload.current)
      ).toFixed(2);
    },
    setDailyMonthy(state, { payload }) {
      state.consumption.dailyMonthly = payload;
    },
    setSnackbar(state, { payload }) {
      state.snackbar = payload;
    },
    setUserId(state, { payload }) {
      state.consumption.userid = payload;
    },
    setDevice(state, { payload }) {
      state.mainmenu.devices = payload;
    },
    setAnalyticsselectedItem(state, { payload }) {
      state.analytics.selectedItem = payload;
    },
  },
});

export const {
  setSelectedRow,
  setDevice,
  setDevicestatus,
  setTotaldevices,
  setDataGridrow2,
  setDataGridprice,
  setDailyMonthy,
  setSnackbar,
  setUserId,
  setAnalyticsselectedItem,
} = dashboardslice.actions;
export default dashboardslice.reducer;
