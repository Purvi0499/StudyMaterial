import React from "react";
import { useFormContext } from "react-hook-form";
export default function Basic() {
  const { register } = useFormContext();
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Basic Form</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your First Name"
            {...register("fname")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Middle Name"
            {...register("mname")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Last Name"
            {...register("lname")}
          />
        </div>
      </div>
    </div>
  );
}
