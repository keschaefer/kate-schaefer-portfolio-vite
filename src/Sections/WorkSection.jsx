import Title from "../Title";
import { VIEW_SECTIONS } from "../constants";

const WorkSection = () => {
  return (
    <div className="h-section bg-slate-600" id={VIEW_SECTIONS.WORK}>
      <Title title="Work" />
    </div>
  );
};

export default WorkSection;
