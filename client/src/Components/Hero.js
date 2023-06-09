export default function Hero({ isActive }) {
  return (
    <div className={`${isActive ? "bg-black text-white " : ""}`}>
      <div className="h-auto flex flex-col lg:flex-row lg:border-x lg:border-b lg:mx-14">
        <div className="px-8 pt-20 lg:pt-0 md:pt-20 info flex flex-col justify-center items-center lg:w-6/10 lg:pl-24 xl:pl-24 lg:justify-center lg:items-start">
          <h2 className="text-4xl text-center lg:text-6xl lg:text-start 2xl:text-8xl font-extrabold">
            App & Software Developer
          </h2>
          <p className="my-5 text-lg lg:my-7  2xl:text-xl text-zinc-500">
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
        <div className="image lg:w-4/10 mt-32 lg:mt-0  lg:order-last lg:mb-0">
          <img
            src="https://fakeimg.pl/720x920?text=:)&font=museo"
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  );
}
