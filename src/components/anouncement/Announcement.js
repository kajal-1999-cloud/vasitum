import React from "react";
import "./Announcement.css";
import DownArrow from "../../assets/mainboard/downarrow.png";
import Pin from "../../assets/mainboard/pin.png";
import NotPinned from "../../assets/mainboard/notPnnied.png";
import ToggleMenu from "../../assets/mainboard/toggle-menu.png";

function Announcement() {
  const today = new Date()
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join("-");
  return (
    <div className="announcement">
       <div className="heading">
       <p>Announcement</p>
        {/* <input type='date' defaultValue={today}/> */}
        <p>
          Today,   {today}{"      "}  
          <span>
            <img className="downArrow" src={DownArrow} alt="img..." />
          </span>
        </p>
       </div>
      <div>
        <div className="notification">
          <div className="para">
            <p>Outing Schedule for every department</p>
            <p className="date">10 Minutes ago</p>
          </div>
          <div>
            <img src={Pin} alt="img...." />
            <img src={ToggleMenu} alt="img...." />
          </div>
        </div>
        <div className="notification" >
          <div className="para">
            <p>Meeting HR Department</p>
            <p className="date">Yesterday, 12.30pm</p>
          </div>
          <div>
            <img src={NotPinned} alt="img...." />
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
            <img src={NotPinned} alt="img...." />
            <img src={ToggleMenu} alt="img...." />
          </div>
        </div>
      </div>
      <div className="all">
        <p >See All Announcement</p>
      </div>
    </div>
  );
}

export default Announcement;
