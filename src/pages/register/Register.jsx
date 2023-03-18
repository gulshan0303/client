
import React from "react";
import { useDispatch } from "react-redux";
import { registerUserAsync } from "../../redux/features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Must be at least 6 characters"),
    }),
    onSubmit: (values) => {
      dispatch(registerUserAsync(values));
      navigate("/login");
    },
  });

  return (
    <div className="register">
      <div className="formData">
        <form onSubmit={formik.handleSubmit}>
          <div className="box">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="box">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="box">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>

          <h5>
            Already have Account? <Link to="/login">Login Account</Link>{" "}
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Register;
