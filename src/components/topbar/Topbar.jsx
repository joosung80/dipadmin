import React from "react";
import "./topbar.css";
// import { NotificationsNoneIcon } from "@mui/icons-material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        {/* <div className="topLeft">left</div> */}
        <span className="logo">DIP Admin</span>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div> */}
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src="https://images.pexels.com/photos/11319741/pexels-photo-11319741.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
