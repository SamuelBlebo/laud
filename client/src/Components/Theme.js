import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Theme({ isActive, onToggleDarkMode }) {
  return (
    <div className="theme ">
      <div className=" absolute bottom-3 right-3 rounded-lg w-9 h-9 bg-blue-500 flex justify-center lg:hidden xl:hidden 2xl:hidden">
        <button onClick={onToggleDarkMode}>
          {isActive ? (
            <SunIcon className="inactive w-5 h-5" />
          ) : (
            <MoonIcon className="active w-5 h-5" />
          )}
        </button>
        {/* <MoonIcon className="w-5 h-5" />
          <SunIcon className="w-5 h-5" /> */}
      </div>
    </div>
  );
}
