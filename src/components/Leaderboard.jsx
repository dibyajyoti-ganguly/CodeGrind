import useFetch from "../utils/useFetch";
import PerformerBanner from "./PerformerBanner";

const Leaderboard = () => {
  const data = useFetch();
  if (data !== null) {
    const leaderboard = data.slice(4);
    console.log(leaderboard);

    return (
      <div className="flex-col bg-zinc-900 mt-8 rounded-2xl shadow-[0_0_0_0.3px_rgba(161,161,170,0.8)]">
        <div className="flex items-center h-12 text-sm px-20 text-zinc-400 font-bold">
          <p className="ml-3">#</p>
          <p className="ml-[70px]">Developer</p>
          <p className="ml-[362px]">Time Today</p>
          <p className="ml-auto mr-2">Status</p>
        </div>
        {leaderboard.map((user, index) => {
          return <PerformerBanner details={user} rank={index} />;
        })}
      </div>
    );
  }
};

export default Leaderboard;
