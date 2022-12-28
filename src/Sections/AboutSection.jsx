import Title from "../Title";
import { VIEW_SECTIONS } from "../constants";

const AboutSection = () => {
  return (
    <div className="h-section bg-slate-200" id={VIEW_SECTIONS.ABOUT}>
      <Title title="About" />
    </div>
  );
};

export default AboutSection;
