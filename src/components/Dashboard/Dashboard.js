import React from "react";
import './Dashboard.css'
import Stats from '../../assets/mainboard/stats.png'
import Percentage from '../../assets/mainboard/+2%.png'
import Upper_arrow from '../../assets/mainboard/upper_arrow.png'

function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <div className="dashboard">
        <div className="job">
          <div className='card' style={{ background: '#FFEFE7' }}>
            <h3>Available position</h3>
            <h1>24</h1>
            <p style={{ color: '#FF5151' }}>4 urgently needed</p>
          </div>
          <div className='card' style={{ background: "#E8F0FB"}}>
            <h3>Job Open</h3>
            <h1>10</h1>
            <p style={{ color: '#3786F1' }}>4 active hiring</p>
          </div>
          <div className='card'style={{ background: "#FDEBF9"}}>
            <h3>Available position</h3>
            <h1>24</h1>
            <p style={{ color: '#EE61CF' }}>4 Department</p>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="card">
            <div className="Para">
                <h3>Total Employees</h3><br/>
                <h1>216</h1><br/>
                <p>120 Men</p>
                <p>96 Women</p><br/>
              </div>
              <div  className='data'>
                <img  className="percent"src={Percentage} alt='img...'/>
                <img  className="UpperArrow"src={Upper_arrow} alt='img...'/>
                <img  className="stats" src={Stats} alt="img..."/>
                <p>+2% Past month</p>
              </div>
            </div>
            <div className="card">
              <div className="Para">
                <h3>Total Employees</h3><br/>
                <h1>216</h1><br/>
                <p>120 Men</p>
                <p>96 Women</p><br/>
              </div>
              <div  className='data'>
                <img  className="percent"src={Percentage} alt='img...'/>
                <img  className="UpperArrow"src={Upper_arrow} alt='img...'/>
                <img  className="stats" src={Stats} alt="img..."/>
                <p>+2% Past month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
