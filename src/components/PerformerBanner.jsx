import { useContext } from "react";
import { ThemeContext } from "../App";

const PerformerBanner = (props) => {
  const { theme } = useContext(ThemeContext);
  const rank = props.rank;
  const { name, image, totalTimeToday, languageWiseTime, isOnline } =
    props.details;

  const hours = Math.floor(totalTimeToday / 3600);
  const minutes = Math.floor((totalTimeToday % 3600) / 60);

  const sorted = Object.entries(languageWiseTime).sort((a, b) => b[1] - a[1]);

  const otherCount = sorted.length - 2;

  const status = isOnline ? "Online" : "Offline";

  return (
    <>
      <div
        className={`w-full h-[0.7px] ${
          theme === "dark" ? "bg-zinc-700" : "bg-zinc-300"
        }`}
      />
      <div
        className={`relative flex items-center ${
          theme === "dark" ? "bg-zinc-800" : "bg-white"
        } h-24 px-20 font-inter ${rank === 15 ? "rounded-b-2xl" : ""}`}
      >
        <button
          className={`bg-black w-9 h-9 pt-0.5 ${
            theme === "dark" ? "bg-zinc-950" : "bg-zinc-200 text-black"
          } rounded-lg opacity-50 font-bold`}
        >
          {rank + 5}
        </button>
        <img
          src={image}
          alt="dp"
          className="w-12 h-12 ml-12 mr-3 rounded-2xl"
        />
        <p
          className={`mr-14 font-bold ${
            theme === "dark" ? "" : "text-zinc-950"
          }`}
        >
          {name}
        </p>
        <p className="absolute z-10 left-[600px] font-black text-violet-500 tracking-wider">
          {hours}h {minutes}m
        </p>
        <ul className="absolute z-10 flex text-xs font-bold gap-7 text-zinc-500 left-[730px]">
          <li className="text-violet-500">{sorted[0][0]}</li>
          <li className="text-violet-400">{sorted[1][0]}</li>
          {otherCount ? <li>+{otherCount} more</li> : ""}
        </ul>
        <p className="ml-auto font-bold text-zinc-400">{status}</p>
      </div>
    </>
  );
};

export default PerformerBanner;
