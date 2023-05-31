import React from "react";
import profilePic from "../images/profile-pic-01.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import profilePic2 from "../images/profile-pic-02.jpg";
import profilePic3 from "../images/profile-pic-03.jpg";
import profilePic4 from "../images/profile-pic-04.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function User() {
  return (
    <>
      <div
        style={{
          "display": "flex",
          "flex-direction": "column",
          "background-color": "white",
          "justify-content": "space-between",
          "border-radius": "5px",
          "width":"100%"
        }}
      >
        <div style={{"margin-left":"280px","margin-top":"20px"}}>
          <img
            style={{ "border-radius": "50%", "height": "100px", "width": "100px","margin-right":"20px" }}
            src={profilePic}
          ></img>
          <div>Nick Herasimenka</div>
          <div>United States</div>
          <div>
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
            <WhatsAppIcon />
          </div>
        </div>
        <hr style={{ "width": "70%", "text-align": "center" }} />

        <div style={{ "display": "flex", "flex-direction": "column","margin-left":"30px" }}>
          <div
            style={{
              "display": "flex",
              "flex-direction": "row",
              "justify-content": "space-between",
              "margin-bottom":"10px" 
            }}
          >
            <div>Our Users</div>
            <MoreVertIcon style={{"margin-right":"125px"}}/>
          </div>

          <div style={{ "display": "flex", "flex-direction": "row","margin-bottom":"20px" }}>
            <img
              src={profilePic2}
              style={{"border-radius": "50%", "height": "50px", width: "50px","float":"left" }}
            />
            <div style={{"display":"flex","flex-direction":"column","top":"0","width":"50%" }}>
              <p style={{"margin":"0"}}>Drew James</p>
              <p style={{"margin":"0"}}>United States</p>
            </div>
            <div >Mobile:8715674877</div>
          </div>

          <div style={{ "display": "flex", "flex-direction": "row", "margin-bottom":"20px"}}>
            <img
              src={profilePic3}
              style={{ "border-radius": "50%", "height": "50px", "width": "50px","float":"left" }}
            />
            <div style={{ "display": "flex", "flex-direction": "column","top":"0","width":"50%" }}>
              <p style={{"margin":"0"}}>Bavid Kames</p>
              <p style={{"margin":"0"}}>United States</p>
            </div>
            <div >Mobile:8715674877</div>
          </div>

          <div style={{ "display": "flex", "flex-direction": "row","margin-bottom":"20px" }}>
            <img
              src={profilePic4}
              style={{ "border-radius": "50%", "height": "50px", "width": "50px" }}
            />
            <div style={{ "display": "flex", "flex-direction": "column","top":"0","width":"50%" }}>
              <p style={{"margin":"0"}}>Lavid Emes</p>
              <p style={{"margin":"0"}}>United States</p>
            </div>
            <div>Mobile:8715674877</div>
          </div>
        </div>
      </div>
    </>
  );
}
