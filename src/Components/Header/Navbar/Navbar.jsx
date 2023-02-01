import "../../../index.css";
import { useState } from "react";
import Hamburger from "./Hamburger/Hamburger";

const Navbar = ({toggleMenu, isMenuOpen}) => {
  return (
    <nav className="w-auto lg:w-full" aria-label="Main">
      <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
       <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li></li>
        </ul> 
    </nav>
  );
};

export default Navbar;
