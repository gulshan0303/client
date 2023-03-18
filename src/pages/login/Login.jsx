import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUserAsync } from "../../redux/features/authSlice";
import "./Login.css";
import { toast } from "react-toastify";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(loginUserAsync(values));
      toast.success("Login Successfully");
      navigate("/");
    },
  });

  useEffect(() => {
    // error && toast.error(error);
  }, []);

  return (
    <div className="login">
      <div className="formData">
        <form onSubmit={formik.handleSubmit}>
          <div className="box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="box">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
          <h5>
            Don't have an account? <Link to="/register">Create Account</Link>{" "}
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Login;
