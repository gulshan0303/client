import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../redux/features/authSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state.auth }));
  // const user = JSON.parse(localStorage.getItem('profile'));
  console.log("user--", user);
  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/login");
  };
  console.log("user", user);
  return (
    <div className="navbar">
      <div className="logo">
        <h2><Link to='/'>DogFinder</Link></h2>
      </div>
      <div className="rightSection">
        {user?.success ? (
          <>
            <p>
              <Link to="/winner">Winner</Link>
            </p>
            <p>{user?.user?.name}</p>
            <p className="logout" onClick={() => handleLogout()}>logout</p>
          </>
        ) : (
          <>
            <Link to="/login">
              <p>login</p>
            </Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
