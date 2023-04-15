export const endpoints = {
  SmartPlugLatestTelemetryAPI: (user) =>
    `https://zo1lqsgsl1.execute-api.us-east-1.amazonaws.com/default/SmartPlugLatestTelemetryAPI?userid=${user}&type=device`,
  SmartPlugLatestEnergyAPI: (deviceid) =>
    `https://fjzsof0a3f.execute-api.us-east-1.amazonaws.com/default/SmartPlugLatestEnergyAPI?deviceid=${deviceid}`,
  PROD: (deviceid) =>
    `https://95p97g8dqa.execute-api.us-east-1.amazonaws.com/PROD/SmartPlugSavingsAPI?deviceid=${deviceid}&timestamp=2022-11&price=0.5`,
  PlugONOFFFunction: (deviceid, onoff) =>
    `https://1ep0zgg41i.execute-api.us-east-1.amazonaws.com/PROD/SmartPlugControlAPI?deviceid=${deviceid}&command=${onoff}`,
  deviceStatus: (userid) =>
    `https://8tbcav4epi.execute-api.us-east-1.amazonaws.com/PROD/SmartPlugStateAPI?userid=${userid}`,
  smartplugpowerchart: (userid) =>
    `https://i2nubs3dnk.execute-api.us-east-1.amazonaws.com/PROD/SmartPlugPowerChartAPI?userid=${userid}`,
  smartplugenergy: (deviceid) =>
    `https://95p97g8dqa.execute-api.us-east-1.amazonaws.com/PROD/SmartPlugSavingsAPI?userid=${deviceid}`,
  threeconsuption: (device) =>
    `https://p9px7xjmde.execute-api.us-east-1.amazonaws.com/PROD/SmartPlugLatestEnergyAPI?userid=${device}&type=others`,
  barchart: (userid, type) =>
    `https://p9px7xjmde.execute-api.us-east-1.amazonaws.com/PROD/SmartPlugLatestEnergyAPI?userid=${userid}&type=${type}`,
  powervoltageright: (userid, deviceid) =>
    `https://zo1lqsgsl1.execute-api.us-east-1.amazonaws.com/default/SmartPlugLatestTelemetryAPI?userid=${userid}&type=total`,
  device: (userid, deviceid, storeid) =>
    `https://f5ydjmm43b.execute-api.us-east-1.amazonaws.com/PROD/SmartPlugLatestDeviceAPI?userid=${userid}&storeid=${storeid}&deviceid=${deviceid}`,
  addSchedule:
    "https://3ts07ygp1a.execute-api.us-east-1.amazonaws.com/v1/schedules",
  getSchedule: (deviceid) =>
    `https://3ts07ygp1a.execute-api.us-east-1.amazonaws.com/v1/schedules?device_id=${deviceid}`,
  deleteTimer: (deviceid, schedule) =>
    `https://3ts07ygp1a.execute-api.us-east-1.amazonaws.com/v1/schedules?device_id=${deviceid}&schedule=${schedule}`,
  energysavings: (userid) =>
    `https://xmud0xd383.execute-api.us-east-1.amazonaws.com/v1/energysavings/chart?userid=${userid}`,
  nameAdding: () =>
    `https://xmud0xd383.execute-api.us-east-1.amazonaws.com/v1/devices`,
  editDeviceName: `https://xmud0xd383.execute-api.us-east-1.amazonaws.com/v1/devices`,
};

export const apikey = {
  SmartPlugLatestTelemetryAPI: "Iiy01ojmHd8mVIAF67VZ4aw04QQdbeck6gHT6BZb",
  SmartPlugLatestEnergyAPI: "Iiy01ojmHd8mVIAF67VZ4aw04QQdbeck6gHT6BZb",
  PROD: "JR5SM6q1fB8ANm46AIrmD2P4ksDFVmvQ4T2QtZRS",
  PlugONOFFFunction: "JR5SM6q1fB8ANm46AIrmD2P4ksDFVmvQ4T2QtZRS",
  deviceStatus: "JR5SM6q1fB8ANm46AIrmD2P4ksDFVmvQ4T2QtZRS",
  smartplugpowerchart: "JR5SM6q1fB8ANm46AIrmD2P4ksDFVmvQ4T2QtZRS",
  smartplugenergysavigsapi: "JR5SM6q1fB8ANm46AIrmD2P4ksDFVmvQ4T2QtZRS",
  threeconsuption: "JR5SM6q1fB8ANm46AIrmD2P4ksDFVmvQ4T2QtZRS",
  barchart: "JR5SM6q1fB8ANm46AIrmD2P4ksDFVmvQ4T2QtZRS",
  powervoltageright: "Iiy01ojmHd8mVIAF67VZ4aw04QQdbeck6gHT6BZb",
  device: "hsDpZdzex6ajRC0nRL2kNaolm3zZNp5Z1CA9vh9p",
  addSchedule: "dvNvOloYZb9m2M3DlhyvZ3FFUIPHSrN663GyfiwH",
  getSchedule: `dvNvOloYZb9m2M3DlhyvZ3FFUIPHSrN663GyfiwH`,
  deleteTimer: `dvNvOloYZb9m2M3DlhyvZ3FFUIPHSrN663GyfiwH`,
  energysavings: `dvNvOloYZb9m2M3DlhyvZ3FFUIPHSrN663GyfiwH`,
  nameAdding: `dvNvOloYZb9m2M3DlhyvZ3FFUIPHSrN663GyfiwH`,
  editDeviceName: `dvNvOloYZb9m2M3DlhyvZ3FFUIPHSrN663GyfiwH`,
};
