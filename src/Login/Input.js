import React from "react";
import { Field, ErrorMessage } from "formik";
import "./styles.css";
import TextError from "./TextError";
function Input(props) {
  const { label, name, type, ...rest } = props;
  return (
    <div className="form-controll">
      <label htmlFor={name}>{label}</label>
      <Field type={type} id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
