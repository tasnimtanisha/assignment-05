import { useState } from 'react';
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 border-b border-gray-100">
      <div className="flex justify-between md:justify-around items-center p-4 px-6 md:px-0 max-w-7xl mx-auto">
        
        <img src={Logo} alt="Logo" className="h-8 object-contain" />

        <ul className="hidden md:flex gap-4 items-center">
          <li className="text-pink-500 cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-pink-500">Technologies</li>
          <li className="cursor-pointer hover:text-pink-500">Projects</li>
          <li className="cursor-pointer hover:text-pink-500">About</li>
          <li className="cursor-pointer hover:text-pink-500">Contact</li>
        </ul>

        <div className="hidden md:flex justify-self-end items-center gap-3">
          <button className="px-2 py-1">Sign In</button>
          <button className="bg-pink-500 text-white px-4 py-1.5 rounded-2xl hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-slate-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
          <ul className="flex flex-col gap-3 pb-4">
            <li className="text-pink-500 font-medium cursor-pointer" onClick={() => setIsOpen(false)}>Home</li>
            <li className="cursor-pointer hover:text-pink-500" onClick={() => setIsOpen(false)}>Technologies</li>
            <li className="cursor-pointer hover:text-pink-500" onClick={() => setIsOpen(false)}>Projects</li>
            <li className="cursor-pointer hover:text-pink-500" onClick={() => setIsOpen(false)}>About</li>
            <li className="cursor-pointer hover:text-pink-500" onClick={() => setIsOpen(false)}>Contact</li>
          </ul>
          
          <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
            <button className="w-full text-center py-1.5 border border-gray-200 rounded-xl">Sign In</button>
            <button className="w-full bg-pink-500 text-white py-1.5 rounded-xl">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;