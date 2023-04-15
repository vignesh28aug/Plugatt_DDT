import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { setUserId } from "../redux/dashboardslice";

function AuthGaurd({ children }) {
  const auth = localStorage.getItem("auth");
  const token = JSON.parse(auth)?.token;
  const [isExpired, setIsExpoired] = useState(false);

  useEffect(() => {
    if (token) {
      const user = jwtDecode(token);
      setIsExpoired(dayjs.unix(user.exp).diff(dayjs) > 1);
    }
  }, []);

  if (!token || isExpired) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default AuthGaurd;
