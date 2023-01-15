import { VIEW_SECTIONS } from "../constants/viewConstants";
import { HEADER_HEIGHT_REMS } from "../Header";

const HeroSection = () => {
  return (
    <div
      className={`scroll-mt-${HEADER_HEIGHT_REMS} snap-start h-section bg-dunes bg-no-repeat bg-cover flex justify-center items-start pt-24`}
      id={VIEW_SECTIONS.HERO}
    >
      <div
        className="flex flex-col justify-center items-center w-80 bg-grayBg
       rounded-sm p-8 text-black text-3xl"
      >
        <p>Kate Schaefer</p>
        <p>Senior Front End </p>
        <p>Software Engineer</p>
      </div>
    </div>
  );
};

export default HeroSection;
