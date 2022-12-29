import { Title, SectionWrapper } from "../components";
import { VIEW_SECTIONS } from "../constants/viewConstants";
import { HEADER_HEIGHT_REMS } from "../Header";

const ExperienceSection = () => {
  return (
    <SectionWrapper>
      <div
        className={`scroll-mt-${HEADER_HEIGHT_REMS} h-section snap-start bg-slate-400`}
        id={VIEW_SECTIONS.EXPERIENCE}
      >
        <Title title="Experience" />
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
