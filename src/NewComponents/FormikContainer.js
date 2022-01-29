import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./styles.css";
import FormikControll from "./FormikControll";

function FormikContainer() {
  const checkBoxOptions = [
    {
      key: "Option 1",
      value: "option 1",
    },
    {
      key: "Option 2",
      value: "option 2",
    },
    {
      key: "Option 3",
      value: "option 3",
    },
    {
      key: "Option 4",
      value: "option 4",
    },
  ];
  const radioOptions = [
    {
      key: "Option 1",
      value: "option 1",
    },
    {
      key: "Option 2",
      value: "option 2",
    },
    {
      key: "Option 3",
      value: "option 3",
    },
    {
      key: "Option 4",
      value: "option 4",
    },
  ];
  const dropDownOptions = [
    { key: "Select an option", value: "" },
    {
      key: "Option 1",
      value: "option 1",
    },
    {
      key: "Option 2",
      value: "option 2",
    },
    {
      key: "Option 3",
      value: "option 3",
    },
    {
      key: "Option 4",
      value: "option 4",
    },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkBoxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("valid email required").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkBoxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Submited values : ", values);
    console.log("date:", JSON.stringify(values.birthDate));
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
            <FormikControll
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControll
              control="textarea"
              type="textarea"
              label="Description"
              name="description"
            />
            <FormikControll
              control="select"
              type="select"
              label="Select a topic "
              name="selectOption"
              options={dropDownOptions}
            />
            <FormikControll
              control="radio"
              type="radio"
              label="Select a topic "
              name="radioOption"
              options={radioOptions}
            />
            <FormikControll
              control="checkbox"
              type="checkbox"
              label="Select a topic"
              name="checkBoxOption"
              options={checkBoxOptions}
            />
            <FormikControll
              control="date"
              label="Pick a date"
              name="birthDate"
              options={checkBoxOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
