export default function Hero({ isActive }) {
  return (
    <div className={`${isActive ? "bg-black text-white " : ""}`}>
      <div className=" lg:border-x lg:border-b lg:mx-14 lg:flex h-[60vh] lg:h-[100vh]">
        <div className="pt-10 lg:pt-0 md:pt-20 info flex flex-col justify-center items-center lg:w-6/10 lg:pl-24 xl:pl-24  lg:justify-center lg:items-start">
          <h2 className="text-3xl text-center lg:text-6xl lg:text-start 2xl:text-8xl font-extrabold">
            App & Software Developer
          </h2>
          <p className="my-3 lg:my-7 text-md 2xl:text-xl text-zinc-500">
            LAUD MULLER
          </p>
          <button
            className={`${
              isActive ? "bg-zinc-800" : ""
            } bg-zinc-300 hover:bg-orange-600 px-9 2xl:px-14 py-2.5 2xl:py-4 `}
          >
            Contact
          </button>
        </div>
        <div className="image w-4/10 "></div>
      </div>
    </div>
  );
}
