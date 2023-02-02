import heroDesktopImage from "../Assets/images/image-hero-desktop.png";
import heroMobileImage from "../Assets/images/image-hero-mobile.png";
import dataBiz from "../Assets/images/client-databiz.svg";
import maker from "../Assets/images/client-maker.svg";
import audioPhile from "../Assets/images/client-audiophile.svg";
import meet from "../Assets/images/client-meet.svg";
import style from "./styles";

function Main() {
  return (
    <main
      className={`mt-[2.8125rem] flex flex-col gap-4  md:flex-row-reverse ${style.containerSm}`}
    >
      <div className="flex-1 ">
        <picture>
          <source
            srcSet={heroDesktopImage}
            type="image/png"
            media="(min-width: 48rem)"
          />
          <img
            src={heroMobileImage}
            aria-hidden="true"
            width={480}
            height={640}
            className=""
          />
        </picture>
      </div>
      <div className="flex-1 px-4 lg:mt-[8rem]  text-center md:text-left relative">
        <h1 className="lg:text-[4rem] font-[700] md:text-[4rem] text-[1.8rem] text-center md:text-left tracking-wide leading-none md:mb-[2rem] mb-[1rem] ">
          <span className="md:block">Make</span> remote work
        </h1>
        <p className="md:w-[445px] md:text-[18px] w-[343px] text-[16px] text-center md:text-left text-mediumGray md:tracking-tight">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button
          type="button"
          className={`md:mt-[2.5rem] mt-[1rem] bg-almostBlack hover:bg-almostWhite hover:text-almostBlack rounded-md py-2 px-4 duration-200 ${style.transition} text-white hover:border-2 hover:border-almostBlack`}
        >
          Learn more
        </button>
        <ul className="flex gap-4 lg:absolute bottom-0 mt-[3rem]  md:justify-between md:gap-4 lg:w-[477.63px]">
          <li>
            <a href="#">
              <img src={dataBiz} alt="Data biz" className="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={audioPhile} alt="Data biz" className="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={meet} alt="Data biz" className="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={maker} alt="Data biz" className="" />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Main;
