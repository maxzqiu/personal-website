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
        <li>Cursor Balls - cursor-balls.vercel.app</li>
        <li>To Do List - children-generation.vercel.app</li>
        <li>Quiz Game - quiz-game-omega-two.vercel.app</li>
        <li>Spinner - spinner-silk.vercel.app</li>
        <li>Minesweeper - minesweeper-pied-one.vercel.app</li>
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
                  <li><Link to="/about"> About</Link></li>
                  <li><Link to="/"> Home</Link></li>
                  <li><Link to="/projects"> Projects</Link></li>
                  
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
        
      </Routes>
              
  
    </Router>
      )


}

export default App
