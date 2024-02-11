import React from "react";
import "./schedule.css";
import DownArrow from "../../assets/mainboard/downarrow.png";
import Pin from "../../assets/mainboard/pin.png";
import NotPinned from "../../assets/mainboard/notPnnied.png";
import ToggleMenu from "../../assets/mainboard/toggle-menu.png";

function schedule() {
  const today = new Date()
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("-");
  return (
    <div className="schedule">
       <div className="heading">
       <p>Upcoming Schedule</p>
        {/* <input type='date' defaultValue={today}/> */}
        <p>
          Today,   {today}{"      "}  
          <span>
            <img className="downArrow" src={DownArrow} alt="img..." />
          </span>
        </p>
       </div>
      <div>
      <p>Priority</p>
        <div className="notification">
          <div className="para">
            <p>Outing Schedule for every department</p>
            <p className="date">Today 11.30Am</p>
          </div>
          <div>
            <img src={ToggleMenu} alt="img...." />
          </div>
        </div>
        <p>Others</p>

        <div className="notification" >
          <div className="para">
            <p>Meeting HR Department</p>
            <p className="date">Yesterday, 12.30pm</p>
          </div>
          <div>
            <img src={ToggleMenu} alt="img...." />
          </div>
        </div>

        <div className="notification">
          <div className="para">
            <p>
              IT Department need two more talents dor UX/UI Designer position
            </p>
            <p className="date">Yesterday, 9.45pam</p>
          </div>
          <div>
            <img src={ToggleMenu} alt="img...." />
          </div>
        </div>
      </div>
      <div className="all">
        <p >SCreate a new schedule</p>
      </div>
    </div>
  );
}

export default schedule;
