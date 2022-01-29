import {
  ErrorMessage, FastField, FieldArray, Form, Formik
} from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import "./styles.css";
import TextError from "./TextError";

const initialValues = {
  name: "goutham",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  primaryNumbers: ["", ""],
  phNumbers: [""],
};
const savedValues = {
  name: "vishwas",
  email: "e@e.com",
  channel: "ad",
  comments: "ad",
  address: "ad",
  social: {
    facebook: "fb",
    twitter: "tw",
  },
  primaryNumbers: ["1234", "21454"],
  phNumbers: [""],
};
const onSubmit = (values, onSubmitProps) => {
  console.log("form data", values);
  console.log("onsubmit props", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email format").required("Required"),
  channel: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});

const validateComments = (values) => {
  let error;
  if (!values) {
    return (error = "Required");
  }
  return error;
};

function YoutubeForm() {
  const [formValues, setState] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      enableReinitialize
      //validateOnMount
    >
      {(formik) => {
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <FastField type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <FastField type="email" id="email" name="email" />
              <ErrorMessage name="email" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <FastField type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <FastField
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments">
                {(errmsg) => <div className="error">{errmsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field}></input>
                      {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook</label>
              <FastField
                type="text"
                id="facebook"
                name="social.facebook"
              ></FastField>
              <ErrorMessage name="facebook" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter</label>
              <FastField
                type="text"
                id="twitter"
                name="social.twitter"
              ></FastField>
              <ErrorMessage name="twitter" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="primaryPh">Primary Phone</label>
              <FastField
                type="text"
                id="primaryPh"
                name="primaryNumbers[0]"
              ></FastField>
              <ErrorMessage name="primaryPh" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary Phone</label>
              <FastField
                type="text"
                id="secondaryPh"
                name="primaryNumbers[1]"
              ></FastField>
              <ErrorMessage name="secondaryPh" component={TextError} />
            </div>

            <div className="form-control">
              <label>List of Phone</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  //console.log(fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((el, idx) => (
                        <div key={idx}>
                          <FastField
                            name={`phNumbers[${idx}]`}
                            placeholder="phone number"
                            className="Field"
                          />
                          {idx > 0 && (
                            <button type="button" onClick={() => remove(idx)}>
                              -
                            </button>
                          )}

                          <button type="button " onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/* <button
              type="submit"
              onClick={() => formik.validateField("comments")}
            >
              Validate Comments
            </button>
            <button type="submit" onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type="submit"
              onClick={() => formik.setFieldTouched("comments")}
            >
              Validate Comments touch
            </button>
            <button
              type="submit"
              onClick={() =>
                formik.setTouched({
                  name: false,
                  email: false,
                  channel: false,
                })
              }
            >
              Validate all touch
            </button> */}
            <button type="button" onClick={() => setState(savedValues)}>
              Load Initial Values
            </button>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
            <button type="reset">Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeForm;
