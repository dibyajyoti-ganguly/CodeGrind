import Navbar from "./components/Navbar";
import TopCoder from "./components/TopCoder";
import TopPerformers from "./components/TopPerformers";
import BoardContainer from "./components/Boardcontainer";
import { createContext, useState } from "react";
import useFetch from "./utils/useFetch";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const data = useFetch();

  if (data != null) {
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
          <TopCoder data={data[0]} />
          <hr
            className={`mx-36 ${
              theme === "dark"
                ? "shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                : "shadow-[0_0_0_1px_rgba(0,0,0,0.1)] opacity-10"
            } `}
          />
          <TopPerformers data={data.slice(1, 4)} />
          <BoardContainer data={data.slice(4)} />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContext };
export default App;
