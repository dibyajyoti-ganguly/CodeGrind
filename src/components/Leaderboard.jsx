// Updated Leaderboard.jsx
import PerformerBanner from "./PerformerBanner";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Leaderboard = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  if (data !== null) {
    const leaderboard = data;

    return (
      <div
        className={`flex-col ${
          theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
        } mt-6 sm:mt-8 rounded-2xl shadow-[0_0_0_0.3px_rgba(161,161,170,0.8)] overflow-hidden`}
      >
        {/* Header - Hidden on mobile, shown on desktop */}
        <div
          className={`hidden sm:grid grid-cols-[60px_60px_1fr_120px_150px_100px] gap-4 items-center h-12 mb-1.5 text-sm px-4 sm:px-8 lg:px-20 ${
            theme === "dark" ? "text-zinc-400" : "text-zinc-700"
          } font-bold`}
        >
          <div className="text-center">#</div>
          <div></div> {/* Space for image */}
          <div>Developer</div>
          <div className="text-center">Time Today</div>
          <div className="text-center">Languages</div>
          <div className="text-center">Status</div>
        </div>

        {/* Mobile Header */}
        <div
          className={`flex sm:hidden items-center h-10 mb-1.5 text-xs px-4 ${
            theme === "dark" ? "text-zinc-400" : "text-zinc-700"
          } font-bold`}
        >
          <p className="w-8">#</p>
          <p className="flex-1">Developer</p>
          <p className="w-16 text-center">Time</p>
          <p className="w-16 text-center">Status</p>
        </div>

        {leaderboard.map((user, index) => {
          return <PerformerBanner key={index} details={user} rank={index} />;
        })}
      </div>
    );
  }
};

export default Leaderboard;
