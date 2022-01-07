import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
const initialValues = {
  name: "Purvi",
  email: "",
  channel: "",
  comments: "",
  address: "",
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
          <Field type="text" id="name" name="name"></Field>
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email"></Field>
          <ErrorMessage name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="youtube channel name"
          ></Field>
          <ErrorMessage name="channel" />
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
              console.log("Render props", props);
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
