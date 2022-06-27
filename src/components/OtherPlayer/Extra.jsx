import React from "react";
import "./Extra.css";

const Extra = (props) => {
  const { background, image, name, role, matches, runs, wickets } = props;
  return (
    <li
      className="extra-player-card"
      style={{
        background: background,
      }}
    >
      <div className="player-image">
        <img src={image} alt="" />
      </div>
      <div className="player-info">
        <div className="item">
          <span>Name</span>
          <span>{name}</span>
        </div>
        <div className="item">
          <span>Role</span>
          <span>{role}</span>
        </div>
        <div className="item">
          <span>Matches</span>
          <span>{matches}</span>
        </div>
        <div className="item">
          <span>Run</span>
          <span>{runs}</span>
        </div>
        <div className="item">
          <span>Wickets</span>
          <span>{wickets}</span>
        </div>
      </div>
    </li>
  );
};

export default Extra;
