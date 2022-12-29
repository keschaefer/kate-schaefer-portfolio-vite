import { Title, SectionWrapper } from "../components";
import { VIEW_SECTIONS } from "../constants/viewConstants";
import { HEADER_HEIGHT_REMS } from "../Header";

const EducationSection = () => {
  return (
    <SectionWrapper>
      <div
        className={`scroll-mt-${HEADER_HEIGHT_REMS} snap-start h-section bg-slate-800`}
        id={VIEW_SECTIONS.EDUCATION}
      >
        <Title title="Education" />
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;
