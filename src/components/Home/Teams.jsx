import React, { Component } from 'react'
import Teamcard from './Teamcard'
import {teams} from '../../Util/TeamInfo'

export class Teams extends Component {
  render() {
    return (
      <div style={{display:"flex", flexFlow:"row wrap", justifyContent:"center", gap:"2rem" , margin:"1rem" }} >
       {teams.map ((element, index)=> {
            return <Teamcard key={index} teamImage={element.profile} teamName={element.teamName} 
            teamOwner ={element.owner} teamCaptain ={element.captain}   cardKEY = {element.teamId} 
            background = {element.background} border={element.border} path ={`players/${element.codeName}`}/>
       })}
      </div>
    )
  }
}

export default Teams  