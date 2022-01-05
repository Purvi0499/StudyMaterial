import React, { Fragment } from "react";
import { useForm, useFieldArray, useFormState } from "react-hook-form";

export default function UserInformation(prop) {
  const { register, control } = prop;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "users",
  });

  return (
    <Fragment>
      <div className="card-header border 0 p-3 w-75 mx-auto">
        User Information
      </div>
      <div className="card-body">
        <div className=" card border 0 shadow p-3 w-75 mx-auto">
          {fields.map((item, index) => (
            <div>
              <div className="form-row form-group">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your First name"
                    {...register("firstname", { required: false })}
                    name={`users.[${index}].firstname`}
                    defaultValue={item.firstname}
                  />
                </div>
                <br />
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Last name"
                    {...register("lastname", { required: false })}
                    name={`users.[${index}].lastname`}
                    defaultValue={item.lasttname}
                  />
                </div>
                <br />
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your E-mail Address"
                    {...register("email", { required: false })}
                    name={`users.[${index}].email`}
                    defaultValue={item.email}
                  />
                </div>
                <br />
                <div className="col">
                  <label htmlFor="state">Select Your State</label>
                  <br />
                  <select
                    className="form-control"
                    id="state"
                    {...register("state", { required: false })}
                    name={`users.[${index}].state`}
                    defaultValue={item.state}
                  >
                    <option value="">Select Your State</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Assam">Assam</option>
                    <option value="Goa">Goa</option>
                    <option value="Manipur">Manipur</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() =>
                  remove({ firstname: "", lasttname: "", email: "", state: "" })
                }
                className="btn btn-danger"
              >
                Delete User
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() =>
            append({ firstname: "", lasttname: "", email: "", state: "" })
          }
          className="btn btn-primary"
        >
          Add User
        </button>
      </div>
    </Fragment>
  );
}
