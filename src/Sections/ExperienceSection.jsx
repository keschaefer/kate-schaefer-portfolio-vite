import Title from "../Title";
import { VIEW_SECTIONS } from "../constants";
import { HEADER_HEIGHT_REMS } from "../Header";

const ExperienceSection = () => {
  return (
    <div
      className={`scroll-mt-${HEADER_HEIGHT_REMS} h-section bg-slate-400`}
      id={VIEW_SECTIONS.EXPERIENCE}
    >
      <Title title="Experience" />
    </div>
  );
};

export default ExperienceSection;
