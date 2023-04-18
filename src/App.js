import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import NavbarSIdebar from "./components/Navbarsidebar";
import Login from "./pages/login";
import theme from "./theme";
import { Provider } from "react-redux";
import dashboardreducer from "./redux/dashboardslice";
import { configureStore } from "@reduxjs/toolkit";
import Signup from "./pages/Registeration/registeration";
import AuthGaurd from "./components/AuthGaurd";
import ForgotPassword from "./pages/Registeration/forgotPassword";
import Footer from "./components/footer";
import Device from "./Devices/Device";
import { QueryClient, QueryClientProvider } from "react-query";
import AnalyticsIndex from "./pages/analytics/analyticsIndex";
import DdtIndex from "./pages/ddt/ddtindex";
// import DdtIndex from "./pages/ddt/ddtIndex";
const reducer = { dashboardreducer };
const store = configureStore({
  reducer,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <QueryClientProvider client={new QueryClient()}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="login" />} />
              <Route path="login" element={<Login />} />
              <Route
                path="registration"
                element={
                  // <AuthGaurd>
                    <Signup />
                  // </AuthGaurd>
                }
              />
              <Route path="forgotpassword" element={<ForgotPassword />} />
              <Route path="device" element={<Device />} />
              <Route
                path="dashboard"
                element={
                  <AuthGaurd>
                    <NavbarSIdebar />
                  </AuthGaurd>
                }
              >
                <Route path="analytics" element={<AnalyticsIndex />} />
                <Route path="ddt" element={<DdtIndex />} />
              </Route>
              <Route path="*" element={<>404 not found</>} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
