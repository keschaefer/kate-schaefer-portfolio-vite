import { Title, SectionWrapper } from "../components";
import { VIEW_SECTIONS } from "../constants/viewConstants";
import { HEADER_HEIGHT_REMS } from "../Header";

const WorkSection = () => {
  return (
    <SectionWrapper>
      <div
        className={`scroll-mt-${HEADER_HEIGHT_REMS} snap-start h-section bg-slate-600`}
        id={VIEW_SECTIONS.WORK}
      >
        <Title title="Work" />
      </div>
    </SectionWrapper>
  );
};

export default WorkSection;
