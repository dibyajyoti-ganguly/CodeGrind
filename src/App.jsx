import Navbar from "./components/Navbar";
import TopCoder from "./components/TopCoder";
import TopPerformers from "./components/TopPerformers";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="flex justify-center items-center h-10 bg-violet-600 font-inter font-semibold text-white tracking-wider">
        Numero uno☝️ Follow -&nbsp;
        <span>
          <a href="https://x.com/dibstwt" className="font-extrabold">
            @dibstwt
          </a>
        </span>
      </div>
      <Navbar />
      <TopCoder />
      <hr className="mx-36 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
      <TopPerformers />
    </div>
  );
}

export default App;
