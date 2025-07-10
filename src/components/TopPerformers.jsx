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
        <div className="flex sm:flex-row items-start sm:items-center justify-between mt-7 font-inter mx-4 sm:mx-8 lg:mx-36 gap-2 sm:gap-0">
          <p
            className={`${
              theme === "dark" ? "text-white" : "text-zinc-950"
            } text-xl sm:text-2xl font-black tracking-wide`}
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

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-8 mx-4 sm:mx-8 lg:mx-36">
          {top_performers.map((top_performer, index) => {
            return (
              <div key={index} className="w-full sm:w-auto">
                <PerformerCard details={top_performer} rank={index} />
              </div>
            );
          })}
        </div>

        {/* Trophy images - hidden on mobile for cleaner look */}
        <img
          src={gold}
          alt="trophy"
          className="absolute z-10 w-8 sm:w-9 top-10 sm:top-12 left-[45%] sm:left-[521px] hidden sm:block"
        />
        <img
          src={silver}
          alt="trophy"
          className="absolute z-10 w-8 sm:w-9 top-10 sm:top-12 left-[55%] sm:left-[940px] hidden lg:block"
        />
        <img
          src={bronze}
          alt="trophy"
          className="absolute z-10 w-8 sm:w-9 top-10 sm:top-12 right-[15%] sm:right-[127px] hidden lg:block"
        />
      </div>
    );
  }
};

export default TopPerformers;
