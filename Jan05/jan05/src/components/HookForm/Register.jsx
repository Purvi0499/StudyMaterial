import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="container py-5">
        <div className=" card border 0 shadow p-4 w-75 mx-auto">
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
          <br />
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
          <br />
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
          <br />
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
          <br />
          <div className="form-group">
            <label htmlFor="address">City</label>
            <input
              type="text"
              className="form-control"
              {...register("address.city[0]", { required: false })}
              name="address[0].city"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="address">Zip code</label>
            <input
              type="text"
              className="form-control"
              {...register("address[0].zip", { required: false })}
              name="address[0].zip"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="address">city</label>
            <input
              type="text"
              className="form-control"
              {...register("address[1].city", { required: false })}
              name="address[1].city"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="address">zip</label>
            <input
              type="text"
              className="form-control"
              {...register("address[1].zip", { required: false })}
              name="address[1].zip"
            />
          </div>
          <br />
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="male"
                value="male"
                {...register("gender", { required: false })}
                name="gender"
              />
              <label className="form-check-label" htmlFor="male">
                male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="female"
                value="female"
                {...register("gender", { required: false })}
                name="gender"
              />
              <label className="form-check-label" htmlFor="female">
                female
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="other"
                value="other"
                {...register("gender", { required: false })}
                name="gender"
              />
              <label className="form-check-label" htmlFor="other">
                other
              </label>
            </div>
          </div>
          <div className="form-group">
            <select
              className="custom-select"
              name="state"
              {...register("state", { required: false })}
            >
              <option value="">Select your state</option>
              <option value="Delhi">Delhi</option>
              <option value="Punjab">Punjab</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Bihar">Bihar</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
