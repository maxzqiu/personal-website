import markdownParser from "./markdownParser";
import CURSORBALLS from "../public/post/cursor-balls.md?raw";
import MINESWEEPER from "../public/post/minesweeper.md?raw";
import SPINNER from "../public/post/spinner.md?raw";
import QUIZGAME from "../public/post/quiz-game.md?raw";
import TODOLIST from "../public/post/to-do-list.md?raw";
//import HOLIDAYS from "../public/post/holidays.md?raw";

const directory={
    "/projects/cursor-balls":markdownParser(CURSORBALLS),
    "/projects/minesweeper":markdownParser(MINESWEEPER),
    "/projects/spinner":markdownParser(SPINNER),
    "/projects/quiz-game":markdownParser(QUIZGAME),
    "/projects/to-do-list":markdownParser(TODOLIST),
    
};

export default directory;