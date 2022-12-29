import { Title, SectionWrapper } from "../components";
import { VIEW_SECTIONS } from "../constants/viewConstants";
import { HEADER_HEIGHT_REMS } from "../Header";

const AboutSection = () => {
  return (
    <SectionWrapper className="bg-slate-300">
      <div
        className={`scroll-mt-${HEADER_HEIGHT_REMS} snap-start h-section`}
        id={VIEW_SECTIONS.ABOUT}
      >
        <Title title="About" />
        <p>
          Hello! I am a front-end focused developer who specializes in writing
          web applications in React and TypeScript with all the assorted fixings
          of the Javascript ecosystem. I came to software development via a
          string of varied careers including most recently, non-profit
          fundraising work and museum-centric jobs. It’s been a winding path
          with each experience along the way providing insights and skills for
          how to work best on any team, including of course, a team that writes
          software.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
