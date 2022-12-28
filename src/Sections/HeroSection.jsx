import { VIEW_SECTIONS } from "../constants";

const HeroSection = () => {
  return (
    <div
      className="h-section bg-gradient-to-r from-green-500 to-blue-500 flex justify-center items-center"
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
