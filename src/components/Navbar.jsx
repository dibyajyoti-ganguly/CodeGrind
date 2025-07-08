import code from "../assets/navbar.png";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full z-50 h-[75px] ${
        theme === "dark"
          ? "bg-zinc-900"
          : "bg-white shadow-xs shadow-slate-300"
      } flex items-center px-36`}
    >
      <img src={code} alt="code" className="w-10 mr-3" />
      <h1
        className={`text-2xl ${
          theme === "dark" ? "text-white" : "text-zinc-900"
        } font-bold tracking-wide`}
      >
        CodeGrind
      </h1>
      <button
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
        className={`ml-auto p-2 rounded-lg ${
          theme === "dark"
            ? "bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
            : "bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        } cursor-pointer`}
      >
        {theme === "dark" ? (
          <FaRegMoon className="text-white w-5 h-5" />
        ) : (
          <LuSun />
        )}
      </button>
    </div>
  );
};

export default Navbar;
