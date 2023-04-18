import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Button,
  Link,
  Typography,
  Checkbox,
} from "@mui/material";
import logo from "../../assets/logo.png";
import { Form, Formik } from "formik";
import { Stack } from "@mui/system";
import InputField from "../../components/InputField";
import * as Yup from "yup";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebaseconfig";
import { useNavigate } from "react-router-dom";
import SnackToast from "../../components/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "../../redux/dashboardslice";
const paperstyle = {
  padding: 20,
  height: "auto",
  width: 400,
  textAlign: "center",
  borderRadius: "15px",
  background:"#191c24",
};

function ForgotPassword() {
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.dashboardreducer.snackbar);

  const initialValues = {
    email: "",
  };
  const signInValidation = Yup.object().shape({
    email: Yup.string().required("Please enter a email").email("Invalid email"),
  });

  const handleCloseSnack = () => {
    dispatch(setSnackbar({ open: false, message: "", severity: "" }));
  };

  // Open snackbar
  const handleopen = (message, severity) => {
    dispatch(setSnackbar({ open: true, message, severity }));
  };
  const navigate = useNavigate();
  const handlesubmit = async (value) => {
    try {
      const user = await sendPasswordResetEmail(auth, value.email);
      console.log(user);
      handleopen("Link sent your email", "success");

      navigate("/login");
    } catch (error) {
      handleopen(error.message, "error");
    }
  };
  return (
    <>
      <SnackToast {...snackbar} handleClose={handleCloseSnack} />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "90vh",background:"black" }}
      >
        <Paper elevation={10} style={paperstyle}>
          <Grid>
            <img
              src={logo}
              height="25px"
              width="100px"
              sx={{ objectFit: "contain" }}
            />
            <Formik
              initialValues={initialValues}
              validationSchema={signInValidation}
              onSubmit={handlesubmit}
            >
              {(props) => (
                <Form>
                  <Stack spacing={2}>
                    <InputField
                      label="Email"
                      placeholder="Enter your Email"
                      name="email"
                    />
                    <Button type="submit" variant="contained" fullWidth>
                      send reset
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
export default ForgotPassword;
