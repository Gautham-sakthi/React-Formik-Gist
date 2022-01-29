import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function EnrollmentForm() {
  const dropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("required"),
    bio: Yup.string().required("required"),
    course: Yup.string().required("required"),
    courseDate: Yup.date().required("required").nullable(),
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
              control="textarea"
              type="textarea"
              label="Bio"
              name="bio"
            />
            <FormikControl
              control="select"
              type="select"
              label="Course"
              name="course"
              options={dropdownOptions}
            />
            <FormikControl
              control="checkbox"
              label="Your skillset"
              name="skills"
              options={checkboxOptions}
            />
            <FormikControl
              control="date"
              type="date"
              label="Pick Date"
              name="courseDate"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EnrollmentForm;
