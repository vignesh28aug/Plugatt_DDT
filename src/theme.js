import { createTheme } from "@mui/material/styles";
import "./theme.css";

const theme = createTheme({
  drawerPaper: { background: "blue" },
  palette: {
    mode: "dark",
    primary: { main: "#36c1bd", contrastText: "#fff" },
    secondary: {
      main: "#ebedef",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontfamily: ["rubik", "sans-serif"],
    p: {
      fontfamily: "rubik",
    },
    h3: {
      fontFamily: "rubik",
    },
  },
});

export default theme;
