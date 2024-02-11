import React from "react";
import "./Activity.css";

function Activity() {
  const today = new Date()
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("-");
    
  return (
    <div className="activity">
       <h2 style={{ marginBottom: "18px" }}>
        Recently Activity
        </h2>

       <p style={{ fontSize: "10px" }}>
        10.30AM, fri, 10 Sept 2021
       </p>

       <h3> 
        You Posted a New Job
       </h3>

       <p style={{ fontSize: "13px" }}>
        Kindly check the requirement and terms of work and make sure everything
        is right.
      </p>

      <div className="allActivity">
        <p>Today you makes 12 Activity</p>
        <button className="buttons">See All Activity</button>
      </div>
    </div>
  );
}

export default Activity;
