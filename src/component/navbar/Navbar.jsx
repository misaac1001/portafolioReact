import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Inicio", href: "#Inicio", current: false },
  { name: "Mis trabajos", href: "#projects", current: false },
  { name: "Habilidades", href: "#skills", current: false },
  { name: "Contacto", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-11 w-11 rounded-full"
                    src="https://res.cloudinary.com/daupcpuqs/image/upload/v1707168639/Portafolio/Programmer_-_Blank_Poster_k4a8id.jpg"
                    alt="Logo Hacker"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://res.cloudinary.com/daupcpuqs/image/upload/v1706875738/Portafolio/CV_Mariana_Isaac_-_desarrolladora_ztxr0h.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  ></Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

/* import { useState } from "react";
import "./navbar.css";

const HamburguerMenu = ({ toggleMenu }) => (
  <button onClick={toggleMenu} className="text-white focus:outline-none">
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </button>
);

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-gray-800 md:sticky top-0 z-10 container">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          <div className="title-font font-medium text-white mb-4">
            <a href="#about" className="ml-3 text-xl">
              Mariana Isaac
            </a>
          </div>
          <nav
            className={`absolute top-6 right-0 bg-gray-800 md:flex md:flex-col md:items-center md:justify-between md:w-auto w-full ${
              isMenuOpen ? "hidden" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row">
              <a href="#projects" className="mr-2 md:mr-5 hover:text-white">
                Mis trabajos
              </a>
              <a href="#sk ills" className="mr-2 md:mr-5 hover:text-white">
                Skills
              </a>
              <a href="#testimonials" className="mr-2 md:mr-5 hover:text-white">
                Habilidades blandas
              </a>
            </div>
          </nav>
          <div className="md:hidden absolute top-1, left-1/2 transform -translate-x-2 bg-gray-800 md:flex md:flex-col items-center justify-end w-20 w-full">
            <HamburguerMenu toggleMenu={toggleMenu} />
            <nav
              className={`relative top-full left-1/2 transform -translate-x-1/2 bg-gray-800 md:flex md:flex-col md:items-center md:justify-center md:w-auto w-full ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col md:flex-row  justify-end">
                <a
                  href="#projects"
                  className="mr-2 md:mr-5 text-white hover:underline"
                >
                  Mis trabajos
                </a>
                <a
                  href="#skills"
                  className="mr-2 md:mr-5 text-white hover:underline"
                >
                  Skills
                </a>
                <a
                  href="#testimonials"
                  className="mr-2 md:mr-5 text-white hover:underline"
                >
                  Habilidades blandas
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
 */
