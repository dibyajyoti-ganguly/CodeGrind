import code from "../assets/navbar.png";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Navbar = ({ setIsTransitioning }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full z-50 h-[75px] ${
        theme === "dark" ? "bg-zinc-900" : "bg-white shadow-xs shadow-slate-300"
      } flex items-center px-4 sm:px-8 lg:px-36`}
    >
      <img
        src={code}
        alt="code"
        className="w-8 sm:w-10 mr-2 sm:mr-3 flex-shrink-0"
      />
      <h1
        className={`text-xl sm:text-2xl ${
          theme === "dark" ? "text-white" : "text-zinc-900"
        } font-bold tracking-wide truncate`}
      >
        CodeGrind
      </h1>
      <button
        onClick={() => {
          setIsTransitioning(true);
          setTimeout(() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
            setIsTransitioning(false);
          }, 500);
        }}
        className={`ml-auto p-2 rounded-lg ${
          theme === "dark"
            ? "bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
            : "bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        } cursor-pointer flex-shrink-0`}
      >
        {theme === "dark" ? (
          <FaRegMoon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <LuSun className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
