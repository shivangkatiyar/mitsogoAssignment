import React from "react";
import Statistics from "./Statistics.js";
import Referer from "./Referer.js";
import User from "./User.js";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Video from "./Video.js";
import Sales from "./Sales.js";

export default function MainPage() {
  return (
    <>
      <div className="MainPage">
        <div className="Wrapper">
          <h1>Overview</h1>
          <button className="Box">
            Add Funds <AddCircleIcon style={{ "margin-top": "2px" }} />
          </button>
        </div>

        <div className="Widgets">
          <div
            style={{
              "display": "flex",
              "flex-direction": "column",
              // "margin-left": "50px",
            }}
          >
            <div style={{ "display": "flex", "flex-direction": "row","width":"130%", "justify-content":"space-between" }}>
              <Statistics />
              <Sales />
            </div>
            <Referer />
          </div>
          <div style={{ "display": "flex", "flex-direction": "column","width":"100%","justify-content":"space-between" }}>
            <User />
            <Video />
          </div>
        </div>
      </div>
    </>
  );
}
