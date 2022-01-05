import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import UserInformation from "./UserInformation";

export default function UserForm() {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const basicForm = (
    <Fragment>
      <div className="card-header border 0 p-3 w-75 mx-auto">
        Basic Information
      </div>
      <div className="card-body">
        <div className=" card border 0 shadow p-3 w-75 mx-auto">
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              {...register("fullname", { required: false })}
              name="fullname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", { required: false })}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              {...register("phone", { required: false })}
              name="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password", { required: false })}
              name="password"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
  return (
    <div>
      <div className="container py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          {basicForm}
          <UserInformation register={register} control={control} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
