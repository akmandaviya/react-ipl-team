import React from 'react'
import {Link} from 'react-router-dom'

const Teamcard = (props) => {   
  return (
    
    <div className='team-card' key= {props.cardKEY} style={{background: props.background , 
          border: props.border, borderRadius:"15px", padding:"12px", margin: "1rem 0", cursor:"pointer"}}>
        <Link className='w-100' data-bs-toggle="tooltip" title={props.teamName}  style={{textDecoration:"none"}} to = {props.path} >
           
            <div className='d-flex flex-wrap justify-content-center flex-column  align-items-center text-center' style={{width:"270px"}}>
                 <div className='team-logo' style={{height:"158px", width:"158px"}}>
                     
                       <img style={{width: "100%", height: "100%", objectFit:"cover"}} src={props.teamImage} alt=''></img>
                 </div>
                 <div className='team-content col-100 floatLft' style={{color:"white", fontWeight:"800"}}>
                       <h3 style={{ fontWeight:"700", fontSize: "18px", lineHeight:"1.3", letterSpacing: "0.5px", marginTop:"12px", marginBottom:"20px", }}>{props.teamName}</h3> 
                       <p style={{fontsize: "12px", lineHeigh:"1.3", letterSpacing:"0.5px", marginBottom:"25px"}}>{props.teamOwner}</p>
                       <div className='w-100 justify-content-center d-flex'>
                        <h4 style={{fontSize:"12px"}}>{props.teamCaptain}</h4>
                       </div>
                 </div>
            </div>
            
        </Link>
    </div>
   
  )
}

export default Teamcard
