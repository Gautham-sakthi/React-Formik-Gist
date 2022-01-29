import React from "react";
import { Field, ErrorMessage } from "formik";
import "./styles.css";
import TextError from "./TextError";
function Select(props) {
  const { label, name, type, options, ...rest } = props;

  return (
    <div className="form-controll">
      <label htmlFor={name}>{label}</label>
      <Field as={type} id={name} name={name} {...rest}>
        {options.map((el) => (
          <option key={el.value} value={el.value}>
            {el.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Select;
