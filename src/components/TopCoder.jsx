import useFetch from "../utils/useFetch";
import { useContext } from "react";
import { ThemeContext } from "../App";
import crown from "../assets/king_2545603.png";
import { FaGithub } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, scale } from "motion/react";

function TopCoder() {
  const { theme } = useContext(ThemeContext);
  const data = useFetch();
  if (data != null) {
    console.log(data[0]);

    const {
      githubUsername,
      twitterUsername,
      name,
      image,
      languageWiseTime,
      totalTimeToday,
      isOnline,
    } = data[0];

    const hours = Math.floor(totalTimeToday / 3600);
    const minutes = Math.floor((totalTimeToday % 3600) / 60);

    const sorted = Object.entries(languageWiseTime).sort((a, b) => b[1] - a[1]);

    // Remaining count
    const otherCount = sorted.length - 2;

    return (
      <div className="relative flex gap-8 items-start mx-36 px-5 pt-12 h-[215px]">
        <motion.img
          whileTap={{ scale: 0.8 }}
          src={image}
          alt="dp"
          className="w-[92px] h-[92px] rounded-3xl border-2 border-yellow-500 shadow-[0_0_12px_3px_rgba(234,179,8,0.8)]"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://t4.ftcdn.net/jpg/03/21/43/07/360_F_321430761_qQi0CU9tzI5w1k1vJgdA02LMtXtsXvJE.jpg";
          }}
        />
        <img src={crown} className="absolute z-10 w-7 top-8 left-[53px]" />
        <div
          className={`${
            theme === "dark" ? "text-white" : "text-zinc-950"
          } tracking-wider font-inter`}
        >
          <p className="text-4xl font-bold mb-4">{name}</p>
          <p className="text-base font-semibold mb-5">
            Crushing it with{" "}
            <span className="text-violet-600 font-extrabold">
              {hours}h {minutes}m
            </span>{" "}
            of pure coding today
          </p>
          <ul className="flex text-base font-bold gap-9 text-zinc-500">
            <li className="flex items-center gap-2 font-extrabold">
              <FaGithub /> @ {githubUsername ? githubUsername : twitterUsername}
            </li>
            <li className="text-violet-500">{sorted[0][0]}</li>
            <li className="text-violet-400">{sorted[1][0]}</li>
            {otherCount ? <li>+{otherCount} more</li> : ""}
          </ul>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`flex flex-col items-center ml-auto w-60 h-32 pt-7 px-12 text-sm rounded-2xl ${
            theme === "dark"
              ? "shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
              : "shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
          } `}
        >
          <p className="text-zinc-400 w-24 mb-3">Current Status</p>
          <button
            className={`font-semibold w-28 rounded-2xl p-2 bg-[rgba(107,114,128,0.2)] ${
              isOnline ? "text-green-400" : "text-gray-400"
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </button>
        </motion.div>
      </div>
    );
  }
}

export default TopCoder;
