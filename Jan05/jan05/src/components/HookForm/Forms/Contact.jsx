import React from "react";
import { useFormContext } from "react-hook-form";
export default function Contact() {
  const { register } = useFormContext();
  return (
    <div className="card border-0 mb-4">
      <div className="card-header">Contact Form</div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your E-mail Address"
            {...register("email")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Phone Number"
            {...register("phpne")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Alternate Phone Number"
            {...register("contact")}
          />
        </div>
      </div>
    </div>
  );
}
