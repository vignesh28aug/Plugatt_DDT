import * as Yup from "yup";

export const signInValidation = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  email: Yup.string().required("Please enter a email").email("Invalid email"),
  password: Yup.string().required(),
  phonenumber: Yup.string(),
});
