import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import "./styles.css";
function RegisterationForm() {
  const options = [
    {
      key: "Email",
      value: "emailmoc",
    },
    {
      key: "Telephone",
      value: "telephonemoc",
    },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("email invalid").required("required"),
    password: Yup.string().required("required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "passwords must match")
      .required("Required "),
    modeOfContact: Yup.string().required("required"),
    phone: Yup.string().when("modeofContact", {
      is: "telephonemoc",
      then: Yup.string().required("required"),
    }),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              label="Mode of Contact"
              name="modeOfContact"
              options={options}
            />
            <FormikControl control="input" label="Phone Number" name="phone" />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegisterationForm;
