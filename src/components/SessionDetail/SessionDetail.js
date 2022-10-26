import React from "react";
import "./SessionDetail.css";

function SessionDetail() {
  return (
    <div className="session-detail">
      <h2>Session Details</h2>
      <p>Sat, Sun, Wed</p>
      <p>8-10PM EASTERN</p>
      <a
        href="https://udacityteam.zoom.us/my/sharynne.azhar"
        target="_blank"
        rel="noreferrer"
      >
        https://udacityteam.zoom.us/my/sharynne.azhar
      </a>
    </div>
  );
}

export default SessionDetail;