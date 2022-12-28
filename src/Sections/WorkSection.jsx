import Title from "../Title";
import { VIEW_SECTIONS } from "../constants";
import { HEADER_HEIGHT_REMS } from "../Header";

const WorkSection = () => {
  return (
    <div
      className={`scroll-mt-${HEADER_HEIGHT_REMS} h-section bg-slate-600`}
      id={VIEW_SECTIONS.WORK}
    >
      <Title title="Work" />
    </div>
  );
};

export default WorkSection;
