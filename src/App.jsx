/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import TopCoder from "./components/TopCoder";
import TopPerformers from "./components/TopPerformers";
import BoardContainer from "./components/Boardcontainer";
import { createContext, useState } from "react";
import useFetch from "./utils/useFetch";
import { AnimatePresence, motion } from "motion/react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const data = useFetch();

  if (data != null) {
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              key="theme-transition"
              className="fixed top-0 left-0 w-full h-full z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "circInOut" }}
              style={{
                backgroundColor: theme === "light" ? "#0f0f0f" : "#f0f0f0",
              }}
            />
          )}
        </AnimatePresence>
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
          <Navbar setIsTransitioning={setIsTransitioning} />
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
