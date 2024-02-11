import React from 'react'
import Stylesheet from './sidebar.css'
import Dashboard from '../../assets/sidebar/dashboard.png'
import Logo from '../../assets/sidebar/logo.png'
import LogoName from '../../assets/sidebar/logoName.png'
import Department from '../../assets/sidebar/department.png'
import Support from '../../assets/sidebar/Support.png'
import Setting from '../../assets/sidebar/setting.png'
import Schedule from '../../assets/sidebar/schedule.png'
import Employee from '../../assets/sidebar/employee.png'
import Recruitment from '../../assets/sidebar/recruitment.png'

function sideBar() {
  return (
    <div className="sidebar">
         <div className='logo'>
            <img src={LogoName} alt=''/>
         </div>

         <div className='mainMenu'>
            <p>MAIN MENU</p>
            <div className='flex'> 
                <img src={Dashboard} alt='img...'/>
                <p className='active'>Dashboard</p>
            </div>
            <div className='flex'> 
                <img src={Recruitment}alt='img...'/>
                <p>Recruitment</p>
            </div>
            <div className='flex'> 
                <img src={Schedule} alt='img...'/>
                <p>Schedule</p>
            </div>
            <div className='flex'> 
                <img src={Employee} alt='img...'/>
                <p>Employee</p>
            </div>
            <div className='flex'> 
                <img src={Department} alt='img...'/>
                <p>Department</p>
            </div>
         </div>
         <div>
            <p>OTHER</p>
            <div className='flex'> 
                <img src={Support} alt='img...'/>
                <p>support</p>
            </div>
            <div className='flex'> 
                <img src={Setting} alt='img...'/>
                <p>Settings</p>
            </div>
         </div>
    </div>
  )
}

export default sideBar