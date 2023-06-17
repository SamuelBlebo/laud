export default function Hero({ isActive }) {
  return (
    <div className={`${isActive ? "bg-black text-white " : ""}`}>
      <div className="border-x border-b mx-14 flex h-[100vh]">
        <div className="info w-6/10 pl-14 lg:pl-24 xl:pl-24 flex flex-col justify-center items-start">
          <h2 className="text-7xl xl:text-8xl font-extrabold">
            App & Software Developer
          </h2>
          <p className="my-7 text-md xl:text-xl text-zinc-500">LAUD MULLER</p>
          <button
            className={`${
              isActive ? "bg-zinc-800" : ""
            } bg-zinc-300 hover:bg-orange-600 px-9 xl:px-14 py-2.5 xl:py-4 `}
          >
            Contact
          </button>
        </div>
        <div className="image w-4/10 "></div>
      </div>
    </div>
  );
}
