import Navbar from "./components/Navbar";
import TopCoder from "./components/TopCoder";
import TopPerformers from "./components/TopPerformers";
import BoardContainer from "./components/Boardcontainer";
import { createContext, useState } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-zinc-950" : "bg-zinc-100"
        } `}
      >
        <div className="w-full flex justify-center items-center h-10 bg-violet-600 font-inter font-semibold text-white tracking-wider">
          Numero uno☝️ Follow -&nbsp;
          <span>
            <a href="https://x.com/dibstwt" className="font-extrabold">
              @dibstwt
            </a>
          </span>
        </div>
        <Navbar />
        <TopCoder />
        <hr
          className={`mx-36 ${
            theme === "dark"
              ? "shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
              : "shadow-[0_0_0_1px_rgba(0,0,0,0.1)] opacity-10"
          } `}
        />
        <TopPerformers />
        <BoardContainer />
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
export default App;
