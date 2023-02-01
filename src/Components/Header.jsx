import { useState } from "react";
import Navbar from "./Header/Navbar/Navbar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Clicked!!", isMenuOpen);
    document.body.classList.toggle("lock-scroll");
  };

  return (
    <header>
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
}

export default Header;
