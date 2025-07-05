import useFetch from "../utils/useFetch";

function TopCoder() {
  const data = useFetch();
  if (data != null) {
    console.log(data[0]);

    const { githubUsername, image, languageWiseTime, totalTimeToday } = data[0];

    const hours = Math.floor(totalTimeToday / 3600);
    const minutes = Math.floor((totalTimeToday % 3600) / 60);

    const sorted = Object.entries(languageWiseTime).sort((a, b) => b[1] - a[1]);

    // Remaining count
    const otherCount = sorted.length - 2;

    return (
      <div className="flex gap-7 items-start mx-36 px-5 pt-12 h-52">
        <img
          src={image}
          alt="dp"
          className="w-[92px] rounded-3xl border-4 border-yellow-500"
        />
        <div className="text-white tracking-wide font-inter">
          <p className="text-4xl font-bold mb-5">{githubUsername}</p>
          <p className="text-base font-semibold mb-5">
            Crushing it with{" "}
            <span className="text-violet-600 font-bold">
              {hours}h {minutes}m
            </span>{" "}
            of pure coding today
          </p>
          <ul className="flex text-base font-medium gap-9 text-zinc-500">
            <li className="text-violet-500">{sorted[0][0]}</li>
            <li className="text-violet-400">{sorted[1][0]}</li>
            <li className="font-black">+{otherCount} more</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TopCoder;
