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
  const topTwoLanguages = sorted.slice(0, 2).map((item) => item[0]);

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
        className={`relative ${
          theme === "dark" ? "bg-zinc-800" : "bg-white"
        } min-h-[96px] sm:h-24 px-4 sm:px-8 lg:px-20 py-3 sm:py-0 font-inter ${
          rank === 15 ? "rounded-b-2xl" : ""
        }`}
      >
        {/* Mobile Layout */}
        <div className="flex sm:hidden flex-col h-full justify-center">
          <div className="flex w-full items-center justify-between mb-2">
            <div className="flex items-center">
              <button
                className={`w-8 h-8 pt-0.5 ${
                  theme === "dark"
                    ? "bg-zinc-950 opacity-50 text-white"
                    : "bg-zinc-200 text-black opacity-80"
                } rounded-lg font-bold text-sm`}
              >
                {rank + 5}
              </button>
              <img
                src={image}
                alt="dp"
                className="w-10 h-10 ml-3 mr-2 rounded-2xl"
              />
              <p
                className={`font-bold text-sm ${
                  theme === "dark" ? "" : "text-zinc-950"
                }`}
              >
                {name}
              </p>
            </div>
            <p
              className={`${
                isOnline ? "text-green-400" : ""
              } font-bold text-zinc-400 text-sm`}
            >
              {status}
            </p>
          </div>

          {/* Mobile Time and Languages */}
          <div className="flex w-full justify-between items-center">
            <p className="font-black text-violet-500 tracking-wider text-sm">
              {hours}h {minutes}m
            </p>
            <ul className="flex text-xs font-bold gap-3 text-zinc-500">
              <li className="text-violet-500">{topTwoLanguages[0]}</li>
              <li className="text-violet-400">{topTwoLanguages[1]}</li>
              {otherCount ? <li>+{otherCount} more</li> : ""}
            </ul>
          </div>
        </div>

        {/* Desktop Layout - Using Grid for perfect alignment */}
        <div className="hidden sm:grid grid-cols-[60px_60px_1fr_120px_150px_100px] gap-4 items-center h-full">
          <div className="flex justify-center">
            <button
              className={`w-9 h-9 pt-0.5 ${
                theme === "dark"
                  ? "bg-zinc-950 opacity-50 text-white"
                  : "bg-zinc-200 text-black opacity-80"
              } rounded-lg font-bold`}
            >
              {rank + 5}
            </button>
          </div>

          <div className="flex justify-center">
            <img src={image} alt="dp" className="w-12 h-12 rounded-2xl" />
          </div>

          <div
            className={`font-bold ${theme === "dark" ? "" : "text-zinc-950"}`}
          >
            {name}
          </div>

          <div className="text-center">
            <p className="font-black text-violet-500 tracking-wider">
              {hours}h {minutes}m
            </p>
          </div>

          <div className="text-center">
            <ul className="flex text-xs font-bold gap-2 text-zinc-500 justify-center flex-wrap">
              <li className="text-violet-500">{topTwoLanguages[0]}</li>
              <li className="text-violet-400">{topTwoLanguages[1]}</li>
              {otherCount ? <li>+{otherCount} more</li> : ""}
            </ul>
          </div>

          <div className="text-center">
            <p
              className={`${
                isOnline ? "text-green-400" : ""
              } font-bold text-zinc-400`}
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformerBanner;
