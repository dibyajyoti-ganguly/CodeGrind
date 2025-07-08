import { FaUserGroup } from "react-icons/fa6";
import Leaderboard from "./Leaderboard";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Boardcontainer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="text-white mt-8 pb-8 mx-36">
      <div className="flex justify-between">
        <p
          className={`text-2xl font-black ${
            theme === "dark" ? "" : "text-zinc-950"
          } tracking-wide`}
        >
          Full Leaderboard
        </p>
        <p className="flex items-center gap-2 text-zinc-400 text-sm">
          <FaUserGroup /> Ranks 5 - 20
        </p>
      </div>
      <Leaderboard />
    </div>
  );
};

export default Boardcontainer;
