import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  email: Yup.string().required("Please enter a email").email("Invalid email"),
  password: Yup.string().required(),
  termsAndConditions: Yup
    .bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
    privacypolisy : Yup
    .bool()
    .oneOf([true], 'You need to accept the privacy policy'),
});
