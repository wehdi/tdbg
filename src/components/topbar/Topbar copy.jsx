import React from "react";
import "./topbar.css";
import { NotificationsNone, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">TDB - CNR</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>

          <div className="topbarIconContainer">
            <Link to="/Settings" className="link">
              <Settings />
            </Link>
          </div>
          <img
            src="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
