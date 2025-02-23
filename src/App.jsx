import { useState } from "react";
import markdownParser from "./markdownParser";
import CURSORBALLS from "../public/post/cursor-balls.md?raw";
import MINESWEEPER from "../public/post/minesweeper.md?raw";
import SPINNER from "../public/post/spinner.md?raw";
import QUIZGAME from "../public/post/quiz-game.md?raw";
import TODOLIST from "../public/post/to-do-list.md?raw";
import "./App.css";
import directory from "./createDirectory.jsx";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// let directory = {
//   "/projects/cursor-balls":markdownParser(CURSORBALLS),
//   "/projects/minesweeper":markdownParser(MINESWEEPER),
//   "/projects/spinner":markdownParser(SPINNER),
//   "/projects/quiz-game":markdownParser(QUIZGAME),
//   "/projects/to-do-list":markdownParser(TODOLIST),
// };



function Search({ input }) {
  console.log(directory);
  let choices=[];
  console.log(Object.values[directory]);
  for (let i of Object.values(directory)){
    choices.push(i[0].title)
  }
  console.log(choices);
  choices.map((str)=>str.trim());
  
  let keep=choices.filter((str)=>str.includes(input));
  
  keep=keep.map((i,key) => <ProjectBubble text={CURSORBALLS} path="/projects/cursor-balls" key={key} />);
  

  return (
  <>
    {keep}
  </>
  )
}
function CreateProjectText({ text }) {
  text = markdownParser(text);
  let metadata = text[0];
  let content = text[1];
  return (
    <>
      <p>{content}</p>
    </>
  );
}

function ProjectBubble({ text, path }) {
  
  let [enabled, setEnabled] = useState(false);
  text = markdownParser(text);
  let metadata = text[0];

  
  

  return (
    <div className="project-bubble">
      <h2>
        <button className="button" onClick={() => setEnabled(!enabled)}>
          {metadata.title}
        </button>
      </h2>

      <div className={enabled ? "" : "collapse"}>
        <a href={metadata.link}>{metadata.link}</a>
        <div className="text">
          <img src={metadata.image}></img>
          <p>{metadata.summary}</p>
        </div>

        <div className="tags">
          {metadata.tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
          <Link className="link" to={path}>
            Click To See More Details!
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  let [input, setInput] = useState("");
  return (
    <>
      <h3>My Projects:</h3>
      <div className="projects">
        <div className="search">
          <label htmlFor="search">SEARCH: </label>
          <input type="text" onChange={(e) => setInput(e.target.value)}></input>
          <p>Search results will show up here: </p>
          <Search input={input} />
        </div>

        <br></br>
        
      </div>
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
        <Route
          path="/projects/cursor-balls"
          element={<CreateProjectText text={CURSORBALLS} />}
        ></Route>{" "}
        {/*Can change to markdown text later */}
        <Route
          path="/projects/to-do-list"
          element={<CreateProjectText text={TODOLIST}></CreateProjectText>}
        ></Route>
        <Route
          path="/projects/quiz-game"
          element={<CreateProjectText text={QUIZGAME}></CreateProjectText>}
        ></Route>
        <Route
          path="/projects/spinner"
          element={<CreateProjectText text={SPINNER}></CreateProjectText>}
        ></Route>
        <Route
          path="/projects/minesweeper"
          element={<CreateProjectText text={MINESWEEPER}></CreateProjectText>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
