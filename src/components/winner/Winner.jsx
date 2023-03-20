import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/authSlice";
import "./Winner.css";
import moment from "moment"


const Winner = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const img = JSON.parse(localStorage.getItem('img'));
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setUser({user,img}))
 },[])
  // console.log('user', user)
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>dog1</th>
            <th>winnerName</th>
            <th>time</th>
            <th>looserName</th>
            <th>dog2</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
              <td>
                <img src={img?.image} alt="img" style={{width:"32px",height:"32px"}}/>
              </td>
              <td>{img?.email}</td>
              <td>{moment(img?.clickTime).format("MMMM Do YYYY, HH:mm:ss")}</td>
              <td>Arvind</td>
              <td>Oscar</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
};





export default Winner;
