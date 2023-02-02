import "../../../index.css";
import { useState } from "react";
import Hamburger from "./Hamburger/Hamburger";
import style from "../../styles";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const [featureMenu, setFeatureMenu] = useState(false);
  const [companyMenu, setCompanyMenu] = useState(false);

  const onClickFeature = () => {
    setFeatureMenu(!featureMenu);
    setCompanyMenu(false);
  };

  const onClickCompany = () => {
    setCompanyMenu(!companyMenu);
    setFeatureMenu(false);
  };

  return (
    <nav className="w-auto lg:w-full" aria-label="Main">
      <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <ul
        className={`${style.navMobile} ${
          style.navDesktop
        } z-40 translate-x-[150%] ${style.transition} duration-300 ${
          isMenuOpen ? "translate-x-0" : ""
        } flex py-[78px] px-[24px] lg:py-[34px] text-mediumGray text-[14px] lg:flex-row gap-4 lg:justify-between flex-col`}
      >
        <div className="flex-col gap-4 flex lg:flex-row  ">
          <li>
            <button
              className="icon-menu flex gap-2 hover:text-almostBlack"
              aria-controls="features-menu"
              aria-expanded={featureMenu}
              onClick={onClickFeature}
            >
              Features
            </button>
            <ul
              className={`${style.submenudesktop} ${
                style.submenumobile
              } invisible flex w-max flex-col gap-4 rounded-md leading-none  lg:-translate-y-[40%] lg:bg-white/95 lg:opacity-0
                    ${
                      featureMenu
                        ? "!visible p-4 pb-0 lg:!translate-y-[3rem] lg:!opacity-100 max-lg:max-h-max"
                        : ""
                    }
                `}
              id="features-menu"
            >
              {[
                ["icon-todo", "Todo List"],
                ["icon-calendar", "Calendar"],
                ["icon-reminder", "Reminders"],
                ["icon-plan", "Planning"],
              ].map(([className, text], key) => (
                <li key={`features-${key}`}>
                  <a
                    href="#"
                    className={`${className} flex gap-4 hover:text-almost-black`}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <button
              className="icon-menu flex gap-2 hover:text-almostBlack"
              aria-controls="features-menu"
              aria-expanded={companyMenu}
              onClick={onClickCompany}
            >
              Company
            </button>
            <ul
              className={`${style.submenudesktop} ${
                style.submenumobile
              } invisible flex w-max flex-col gap-4 rounded-md leading-none  lg:-translate-y-[40%] lg:bg-white/95 lg:opacity-0
                    ${
                      companyMenu
                        ? "!visible p-4 pb-0 lg:!translate-y-[3rem] lg:!opacity-100 max-lg:max-h-max"
                        : ""
                    }
                `}
              id="features-menu"
            >
              {[["History"], ["Our Team"], ["Blog"]].map(([text], key) => (
                <li key={`features-${key}`}>
                  <a href="#" className={`flex gap-4 hover:text-almost-black`}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <li>
            <a href="#" className="">
              Log in
            </a>
          </li>
          <li>
            <a
              href="#"
              className="border-2 rounded-md border-mediumGray py-2 px-2 hover:border-almostBlack hover:text-almostBlack"
            >
              Register
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
