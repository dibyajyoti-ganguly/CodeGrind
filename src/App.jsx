import Navbar from "./components/Navbar";

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
    </div>
  );
}

export default App;
