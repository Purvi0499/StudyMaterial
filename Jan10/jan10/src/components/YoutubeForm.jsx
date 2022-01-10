import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";

//formik runs validations onchange events onblur events and
//when an attempt is made to submit form.
import TextError from "./TextError";
const initialValues = {
  name: "Purvi",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};
const savedValues = {
  name: "Purvi",
  email: "p@gmail.com",
  channel: "lohanapurvi",
  comments: "hibi",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};
const onSubmit = (values, onSubmitProps) => {
  console.log("Form Data", values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm(true);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};
export default function YoutubeForm() {
  const [formValues, setFormvalues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validate={validate}
      onSubmit={onSubmit}
      enableReinitialize
      validateOnMount
    >
      {(formik) => {
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name here"
              ></Field>
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email"></Field>
              <ErrorMessage name="email" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="youtube channel name"
              ></Field>
              <ErrorMessage name="channel">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="comments"> Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              ></Field>
              <ErrorMessage name="comments" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="address"> Address</label>
              <FastField name="address">
                {(props) => {
                  console.log("Field Render");
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook"></Field>
            </div>

            <div className="form-control">
              <label htmlFor="twitter">Twitter profile</label>
              <Field type="text" id="twitter" name="social.twitter"></Field>
            </div>
            <div className="form-control">
              <label htmlFor="primaryPh">Primary Phone number</label>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]"></Field>
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary Phone number</label>
              <Field
                type="text"
                id="secondaryPh"
                name="phoneNumbers[1]"
              ></Field>
            </div>
            <div className="form-control">
              <label>Phone Numbers List</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;

                  return (
                    <div>
                      {phNumbers.map((phNumbers, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              validate Comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              validate form
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              set field touched
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              set touched
            </button>
            <button type="reset">Reset</button>
            <button type="button" onClick={() => setFormvalues(savedValues)}>
              load saved data
            </button>
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
