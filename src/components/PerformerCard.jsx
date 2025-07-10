// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useContext } from "react";
import { ThemeContext } from "../App";

const PerformerCard = (props) => {
  const { theme } = useContext(ThemeContext);
  const rank = props.rank;
  const { name, image, totalTimeToday, languageWiseTime, isOnline } =
    props.details;

  const shadowClass =
    rank === 0
      ? "shadow-[0_0_0_0.5px_rgba(234,179,8,0.8)]"
      : rank === 1
      ? "shadow-[0_0_0_0.5px_rgba(161,161,170,0.8)]"
      : rank === 2
      ? "shadow-[0_0_0_0.5px_rgba(255,255,255,0.3)]"
      : ""; // fallback: no shadow

  const hours = Math.floor(totalTimeToday / 3600);
  const minutes = Math.floor((totalTimeToday % 3600) / 60);

  const sorted = Object.entries(languageWiseTime).sort((a, b) => b[1] - a[1]);

  const otherCount = sorted.length - 2;

  const status = isOnline ? "Online" : "Offline";

  return (
    <motion.div
      whileHover={{ y: window.innerWidth >= 1024 ? -10 : 0 }} // Only animate on desktop
      className={`relative ${
        theme === "dark" ? "bg-zinc-800" : "bg-white"
      } text-white w-[360px] sm:w-[360px] lg:w-[390px] h-[240px] sm:h-[260px] rounded-2xl mx-auto p-4 sm:p-6 border border-transparent font-inter ${shadowClass} lg:hover:-translate-y-2 transition-transform duration-300`}
    >
      <div className="flex items-center gap-3 sm:gap-5">
        <motion.img
          whileTap={{ scale: 0.8 }}
          src={image}
          alt="dp"
          className="w-12 sm:w-16 rounded-2xl"
        />
        <p
          className={`font-black ${
            theme === "dark" ? "" : "text-zinc-950"
          } text-base sm:text-lg`}
        >
          {name}
        </p>
      </div>
      <br />
      <div className="flex items-center justify-between text-sm text-zinc-400 font-bold">
        <p className="text-xs text-zinc-400 mb-2">Time Today</p>
        <p className={`${isOnline ? "text-green-400" : ""}`}>{status}</p>
      </div>
      <p className="text-violet-500 text-xl sm:text-2xl font-extrabold mb-3">
        {hours} h {minutes} m
      </p>
      <p className="text-xs text-zinc-400 mb-3.5">Languages</p>
      <ul className="flex text-xs font-bold gap-4 sm:gap-7 text-zinc-500 ml-2 sm:ml-4">
        <li className="text-violet-500">{sorted[0][0]}</li>
        <li className="text-violet-400">{sorted[1][0]}</li>
        {otherCount ? <li>+{otherCount} more</li> : ""}
      </ul>
    </motion.div>
  );
};

export default PerformerCard;
