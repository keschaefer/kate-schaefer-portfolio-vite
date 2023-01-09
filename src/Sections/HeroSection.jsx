import { VIEW_SECTIONS } from "../constants/viewConstants";
import { HEADER_HEIGHT_REMS } from "../Header";

const HeroSection = () => {
  return (
    <div
      className={`scroll-mt-${HEADER_HEIGHT_REMS} snap-start h-section bg-hero3 bg-no-repeat bg-cover flex justify-center items-center`}
      id={VIEW_SECTIONS.HERO}
    >
      <div className="flex flex-col justify-center items-center text-white text-xl">
        <p>Kate Schaefer</p>
        <p>Senior Front End </p>
        <p>Software Engineer</p>
      </div>
    </div>
  );
};

export default HeroSection;
