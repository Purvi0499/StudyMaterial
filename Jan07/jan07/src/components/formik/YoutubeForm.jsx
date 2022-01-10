import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
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
const onSubmit = (values) => {
  console.log("Form Data", values);
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
  if (!values.comments) {
    errors.comments = "Required";
  }
  return errors;
};
export default function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
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
          <Field as="textarea" id="comments" name="comments"></Field>
        </div>
        <div className="form-control">
          <label htmlFor="address"> Address</label>
          <Field name="address">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
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
          <Field type="text" id="secondaryPh" name="phoneNumbers[1]"></Field>
        </div>
        <div className="form-control">
          <label>Phone Numbers List</label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps) => {
              console.log("fieldArrayProps", fieldArrayProps);
              return <div>Field Array</div>;
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
