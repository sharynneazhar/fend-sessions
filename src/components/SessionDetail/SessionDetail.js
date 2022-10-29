import React from "react";
import "./SessionDetail.css";

function SessionDetail() {
  const clickToCopy = () => {
    const copyText = "https://udacityteam.zoom.us/my/sharynne.azhar";
    navigator.clipboard.writeText(copyText);
    alert("Link copied to clipboard");
  };

  return (
    <div className="session-detail">
      <h2>Session Details</h2>
      <p>Sat, Sun, Wed</p>
      <p>8-10PM EASTERN</p>
      <button onClick={clickToCopy}>Zoom Link</button>
    </div>
  );
}

export default SessionDetail;
