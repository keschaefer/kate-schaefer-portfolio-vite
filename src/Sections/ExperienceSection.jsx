import Title from "../Title";
import { VIEW_SECTIONS } from "../constants";

const ExperienceSection = () => {
  return (
    <div className="h-section bg-slate-400" id={VIEW_SECTIONS.EXPERIENCE}>
      <Title title="Experience" />
    </div>
  );
};

export default ExperienceSection;
