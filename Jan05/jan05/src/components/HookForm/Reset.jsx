import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get("http://jsonplaceholder.typicode.com/users/1");
    reset(res.data);
  };
  return (
    <div className="card shadow">
      <div className="card-header">Update User</div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your User Name"
              {...register("username", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-group form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Street"
                {...register("address.street", { required: true })}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Suite"
                {...register("address.suite", { required: true })}
              />
            </div>
          </div>
          <div className="form-group form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                {...register("address.city", { required: true })}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Zipcode"
                {...register("address.zipcode", { required: true })}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Website Name"
              {...register("website", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Company Name"
              {...register("company.name", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Company catch phrase"
              {...register("company.catchPhrase", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Company bs"
              {...register("company.bs", { required: true })}
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
