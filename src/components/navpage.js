import React from "react";
import "./navpage.css";
import logo from "./logo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
 import { Link } from "react-router-dom";
 import { useSelector } from "react-redux";
 import { selectUser } from "./Redux/usersslice";
import { useState } from "react";
export default function Navbar(){
   
    const [isSidebarVisible, setSidebarVisibility] = useState(false);
    const user=useSelector(selectUser);

  const handleMouseEnter = () => {
    setSidebarVisibility(true);
  };

  const handleMouseLeave = () => {
    setSidebarVisibility(false);
  };
    return(
        <div className="navback">
        <nav className="nav">
            <a href="/" className="sitename">
            <img className="logo" src={logo}/>
            </a>
            <ul className="navul">
                <li className="nav-items">
                    <a href="/home">HOME</a>
                </li>
                <li>
                  <Link to='/about'>

                    <a>ABOUT US</a>
                  </Link>
                </li>
                <li>
                  <Link to='/contact'>
                    <a>HELP </a>
                    </Link>
                </li>
            </ul>
            <div onMouseEnter={handleMouseEnter}>
              <AccountCircleIcon style={{fontSize:"50px",marginright: "-90px"}}/>
              </div>
            <div>
              {user.name}
            </div>
            {isSidebarVisible && (
        <div className="sidebar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a className="sidebar-link">
                Your Profile
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                Help
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                <Link to="/">Logout</Link>
                <div  className="logouticon" >
                <LogoutIcon style={{ fontSize: '15px',color: 'whitesmoke' }}/>
                </div>
              </a>
            </li>
          </ul>
        </div>
            )}
        </nav>
        </div>
    );
}