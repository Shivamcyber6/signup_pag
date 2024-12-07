import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../styles/SignupForm.css';


export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5003/api/signup", data);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message || "Signup failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && <small className="text-danger">{errors.firstName.message}</small>}
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && <small className="text-danger">{errors.lastName.message}</small>}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </div>

        <div className="mb-3">
          <label>Country Code</label>
          <input
            type="text"
            className="form-control"
            {...register("countryCode", { required: "Country code is required" })}
          />
          {errors.countryCode && <small className="text-danger">{errors.countryCode.message}</small>}
        </div>

        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            {...register("phoneNumber", { required: "Phone number is required" })}
          />
          {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber.message}</small>}
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <small className="text-danger">{errors.password.message}</small>}
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value, { password }) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword.message}</small>}
        </div>

        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            {...register("dob", { required: "Date of birth is required" })}
          />
          {errors.dob && <small className="text-danger">{errors.dob.message}</small>}
        </div>

        <div className="mb-3">
          <label>Gender</label>
          <select className="form-control" {...register("gender", { required: "Gender is required" })}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <small className="text-danger">{errors.gender.message}</small>}
        </div>

        <button type="submit" className="btn btn-primary w-100">Signup</button>
      </form>
    </div>
  );
}
