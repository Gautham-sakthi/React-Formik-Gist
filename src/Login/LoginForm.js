import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button } from "@chakra-ui/react";
function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("required"),
  });
  const onSubmit = (values) => {
    console.log("submitted data", values);
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
              control="chakrainput"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="chakrainput"
              type="password"
              label="Password"
              name="password"
            />
            <Button type="submit" disabled={!formik.isValid}>
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
