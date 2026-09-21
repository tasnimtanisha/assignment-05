import React from 'react';
import Logo from "../assets/logo-text.png";

const Nav= () => {
    return (
        <nav className="flex justify-between items-center p-4" >
      <img src={Logo} alt= "" />
      <ul className="flex justify-center items-center gap-4">
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Sign In</button>
      <button>Sign Up</button>
      </nav>
    );
};

export default Nav;