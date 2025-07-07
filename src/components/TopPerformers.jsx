import { GrTrophy } from "react-icons/gr";
import useFetch from "../utils/useFetch";
import PerformerCard from "../components/PerformerCard";
import gold from "../assets/gold.png";
import silver from "../assets/silver.png";
import bronze from "../assets/bronze.png";

const TopPerformers = () => {
  const data = useFetch();
  if (data != null) {
    const top_performers = data.slice(1, 4);
    console.log(top_performers);

    return (
      <div className="relative">
        <div className="flex items-center justify-between mt-10 font-inter mx-36">
          <p className="text-white text-2xl font-black tracking-wide">
            Top Performers
          </p>
          <p className="flex items-center gap-2 text-zinc-400 text-sm">
            <GrTrophy /> Podium finishers
          </p>
        </div>
        <div className="flex items-center gap-6 mt-8 mx-36">
          {top_performers.map((top_performer, index) => {
            return <PerformerCard details={top_performer} rank={index} />;
          })}
        </div>
        <img
          src={gold}
          alt="trophy"
          className="absolute z-10 w-9 top-12 left-[525px]"
        />
        <img
          src={silver}
          alt="trophy"
          className="absolute z-10 w-9 top-12 left-[950px]"
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
