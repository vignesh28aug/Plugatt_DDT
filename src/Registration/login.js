import React, { useState } from "react";
import {
  Grid,
  Paper,
  Button,
  Link,
  FormHelperText,
} from "@mui/material";
import { Stack } from "@mui/system";
import InputField from "../components/InputField";
import { Form, Formik, Field } from "formik";
import { loginValidation } from "./validation";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Registeration/firebaseconfig";
import logo from "../assets/logo.png";
import SnackToast from "../components/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "../redux/dashboardslice";
import "./login.css"

const paperstyle = {
  padding: 20,
  height: "auto",
  textAlign: "center",
  borderRadius: "15px",
  width: "80%",
  maxWidth: "400px",
  background:"#191c24",
};

const checkbox_style = {
  textAlign: "start",
  padding: 0,
};

function Signin() {
  const initialValues = {
    email: "",
    password: "",
    termsAndConditions: false,
    privacypolisy: false,
  };

  const errormsg = {
    color: "red",
    fontSize: "15px",
  };
  const snackbar = useSelector((state) => state.dashboardreducer.snackbar);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    navigate("/registeration");
  };
  const forgot_pw = () => {
    navigate("/forgotpassword");
  };
  // close snackbar
  const handleCloseSnack = () => {
    dispatch(setSnackbar({ open: false, message: "", severity: "" }));
  };

  // Open snackbar
  const handleopen = (message, severity) => {
    dispatch(setSnackbar({ open: true, message, severity }));
  };

  // Login api
  const handlesubmit = async (value) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );

      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: user._tokenResponse.idToken,
          refreshToken: user._tokenResponse.refreshToken,
        })
      );
      navigate("/dashboard/mainmenu");
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
        sx={{ height: "90vh" ,background:"black"}}
      >
        <Paper elevation={10} style={paperstyle} className="paperstyle">
          <Grid align="center" justifyContent="center">
            <img
              src={logo}
              height="25px"
              width="100px"
              sx={{ objectFit: "contain" }}
            />
            <Formik
              initialValues={initialValues}
              validationSchema={loginValidation}
              onSubmit={handlesubmit}
            >
              {({ errors, touched }) => (
                <Form type="reset">
                  <Stack spacing={2}>
                    <InputField
                      label="Email"
                      placeholder="Enter your Email"
                      name="email"
                      fullWidth
                    />
                    <InputField
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      name="password"
                      fullWidth
                    />
                    <span style={checkbox_style}>
                      <Field type="checkbox" name="termsAndConditions" />
                      <Link
                        href="https://virtualel.com/terminos-y-condiciones/"
                        target="_blank"
                        underline="none"
                      >
                        Terms & Condition
                      </Link>
                      {errors.termsAndConditions &&
                        touched.termsAndConditions && (
                          <FormHelperText error={true}>
                            {errors.termsAndConditions}
                          </FormHelperText>
                        )}
                    </span>
                    <span style={checkbox_style}>
                      <Field type="checkbox" name="privacypolisy" />
                      <Link
                        href="https://virtualel.com/politica-de-privacidad/"
                        target="_blank"
                        underline="none"
                      >
                        Privacy Policy
                      </Link>
                      {errors.privacypolisy && touched.privacypolisy && (
                        <FormHelperText error={true}>
                          {errors.privacypolisy}
                        </FormHelperText>
                      )}
                    </span>
                    <Link
                      underline="none"
                      sx={{ textAlign: "left", marginLeft: "5px !important" }}
                      onClick={forgot_pw}
                    >
                      {"Forgot Password ?"}
                    </Link>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                    >
                      Sign In
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
export default Signin;
