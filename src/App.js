import React, { Component } from 'react'
import Teams from './components/Teams'
import Navbar from './components/Navbar'
import About from './components/About'

export class App extends Component {
  render() {
    return (
      <div>
       <Navbar/>
        <Teams/>
        {/* <About/> */}
      </div>
    )
  }
}

export default App
