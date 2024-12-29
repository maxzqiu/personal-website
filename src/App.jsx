import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

export function Projects(){
  return (
    <>
      <h3>My Projects:</h3>
      <ol>
        <li><a href="/projects/cursor-balls">Cursor Balls</a></li>
        <li><a href="/projects/to-do-list">To Do List</a></li>
        <li><a href="/projects/quiz-game">Quiz Game</a></li>
        <li><a href="/projects/spinner">Spinner</a></li>
        <li><a href="/projects/minesweeper">Minesweeper</a></li>
      </ol>
    </>
  )
}

export function Home(){
  return (
    <>
        <h4>Hi! My name is Max and welcome to my website. </h4>
        <h5>A little bit about me:</h5>
        <ul>
            <li>I am 13 years old and in 8th grade. </li>
            <li>Favorite color: blue</li>
            <li>Panda plushies rule! </li>
        </ul>
        <img src="/panda-clipart" alt="panda clipart"></img>
            

        
        <p>I have some projects to share. 
            Click on the Projects bar to see more! 
        </p>

    </>
)
}

export function NavBar(){
  return (

          <nav>
              <ul>
                <div className="navigation-bar">
                  <li><Link to="/about"> About</Link></li>
                  <li><Link to="/"> Home</Link></li>
                  <li><Link to="/projects"> Projects</Link></li>
                </div>
                  
                  
              </ul>
          </nav>
         
      )
}

function App() {
   // Router: Redirects all <Route> components to appropriate links
  return (
    <Router>
      <p>Hello! Welcome to my website! </p>
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<p>Nothing here! </p>}></Route>
        
      </Routes>
              
  
    </Router>
      )


}

export default App
