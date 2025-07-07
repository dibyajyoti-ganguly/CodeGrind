const PerformerCard = (props) => {
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
    <div
      className={`relative bg-zinc-900 text-white w-[400px] h-[260px] rounded-2xl p-6 border border-transparent font-inter ${shadowClass}`}
    >
      <div className="flex items-center gap-5">
        <img src={image} alt="dp" className="w-16 rounded-2xl" />
        <p className="font-black text-lg">{name}</p>
      </div>
      <br />
      <div className="flex items-center justify-between text-sm text-zinc-400 font-bold">
        <p className="text-xs text-zinc-400 mb-2">Time Today</p>
        <p>{status}</p>
      </div>
      <p className="text-violet-500 text-2xl font-extrabold mb-3">
        {hours} h {minutes} m
      </p>
      <p className="text-xs text-zinc-400 mb-3.5">Languages</p>
      <ul className="flex text-xs font-bold gap-7 text-zinc-500 ml-4">
        <li className="text-violet-500">{sorted[0][0]}</li>
        <li className="text-violet-400">{sorted[1][0]}</li>
        <li>+{otherCount} more</li>
      </ul>
    </div>
  );
};

export default PerformerCard;
