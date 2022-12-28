import Title from "../Title";
import { VIEW_SECTIONS } from "../constants";
import { HEADER_HEIGHT_REMS } from "../Header";

const AboutSection = () => {
  return (
    <div
      className={`scroll-mt-${HEADER_HEIGHT_REMS} h-section bg-slate-200`}
      id={VIEW_SECTIONS.ABOUT}
    >
      <Title title="About" />
    </div>
  );
};

export default AboutSection;
