import React, { Fragment } from "react";
import Address from "./Address";
import Basic from "./Basic";
import Contact from "./Contact";
export default function Forms(props) {
  const { methods } = props;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Fragment>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="container py-4">
          <Basic />
          <Address />
          <Contact />
          <button type="submit" className="btn btn-primary">
            Create New Account
          </button>
        </div>
      </form>
    </Fragment>
  );
}
