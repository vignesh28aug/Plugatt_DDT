import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Close, Logout, Menu } from "@mui/icons-material";
import * as icons from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  Tooltip,
  Zoom,
} from "@mui/material";
import "./navbarsidebar.css";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { Stack } from "@mui/system";
const drawerWidth = 240;

export default function NavbarSIdebar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const menuitems = [
    {
      icon: "Analytics",
      link: "analytics",
      text: "Demand Monitoring",
      color: "#0090e7",
    },
    {
      icon: "Analytics",
      link: "ddt",
      text: "DDT",
      color: "#0090e7",
    },
  ];

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  useLayoutEffect(() => {
    const token = jwtDecode(localStorage.getItem("auth"));
    setEmail(token.email);
  }, []);
  const { pathname } = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#191c24 !important",
        }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: "flex-start" }}>
          {window.innerWidth < 730 && (
            <IconButton
              sx={{ color: "#fff" }}
              onClick={() => setMenuOpen((state) => !state)}
            >
              {menuOpen ? <Close /> : <Menu />}
            </IconButton>
          )}
          <div className="navtop">
            <div>
              <img
                src={logo}
                height="25px"
                style={{ objectFit: "contain" }}
                width="100px"
                alt="logo"
              />
            </div>
            <div>
              {window.innerWidth > 730 && (
                <Typography
                  variant="body1"
                  noWrap
                  component="div"
                  className="displayEmail"
                >
                  {email}
                </Typography>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={window.innerWidth > 730 ? "permanent" : "temporary"}
        onClose={() => setMenuOpen(false)}
        open={menuOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            bgcolor: "#191c24",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <div className="navbar_profile_section">
            <Stack direction="row" spacing={2} width="100%">
              <Avatar src="ads" alt={email} sx={{ bgcolor: "#0090e7" }} />

              <Stack>
                <Typography variant="p">{email.split("@")[0]}</Typography>
                <Typography variant="subtitle2" sx={{ color: "#6c7281" }}>
                  Admin
                </Typography>
              </Stack>

              <Tooltip
                title="Log out"
                placement="top"
                TransitionComponent={Zoom}
              >
                <IconButton size="2px" onClick={logout}>
                  <Logout sx={{ fontSize: "15px" }} />
                </IconButton>
              </Tooltip>
            </Stack>
          </div>
          <Typography
            variant="subtitle2"
            sx={{ color: "#6c7281", padding: "10px 20px" }}
          >
            Navigation
          </Typography>

          <div className="navbtns_conatiner">
            {menuitems.map((text, index) => (
              <NavLink
                to={text.link}
                key={`navbuttons${index}`}
                className={`navbar_buttons ripple`}
                onClick={() => setMenuOpen((state) => !state)}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <div className="icon_navbar">
                    {React.createElement(icons[text.icon], {
                      style: { color: text.color },
                    })}
                  </div>
                </ListItemIcon>
                <ListItemText primary={text.text} />
              </NavLink>
            ))}
          </div>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, bgcolor: "black", minHeight: "100vh" }}
      >
        <Toolbar />
        <div>
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}
