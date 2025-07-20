import { useContext } from "react";
import { ThemeContext } from "../App";
import { FaGithub } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, scale } from "motion/react";

function TopCoder({ data }) {
  const { theme } = useContext(ThemeContext);

  const {
    githubUsername,
    twitterUsername,
    name,
    image,
    languageWiseTime,
    totalTimeToday,
    isOnline,
  } = data;

  const hours = Math.floor(totalTimeToday / 3600);
  const minutes = Math.floor((totalTimeToday % 3600) / 60);

  const sorted = Object.entries(languageWiseTime).sort((a, b) => b[1] - a[1]);

  // Remaining count
  const otherCount = sorted.length - 2;

  return (
    <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-8 items-start mx-4 sm:mx-8 lg:mx-36 px-2 sm:px-5 pt-8 lg:pt-12 min-h-[215px]">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full lg:w-auto">
        <div className="relative flex-shrink-0">
          <motion.img
            whileTap={{ scale: 0.8 }}
            src={image}
            alt="dp"
            className="w-[72px] h-[72px] sm:w-[92px] sm:h-[92px] rounded-3xl border-2 border-yellow-500 shadow-[0_0_12px_3px_rgba(234,179,8,0.8)]"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://t4.ftcdn.net/jpg/03/21/43/07/360_F_321430761_qQi0CU9tzI5w1k1vJgdA02LMtXtsXvJE.jpg";
            }}
          />
        </div>

        <div
          className={`${
            theme === "dark" ? "text-white" : "text-zinc-950"
          } tracking-wider font-inter text-center sm:text-left`}
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
            {name}
          </p>
          <p className="text-sm sm:text-base font-semibold mb-3 sm:mb-5">
            Crushing it with{" "}
            <span className="text-violet-600 font-extrabold">
              {hours}h {minutes}m
            </span>{" "}
            of pure coding today
          </p>
          <ul className="flex flex-col mb-3 sm:flex-row text-sm sm:text-base font-bold gap-2 sm:gap-4 lg:gap-9 text-zinc-500">
            <li className="flex items-center justify-center sm:justify-start gap-2 font-extrabold">
              <FaGithub /> @ {githubUsername ? githubUsername : twitterUsername}
            </li>
            <div className="mt-2 sm:mt-0" />

            {sorted[0] && <li className="text-violet-500">{sorted[0][0]}</li>}
            {sorted[1] && <li className="text-violet-400">{sorted[1][0]}</li>}
            {otherCount > 0 && <li>+{otherCount} more</li>}
          </ul>
        </div>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`flex flex-col items-center w-full sm:w-60 lg:ml-auto h-28 sm:h-32 pt-6 sm:pt-7 px-8 sm:px-12 text-sm rounded-2xl ${
          theme === "dark"
            ? "shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
            : "shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        } `}
      >
        <p
          className={`${
            theme === "dark" ? "text-zinc-400" : "text-zinc-700"
          } text-center mb-3`}
        >
          Current Status
        </p>
        <button
          className={`font-semibold w-28 rounded-2xl p-2 bg-[rgba(107,114,128,0.2)] ${
            isOnline ? "text-green-400" : "text-zinc-400"
          }`}
        >
          {isOnline ? "Online" : "Offline"}
        </button>
      </motion.div>
    </div>
  );
}

export default TopCoder;
