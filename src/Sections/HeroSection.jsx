import { VIEW_SECTIONS } from "../constants";
import { HEADER_HEIGHT_REMS } from "../Header";

const HeroSection = () => {
  return (
    <div
      className={`scroll-mt-${HEADER_HEIGHT_REMS} snap-start h-section bg-gradient-to-r from-green-500 to-blue-500 flex justify-center items-center`}
      id={VIEW_SECTIONS.HERO}
    >
      <div className="flex flex-col justify-center items-center">
        <div>Kate Schaefer</div>
        <div>Senior Software Engineer</div>
      </div>
    </div>
  );
};

export default HeroSection;
