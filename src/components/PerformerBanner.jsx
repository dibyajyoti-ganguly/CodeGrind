import React from "react";

const PerformerBanner = (props) => {
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
        className={`relative flex items-center bg-zinc-800 h-24 px-20 font-inter ${
          rank === 15 ? "rounded-b-2xl" : ""
        }`}
      >
        <button className="bg-black w-9 h-9 pt-0.5 rounded-lg opacity-50 font-bold">
          {rank + 5}
        </button>
        <img
          src={image}
          alt="dp"
          className="w-12 h-12 ml-12 mr-3 rounded-2xl"
        />
        <p className="mr-14 font-bold">{name}</p>
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
      <div className={`w-full ${rank === 15 ? "" : "h-[0.7px] bg-zinc-700"}`} />
    </>
  );
};

export default PerformerBanner;
