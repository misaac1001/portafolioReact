import React, { useState } from 'react';

const HamburguerMenu = ({ isOpen, toggleMenu }) => (
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

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Mariana Isaac
          </a>
        </div>
        <div className="md:hidden">
          <HamburguerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <nav className={`md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center ${isMenuOpen ? 'block' : 'hidden'}`} style={{ position: 'absolute', top: '70px', left: '50%', transform: 'translateX(-50%)' }}>
          <a href="#projects" className="mr-5 hover:text-white">
            Mis trabajos
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Habilidades blandas
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;