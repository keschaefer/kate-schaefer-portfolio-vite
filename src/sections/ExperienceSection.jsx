import { Title } from "../components";
import { VIEW_SECTIONS } from "../constants/viewConstants";
import { HEADER_HEIGHT_REMS } from "../Header";

const SubTitle = ({ children }) => {
  return <div className="uppercase font-semibold pt-8">{children}</div>;
};

const JobTitle = ({ children }) => {
  return <div className="italic">{children}</div>;
};

const WorkPlace = ({ children }) => {
  return <div className="pt-2">{children}</div>;
};

const EductionItem = ({ children }) => {
  return <div className="pt-2">{children}</div>;
};

const ExperienceSection = () => {
  return (
    <div
      className={`snap-start scroll-mt-${HEADER_HEIGHT_REMS} h-auto w-full flex flex-row pt-10`}
    >
      <div className="bg-hikerMountain w-1/3 shadow-xl shadow-slate-500" />
      <div className={`h-auto py-8 px-10 w-3/4`} id={VIEW_SECTIONS.EXPERIENCE}>
        <Title title="Experience" />
        <SubTitle>Software Work Experience</SubTitle>
        <WorkPlace>Formidable Labs</WorkPlace>
        <JobTitle>Senior Software Engineer // Jan 2022 - present</JobTitle>
        <div className="pl-8 mb-4">
          <li>
            Owner and architect for complex features to segment, filter, and
            display geospatial data including choices around data structure and
            code organization.
          </li>
          <li>
            Coordinated release of new version of current client application
            working across FE, BE, and product teams to bring the new version to
            production.
          </li>
          <li>
            Oversaw Typescript conversion for dedicated portions of application.
          </li>
          <li>
            Implemented and enforced a new style theme in addition to the
            creation of a component library complete with Storybook
            visualization.
          </li>
          <li>
            Lead development of new landing page feature, working with product
            and design to define work, create and manage tickets, and coordinate
            work among the FE team.
          </li>
          <li>
            Lead on investigation and integration of new third party feature
            requiring extensive troubleshooting and coordination with a third
            party provider.
          </li>
        </div>
        <JobTitle>Software Engineer I-IV // March 2019 - Dec 2021</JobTitle>
        <div className="pl-8">
          <li>
            Contributed to an internal dashboard tool for a small group of
            senior level users at Starbucks as well as a dashboard for the users
            of a large-scale, fulfillment solutions application.
          </li>
          <li>
            Produced search, sorting, and product detail features for a
            biomedical eCommerce site utilized by a global audience.
          </li>
          <SubTitle>Events Work Experience</SubTitle>
          <WorkPlace>American Red Cross of Colorado</WorkPlace>
          <JobTitle>Events Manager // Dec 2016 - Apr 2018</JobTitle>
          <WorkPlace>Seattle Repertory Theatre</WorkPlace>
          <JobTitle>Events Manager // Oct 2014 - May 2016</JobTitle>
          <Title title="Education" />
          <EductionItem>
            Web Development Immersive | Galvanize | Denver, CO | Feb 2019 M.A.
          </EductionItem>
          <EductionItem>
            Museum Studies | Newcastle University | United Kingdom | Dec 2012
          </EductionItem>
          <EductionItem>
            B.S. Business Administration | Colorado State University | Fort
            Collins, CO | May 2006
          </EductionItem>
        </div>

        <div className="mt-8">
          <a
            className=" underline"
            href="https://docs.google.com/document/d/1j5Hd_xq1IlhYpwolGhxI41KC8ciylKP1VwIQC9TMtaI/export?format=pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
