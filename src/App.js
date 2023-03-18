import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import {useDispatch} from 'react-redux'
import { useEffect } from "react";
import { setUser } from "./redux/features/authSlice";
import Winner from "./components/winner/Winner";
function App() {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(setUser(user))
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/winner" element={<Winner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
