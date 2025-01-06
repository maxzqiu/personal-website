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
        <li><a href="https://cursor-balls.vercel.app">Cursor Balls</a></li>
        <li><a href="https://children-generation.vercel.app">To Do List</a></li>
        <li><a href="https://quiz-game-omega-two.vercel.app">Quiz Game</a></li>
        <li><a href="https://spinner-silk.vercel.app">Spinner</a></li>
        <li><a href="Https://minesweeper-pied-one.vercel.app">Minesweeper</a></li>
      </ol>
    </>
  )
}

export function Home(){
  return (
    <>
        <h4>Hi! My name is Max, and welcome to my website. </h4>
        <h5>A little bit about me:</h5>
        <ul>
            <li>I am 13 years old and in 8th grade. </li>
            <li>Favorite color: blue</li>
            <li>Panda plushies rule! </li>
        </ul>
        <img src="panda-clipart.jpg" alt="panda clipart"></img>
            

        
        <p>I have some projects to share. 
            Click on the Projects bar to see more! 
        </p>

    </>
)
}
// I thought I was being so smart :( womp womp
export function NavBar(){
  function createLink(title,name){
    return (
      <Link to={"/"+title} onClick={()=>setClicked(title)} className={clicked===title?"bold":""}> {name}</Link>
    )
  }
  let [checked,setChecked]=useState(false);
  let [clicked,setClicked]=useState("home");
  return (

          <nav>
            <button className="toggle-menu" onClick={()=>{
              if (checked){
                setChecked(false);
              } else {
                setChecked(true);
              }
            }}><img className="menu" src="hamburger_menu.png"></img></button>
              <ul className={checked ? "disappear" : ""}>
                <div className="navigation-bar">
                  <li>{createLink("about","About")}</li>
                  <li>{createLink("","Home")}</li>
                  <li>{createLink("projects","Projects")}</li>
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
