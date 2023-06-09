import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "../Assets/LogoLaud.png";

export default function Header({ isActive, onToggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`${mobileMenuOpen ? "hidden" : ""}`}>
      <nav
        className={` ${
          isActive ? "dark bg-black text-white" : "bg-white text-gray-900"
        } mx-auto flex max-w-10xl items-center justify-between p-6 lg:px-8 border-b-2 sticky top-0 z-50 sm:static sm:top-auto sm:z-auto`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href=" /#" className="-m-1.5 p-1.5">
            <img className="h-10 w-auto" src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className={`${isActive ? "text-white" : "text-black"} h-6 w-6`}
              aria-hidden="true"
            />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <a
            href=" /#"
            className="text-sm font-semibold leading-6 hover:text-orange-600 "
          >
            Home
          </a>
          <a
            href=" /#"
            className="text-sm font-semibold leading-6 hover:text-orange-600"
          >
            About
          </a>
          <a
            href=" /#"
            className="text-sm font-semibold leading-6 hover:text-orange-600"
          >
            Services
          </a>
          <a
            href=" /#"
            className="text-sm font-semibold leading-6 hover:text-orange-600"
          >
            Portfolio
          </a>
          <a
            href=" /#"
            className="text-sm font-semibold leading-6 hover:text-orange-600"
          >
            Blog
          </a>
          <a
            href=" /#"
            className="text-sm font-semibold leading-6 hover:text-orange-600 "
          >
            Contact
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        {/* Mobile Menu And Icon */}
        <Dialog.Panel className=" fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href=" /#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href=" /#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href=" /#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href=" /#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href=" /#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Portfolio
                </a>
                <a
                  href=" /#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
                <a
                  href=" /#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href=" /#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
