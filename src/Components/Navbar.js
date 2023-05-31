import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import SubjectTwoToneIcon from '@mui/icons-material/SubjectTwoTone';
import profilePic from "../images/profile-pic-01.jpg";

function Navbar({toggleSidebar, isSidebarOpen}) {


  return (
    <>
      <div className={`Navbar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="navGroup-1">
        <SubjectTwoToneIcon onClick = {toggleSidebar}/>
          <SearchRoundedIcon />
          <p>Search transactions, invoices or help</p>
        </div>

        <div className="navGroup-2">
          <NotificationsNoneTwoToneIcon />
          <p>John Doe</p>
          <img className="profileImage" src={profilePic} alt="profilePic" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
