import code from "../assets/navbar.png";
import moon from "../assets/moon.png";

const Navbar = () => {
  return (
    <div className="h-[75px] bg-zinc-900 flex items-center px-36">
      <img src={code} alt="code" className="w-10 mr-3" />
      <h1 className="text-2xl text-white font-bold tracking-wider">
        CodeGrind
      </h1>
      <button className="ml-auto p-2 rounded-xl bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] cursor-pointer">
        <img src={moon} alt="dark-mode" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Navbar;
