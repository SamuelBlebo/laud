export default function About({ isActive }) {
  return (
    <div className={`${isActive ? "bg-black text-white " : ""}pb-20`}>
      <div className="flex flex-col-reverse  lg:border-x lg:border-b lg:mx-14 lg:flex lg:flex-row lg:h-[100vh]">
        <div className="image lg:w-4/10 flex flex-col justify-center items-center pt-20">
          <img
            src="https://fakeimg.pl/800x800?text=:)&font=museo"
            alt="Placeholder"
          />
        </div>
        <div className="px-8 pt-32 lg:pt-0 md:pt-20 info flex flex-col lg:w-6/10 lg:pl-24 xl:pl-24 lg:justify-center lg:items-start">
          <h2 className="text-3xl lg:text-6xl lg:text-start 2xl:text-8xl font-extrabold">
            App & Software Developer
          </h2>
          <h5 className="text-xl font-bold text-zinc-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            magnam quam tempora unde blanditiis!
          </h5>
          <p className="mt-8 mb-20 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            deserunt quis doloremque provident natus, quod quam ad facere nisi
            praesentium incidunt voluptas repudiandae blanditiis ullam quisquam
            nobis asperiores accusamus est! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Magni nisi rerum, vero similique sequi
            harum assumenda dolorum dolore consequuntur cum mollitia
            voluptatibus, odit cupiditate ipsam facere? Ab porro nesciunt quae?
          </p>
          <button
            className={`${
              isActive ? "bg-zinc-800" : ""
            } bg-zinc-300 hover:bg-orange-600 px-9 2xl:px-14 py-2.5 2xl:py-4`}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
