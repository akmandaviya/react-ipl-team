import React, {useState}from "react";
import "./Players.css";
import Card from "../Card/Card";
import Extra from "../OtherPlayer/Extra";
import teamPlayer from "../../Util/PlayerInfo.js";
import { useParams } from "react-router";


const Players = (props) => {

  const {team} = useParams()

  
  
  const currTeam = teamPlayer[team]
  return (
    <div className="players-page">
  
  
      <ul className="player-container">
        {currTeam.player.map((data,index) => {
          if (index < 11) {
            return (
              <Card
                key={data.id}
                background={currTeam.teamColor}
                image={data.profile}
                name={data.playerName}
                role={data.role}
                matches={data.matches}
                runs={data.run}
                wickets={data.wickets}
              />
            );
          }
        })}
      </ul>
      <ul className="extra-player-container">
        <h3 style={{ textAlign: "center" }}>Extra Players</h3>
        {currTeam.player.map((data, index) => {
          if ( index  > 10) {
            return (
              <Extra
                key={data.id}
                background={currTeam.teamColor}
                image={data.profile}
                name={data.playerName}
                role={data.role}
                matches={data.matches}
                runs={data.run}
                wickets={data.wickets}
              />
            );
          }
        })}
      </ul>
     


    </div>
  );
};

export default Players;
