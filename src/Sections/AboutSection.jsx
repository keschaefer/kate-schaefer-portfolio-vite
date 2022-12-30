import { Title, SectionWrapper } from "../components";
import { VIEW_SECTIONS } from "../constants/viewConstants";
import { HEADER_HEIGHT_REMS } from "../Header";

const AboutSection = () => {
  return (
    <div
      className={`scroll-mt-${HEADER_HEIGHT_REMS} h-auto py-8 px-32 snap-start bg-green-100`}
      id={VIEW_SECTIONS.ABOUT}
    >
      <Title title="About" />
      <p className="pt-4">
        Hello! I'm Kate, a front-end focused developer who specializes in
        writing web applications in React and TypeScript with all the assorted
        fixings of the Javascript ecosystem. I came to software development via
        a string of varied careers including most recently, non-profit
        fundraising work and museum-centric jobs. It’s been a winding path with
        each experience along the way providing insights and skills for how to
        work best on any team, including of course, a team that writes software.
      </p>
      <p className="pt-4">
        I love working on projects that visualize data, particularly geospatial
        data. There is something deeply satisfying about taking table of data
        and voila, seeing it rendered orderly on a map.
      </p>
    </div>
  );
};

export default AboutSection;
