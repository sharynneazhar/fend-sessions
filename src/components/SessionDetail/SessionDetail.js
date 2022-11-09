import React from "react";
import "./SessionDetail.css";

function SessionDetail() {
  return (
    <div className="session-detail">
      <h2>Session Details</h2>
      <p>Sat, Sun, Wed</p>
      <p>8-10PM EASTERN</p>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(
            "https://udacityteam.zoom.us/my/sharynne.azhar"
          );
          alert("Link copied to clipboard");
        }}
      >
        Zoom Link
      </button>
    </div>
  );
}

export default SessionDetail;
