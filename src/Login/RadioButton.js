import React from "react";
import { Field, ErrorMessage } from "formik";
import "./styles.css";
import TextError from "./TextError";
function RadioButton(props) {
  const { label, name, type, options, ...rest } = props;

  return (
    <div className="form-controll">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((el) => {
            return (
              <React.Fragment key={el.key}>
                <input
                  type="radio"
                  id={el.value}
                  {...field}
                  value={el.value}
                  checked={field.value === el.value}
                ></input>
                <lable htmlFor={el.value}>{el.key}</lable>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioButton;
