import { GrTrophy } from "react-icons/gr";
import PerformerCard from "../components/PerformerCard";
import gold from "../assets/gold.png";
import silver from "../assets/silver.png";
import bronze from "../assets/bronze.png";
import { useContext } from "react";
import { ThemeContext } from "../App";

const TopPerformers = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  if (data != null) {
    const top_performers = data;
    //console.log(top_performers);

    return (
      <div className="relative">
        <div className="flex items-center justify-between mt-7 font-inter mx-36">
          <p
            className={`${
              theme === "dark" ? "text-white" : "text-zinc-950"
            } text-2xl font-black tracking-wide`}
          >
            Top Performers
          </p>
          <p
            className={`flex items-center gap-2 ${
              theme === "dark" ? "text-zinc-400" : "text-zinc-700"
            } text-sm`}
          >
            <GrTrophy /> Podium finishers
          </p>
        </div>
        <div className="flex items-center gap-6 mt-8 mx-36">
          {top_performers.map((top_performer, index) => {
            return (
              <PerformerCard details={top_performer} key={index} rank={index} />
            );
          })}
        </div>
        <img
          src={gold}
          alt="trophy"
          className="absolute z-10 w-9 top-12 left-[521px]"
        />
        <img
          src={silver}
          alt="trophy"
          className="absolute z-10 w-9 top-12 left-[940px]"
        />
        <img
          src={bronze}
          alt="trophy"
          className="absolute z-10 w-9 top-12 right-[127px]"
        />
      </div>
    );
  }
};

export default TopPerformers;
