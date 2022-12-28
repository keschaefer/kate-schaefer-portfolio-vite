import Title from "../Title";
import { VIEW_SECTIONS } from "../constants";
import { HEADER_HEIGHT_REMS } from "../Header";

const EducationSection = () => {
  return (
    <div
      className={`scroll-mt-${HEADER_HEIGHT_REMS} h-section bg-slate-800`}
      id={VIEW_SECTIONS.EDUCATION}
    >
      <Title title="Education" />
    </div>
  );
};

export default EducationSection;
