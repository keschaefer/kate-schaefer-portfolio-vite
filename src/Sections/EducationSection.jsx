import { Title } from "../components";
import { VIEW_SECTIONS } from "../constants/viewConstants";
import { HEADER_HEIGHT_REMS } from "../Header";

const EductionItem = ({ children }) => {
  return <div className="pt-2">{children}</div>;
};

const EducationSection = () => {
  return (
    <>
      <div className={`snap-start scroll-mt-${HEADER_HEIGHT_REMS}`}>
        <div className="bg-mountains bg-no-repeat bg-cover h-image" />
        <div
          className={`h-auto py-8 px-32 bg-yellow-100`}
          id={VIEW_SECTIONS.EDUCATION}
        >
          <Title title="Education" />
          <EductionItem>
            Web Development Immersive | Galvanize | Denver, CO | Feb 2019 M.A.{" "}
          </EductionItem>
          <EductionItem>
            Museum Studies | Newcastle University | United Kingdom | Dec 2012
          </EductionItem>
          <EductionItem>
            B.S. Business Administration | Colorado State University | Fort
            Collins, CO | May 2006
          </EductionItem>
        </div>
      </div>
    </>
  );
};

export default EducationSection;
