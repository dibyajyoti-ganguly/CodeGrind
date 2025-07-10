import { FaUserGroup } from "react-icons/fa6";
import Leaderboard from "./Leaderboard";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Boardcontainer = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="text-white mt-6 sm:mt-8 pb-6 sm:pb-8 mx-4 sm:mx-8 lg:mx-36">
      <div className="flex sm:flex-row justify-between items-center sm:items-center gap-2 sm:gap-0">
        <p
          className={`text-xl sm:text-2xl font-black ${
            theme === "dark" ? "" : "text-zinc-950"
          } tracking-wide`}
        >
          Full Leaderboard
        </p>
        <p
          className={`flex items-center gap-2 ${
            theme == "dark" ? "text-zinc-400" : "text-zinc-700 font-semibold"
          } text-sm`}
        >
          <FaUserGroup /> Ranks 5 - 20
        </p>
      </div>
      <Leaderboard data={data} />
    </div>
  );
};

export default Boardcontainer;
