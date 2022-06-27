import React, { Component } from 'react'
import Teams from './components/Home/Teams'
import Navbar from './components/NavBar/Navbar'
import Players from './components/PlayerPage/Players'
import About from './components/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <Navbar/>
       <Routes>
        <Route exact path='/' element={<Teams/>}/>
        <Route  path='/players/:team' element={<Players/>}/>
        <Route exact path='/about' element={<About/>}/>
        {/* <Route exact path='/' element=""/> */}
       </Routes>
      </BrowserRouter>
    )
  }
}

export default App
