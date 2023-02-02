import { useState } from "react";
import Navbar from "./Header/Navbar/Navbar";
import logo from "../Assets/images/logo.svg";
import style from "./styles";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Clicked!!", isMenuOpen);
    document.body.classList.toggle("lock-scroll");
  };

  return (
    <header className={`${style.container} `}>
      <ul className="flex gap-4 lg:w-full w-auto">
        <li>
          <a href="#" className="mr-[3.875rem]">
            <img
              src={logo}
              alt="Snap log"
              width={83.5}
              height={27}
              className={`mt-[32px]`}
            />
          </a>
        </li>

        <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </ul>
    </header>
  );
}

export default Header;
