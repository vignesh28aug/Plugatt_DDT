import React, { useState } from "react";
import { Grid, Paper, Button } from "@mui/material";
import logo from "../assets/logo.png";
import { Form, Formik } from "formik";
import { Stack } from "@mui/system";
import InputField from "../components/InputField";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import SnackToast from "../components/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { postMethod } from "../api/methods";
import { setSnackbar } from "../redux/dashboardslice";
import { apikey, endpoints } from "../api/endpoints";
const paperstyle = {
  padding: 20,
  height: "auto",
  width: 400,
  textAlign: "center",
  borderRadius: "15px",
  background:"#191c24",
};

function Device() {
  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.dashboardreducer.snackbar);

  const initialValues = {
    userid: "",
    deviceid: "",
    storeid: "",
  };
  const signInValidation = Yup.object().shape({
    userid: Yup.string().required("Please Enter Email ID"),
    deviceid: Yup.string().required("Please Enter Device ID"),
    storeid: Yup.string().required("Please Enter Store ID"),
  });

  const handleCloseSnack = () => {
    dispatch(setSnackbar({ open: false, message: "", severity: "" }));
  };

  // Open snackbar
  const handleopen = (message, severity) => {
    dispatch(setSnackbar({ open: true, message, severity }));
  };
  const navigate = useNavigate();
  const handlesubmit = async (value, { resetForm }) => {
    try {
      const data = await postMethod(
        endpoints.device(value.userid, value.deviceid, value.storeid),
        apikey.device
      );
      console.log(value.userid, value.deviceid, value.storeid);
      console.log(data);
      const record = data.data.body;
      console.log(record)
      if(record == "Successfully inserted records"){
        handleopen("Device added", "success");
      } else {
        handleopen("Device already available", "error");
      }
      resetForm();
      // resetForm();
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
                      label="Email ID"
                      placeholder="Enter your Email ID"
                      name="userid"
                    />
                    <InputField
                      label="Device ID"
                      placeholder="Enter your Device ID"
                      name="deviceid"
                    />
                    <InputField
                      label="Store ID"
                      placeholder="Enter your Store ID"
                      name="storeid"
                    />
                    <Button type="submit" variant="contained">
                      SUBMIT
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
export default Device;
