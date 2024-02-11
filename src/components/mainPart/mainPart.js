import React from "react";
import "./MainPart.css";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../sideBar/SideBar";
import Activity from "../activity/Activity";
import Schedule from "../schedule/schedule";
import Announcement from "../anouncement/Announcement";
import Search from "../../assets/mainboard/search.png";
import Notification from "../../assets/mainboard/notiication.png";
import Message from "../../assets/mainboard/message.png";
import Profile from "../../assets/mainboard/pro_pic.png";
import DownArrow from "../../assets/mainboard/downarrow.png";

function mainPart() {
  return (
    <div>
      <nav></nav>
      <main>
        <div className="mainPart">
          <div>
            <Sidebar />
          </div>
          <div className="">
            <div className="nav">
              <div className="searchBar">
                <input type="text" placeholder="searchbar" />
                <img src={Search} alt="img..." />
              </div>
              <div className="profile">
                <img src={Notification} alt="" />
                <img src={Message} alt="" />
                <img src={Profile} alt="" />
                <p>Admirra John</p>
                <img  className="downArrow"src={DownArrow} alt="" />
              </div>
            </div>
            <div className="mainPart">
              <div>
                <Dashboard />
                <Announcement />
              </div>
              <div>
                <Activity />
                <Schedule />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default mainPart;
