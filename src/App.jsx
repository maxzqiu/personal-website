import { useState } from "react";
import MarkdownParser from "./markdownParser";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function CreateProjectText({ projectname, link, image, tags, text }) {
  return (
    <div className="project-bubble">
      <h2>{projectname}</h2>

      <div>
        <a href={link}>{link}</a>
        <div className="text">
          <img src={image} alt="image"></img>
          <p>{text}</p>
        </div>

        <div className="tags">
          {tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectBubble({ name, link, text, tags, path }) {
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
          <Link className="link" to={path}>
            Click To See More Details!{" "}
          </Link>
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
            path="/projects/cursor-balls"
          />
        </li>
        <li>
          <ProjectBubble
            name="To Do List"
            link="https://children-generation.vercel.app"
            text="Make a to do list to keep track of your homework or your chores!  "
            tags={["one", "two", "three"]}
            path="/projects/to-do-list"
          />
        </li>
        <li>
          <ProjectBubble
            name="Quiz Game"
            link="https://quiz-game-omega-two.vercel.app"
            text="Have fun with some trivia questions!  "
            tags={["one", "two", "three"]}
            path="/projects/quiz-game"
          />
        </li>
        <li>
          <ProjectBubble
            name="Spinner"
            link="https://spinner-silk.vercel.app"
            text="Solve a dispute between you and your friend using this spinner instead of rock-paper-scissors! "
            tags={["one", "two", "three"]}
            path="/projects/spinner"
          />
        </li>
        <li>
          <ProjectBubble
            name="Minesweeper"
            link="https://minesweeper-pied-one.vercel.app"
            text="Don't click on a mine!  "
            tags={["one", "two", "three"]}
            path="/projects/minesweeper"
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
      <MarkdownParser />

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<p>Nothing here! </p>}></Route>
        <Route
          path="/projects/cursor-balls"
          element={
            <CreateProjectText
              projectname="Cursor Balls"
              link="https://cursor-balls.vercel.app"
              image="panda-clipart.jpg"
              tags={["one", "two", "three"]}
              text="Cursor Balls is a super duper fun game! "
            />
          }
        ></Route>{" "}
        {/*Can change to markdown text later */}
        <Route
          path="/projects/to-do-list"
          element={
            <CreateProjectText
              projectname="To Do List"
              link="https://children-generation.vercel.app"
              image="panda-clipart.jpg"
              tags={["one", "two", "three"]}
              text="Use this To Do List to know what you have to do!"
            ></CreateProjectText>
          }
        ></Route>
        <Route
          path="/projects/quiz-game"
          element={
            <CreateProjectText
              projectname="Quiz Game"
              link="https://quiz-game-omega-two.vercel.app"
              image="panda-clipart.jpg"
              tags={["one", "two", "three"]}
              text="Have some fun with these trivia questions! "
            ></CreateProjectText>
          }
        ></Route>
        <Route
          path="/projects/spinner"
          element={
            <CreateProjectText
              projectname="Spinner"
              link="https://spinner-silk.vercel.app"
              image="panda-clipart.jpg"
              tags={["one", "two", "three"]}
              text="Spin!  "
            ></CreateProjectText>
          }
        ></Route>
        <Route
          path="/projects/minesweeper"
          element={
            <CreateProjectText
              projectname="Minesweeper"
              link="https://minesweeper-pied-one.vercel.app"
              image="panda-clipart.jpg"
              tags={["one", "two", "three"]}
              text="Don't click on the mines!   "
            ></CreateProjectText>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
