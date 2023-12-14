import React, { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";
import "../styles/ProgressBar.css";

const ProgressBar = () => {
  const { progress } = useContext(ProgressContext);

  const progressLevelStyle = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "green",
    borderRadius: "inherit",
  };

  const percentageStyle = {

    padding: 5,

  }

  return (
    <div className="progress-bar">
      <div className="progress-level" style={progressLevelStyle}>
        <span style={percentageStyle}>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
