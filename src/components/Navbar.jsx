import React from 'react'
import logo from '../Assets/logo.png'


const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid" >
    <img className='navbar-brand' src= {logo} alt="" style={{height: "47.5px", width: "95px"}}/>
    {/* <a className="navbar-brand" href="/">IPL T20</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto justify-content-between w-25">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
     
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Teams
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> 
            <li><a className="dropdown-item" href="/">CSK</a></li>
            <li><a className="dropdown-item" href="/">KKR</a></li>
            <li><a className="dropdown-item" href="/">GT</a></li>
            <li><a className="dropdown-item" href="/">LSG</a></li>
            <li><a className="dropdown-item" href="/">MI</a></li>
            <li><a className="dropdown-item" href="/">DC</a></li>
            <li><a className="dropdown-item" href="/">PBKS</a></li>
            <li><a className="dropdown-item" href="/">SRH</a></li>
            <li><a className="dropdown-item" href="/">RR</a></li>
            <li><a className="dropdown-item" href="/">RCB</a></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">About</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
