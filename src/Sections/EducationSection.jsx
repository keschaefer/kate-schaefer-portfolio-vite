import Title from "../Title";
import { VIEW_SECTIONS } from "../constants";

const EducationSection = () => {
  return (
    <div className="h-section bg-slate-800" id={VIEW_SECTIONS.EDUCATION}>
      <Title title="Education" />
    </div>
  );
};

export default EducationSection;
