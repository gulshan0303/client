import React from "react";
import "./Winner.css";

const data = [
  { dog1: "Fido", winnerName: "Alice", time: "12:30pm", looserName: "Bob", dog2: "Rufus" },
  { dog1: "Buddy", winnerName: "Charlie", time: "1:45pm", looserName: "Dave", dog2: "Max" },
  { dog1: "Luna", winnerName: "Emily", time: "3:00pm", looserName: "Frank", dog2: "Oscar" },
];

const Winner = () => {
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
          {data.map((item) => (
            <tr key={item.dog1}>
              <td>{item.dog1}</td>
              <td>{item.winnerName}</td>
              <td>{item.time}</td>
              <td>{item.looserName}</td>
              <td>{item.dog2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};





export default Winner;
