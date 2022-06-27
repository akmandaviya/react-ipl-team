import React, { useState } from "react";
import "./card.css";

const Card = (props) => {
  const { background, image, name, role, matches, runs, wickets } = props;
  const [properties, setProperties] = useState(props);

  return (
    <li
      className="card"
      style={{
        background: properties.background,
      }}
    >
      <div className="p-image">
        <img src={properties.image} alt="" />
      </div>
      <div className="p-info">
        <div className="name">
          <h2>{properties.name}</h2>
        </div>
        <div className="item">
          <span>Role</span>
          <span>{properties.role}</span>
        </div>
        <div className="item">
          <span>Matches</span>
          <span>{properties.matches}</span>
        </div>
        <div className="item">
          <span>Runs</span>
          <span>{properties.runs}</span>
        </div>
        <div className="item">
          <span>Wickets</span>
          <span>{properties.wickets}</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
