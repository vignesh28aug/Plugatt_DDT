import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Button,
  Link,
  Typography,
  Checkbox,
} from "@mui/material";
import { Stack } from "@mui/system";
import InputField from "../../components/InputField";
import { Form, Formik } from "formik";
import { signInValidation } from "./registerationvalidation";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { auth } from "./firebaseconfig";
import logo from "../../assets/logo.png";
import SnackToast from "../../components/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "../../redux/dashboardslice";

const paperstyle = {
  padding: 20,
  height: "auto",
  width: "80%",
  maxWidth: 400,
  borderRadius: "15px",
  background:"#191c24",
};

function Signup() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
  };

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "https://plugatt.com",
    handleCodeInApp: true,
    // dynamicLinkDomain: 'https://demotk.digikloudsystems.com/login'
  };
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.dashboardreducer.snackbar);
  const handleCloseSnack = () => {
    dispatch(setSnackbar({ open: false, message: "", severity: "" }));
  };

  // Open snackbar
  const handleopen = (message, severity) => {
    dispatch(setSnackbar({ open: true, message, severity }));
  };
  const navigate = useNavigate();
  const gotologin = () => {
    navigate("/login");
  };

  const handlesubmit = async (value, { resetForm }) => {
    console.log(value);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );
      console.log(user);
      handleopen("Successfully account registered", "success");
      resetForm();
      const emailSend = await sendSignInLinkToEmail(
        auth,
        value.email,
        actionCodeSettings
      );
      handleopen("Sign In link sent to your Email", "success");
      console.log(emailSend);
    } catch (error) {
      console.log(error.message);
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
        <Paper elevation={10} style={paperstyle}>
          <Grid align="center">
            <img
              src={logo}
              height="25px"
              width="100px"
              sx={{ objectFit: "contain" }}
            />
            {/* <h2 color="red" style={{ color: "primary" }}>
              Hi, Welcome Back
            </h2>
            <Typography style={{ color: "#d1c4e9" }} gutterBottom>
              Enter your credentials to continue
            </Typography> */}
            <Formik
              initialValues={initialValues}
              validationSchema={signInValidation}
              onSubmit={handlesubmit}
            >
              {(props) => (
                <Form>
                  <Stack spacing={2}>
                    <InputField
                      label="First Name"
                      placeholder="Enter your Firstname"
                      name="firstname"
                    />
                    <InputField
                      label="Last Name"
                      placeholder="Enter your Lastname"
                      name="lastname"
                    />
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
                    <InputField
                      label="Phone Number"
                      placeholder="Enter your phone number(optional)"
                      name="phonenumber"
                      fullWidth
                      type="number"
                    />

                    {/* <Stack direction="row" alignItems="center">
                      <Checkbox />
                      <Typography>Terms and Condition</Typography>
                    </Stack> */}

                    <Button type="submit" variant="contained" fullWidth>
                      Sign In
                    </Button>
                    <Button variant="text" onClick={gotologin} fullWidth>
                      Already have an account
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
export default Signup;
