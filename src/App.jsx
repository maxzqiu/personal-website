import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function ProjectBubble({ name, link, text, tags }) {
  let [enabled, setEnabled] = useState(false);

  return (
    <div className="project-bubble">
      <h2>
        <button className="button" onClick={() => setEnabled(!enabled)}>
          {name}
        </button>
      </h2>

      <div className={enabled ? "" : "collapse"}>
        <a href={link}>{link}</a>
        <div className="text">
          <img src="panda-clipart.jpg"></img>
          <p>{text}</p>
        </div>

        <div className="tags">
          {tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
          <button>Click to see more details! </button>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <>
      <h3>My Projects:</h3>
      <ol className="projects">
        <li>
          <ProjectBubble
            name="Cursor Balls"
            link="https://cursor-balls.vercel.app"
            text="This website allows you to click around and make fireworks!"
            tags={["one", "two", "three"]}
          />
        </li>
        <li>
          <ProjectBubble
            name="To Do List"
            link="https://children-generation.vercel.app"
            text="Make a to do list to keep track of your homework or your chores!  "
            tags={["one", "two", "three"]}
          />
        </li>
        <li>
          <ProjectBubble
            name="Quiz Game"
            link="https://quiz-game-omega-two.vercel.app"
            text="Have fun with some trivia questions!  "
            tags={["one", "two", "three"]}
          />
        </li>
        <li>
          <ProjectBubble
            name="Spinner"
            link="https://spinner-silk.vercel.app"
            text="Solve a dispute between you and your friend using this spinner instead of rock-paper-scissors! "
            tags={["one", "two", "three"]}
          />
        </li>
        <li>
          <ProjectBubble
            name="Minesweeper"
            link="https://minesweeper-pied-one.vercel.app"
            text="Don't click on a mine!  "
            tags={["one", "two", "three"]}
          />
        </li>
      </ol>
    </>
  );
}

export function Home() {
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

      <p>
        I have some projects to share. Click on the Projects bar to see more!
      </p>
    </>
  );
}
// I thought I was being so smart :( womp womp
export function NavBar() {
  let [checked, setChecked] = useState(false);
  let [clicked, setClicked] = useState("home");
  function createLink(title, name) {
    return (
      <Link
        to={"/" + title}
        onClick={() => setClicked(title)}
        className={clicked === title ? "bold" : ""}
      >
        {" "}
        {name}
      </Link>
    );
  }

  return (
    <nav>
      <button
        className="toggle-menu"
        onClick={() => {
          if (checked) {
            setChecked(false);
          } else {
            setChecked(true);
          }
        }}
      >
        <img className="menu" src="hamburger_menu.png"></img>
      </button>
      <ul className={checked ? "disappear" : ""}>
        <div className="navigation-bar">
          <li>{createLink("about", "About")}</li>
          <li>{createLink("", "Home")}</li>
          <li>{createLink("projects", "Projects")}</li>
        </div>
      </ul>
    </nav>
  );
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
  );
}

export default App;
