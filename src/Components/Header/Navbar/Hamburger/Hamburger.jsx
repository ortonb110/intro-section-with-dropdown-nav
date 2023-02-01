import "../../../../index.css";

function Hamburger({ toggleMenu, isMenuOpen }) {
  return (
    <button
      className={` ${
        isMenuOpen ? "!fixed" : ""
      }  absolute top-5 z-50 right-[32px] h-[1.15rem] flex flex-col justify-between lg:hidden`}
      type="button"
      onClick={toggleMenu}
    >
      <span
        className={` ${
          isMenuOpen ? "translate-y-2 rotate-45 " : ""
        } w-[32px] h-[2px] origin-center bg-almostBlack transition-all ease-in-out duration-500`}
      ></span>
      <span
        className={` ${
          isMenuOpen ? "opacity-0" : ""
        } w-[32px] h-[2px] bg-almostBlack`}
      ></span>
      <span
        className={` ${
          isMenuOpen ? "-translate-y-2 -rotate-45 " : ""
        } w-[32px] h-[2px] origin-center bg-almostBlack transition-all ease-in-out duration-500`}
      ></span>
      <span className="sr-only">Open Menu</span>
    </button>
  );
}

export default Hamburger;
