import { useActiveSectionScroll } from "./useActiveSectionScroll";
import { VIEW_SECTIONS } from "./constants";

export const HEADER_HEIGHT_REMS = 12;

const Link = ({ text, isActive, href }) => {
  return (
    <a
      href={href}
      className={`px-4 my-2 border-b-4 ${
        isActive ? "border-blue-200" : "border-transparent"
      }`}
    >
      {text}
    </a>
  );
};

const Header = () => {
  const sections = Object.values(VIEW_SECTIONS);
  const activeSection = useActiveSectionScroll(sections);

  return (
    <div
      className={`h-${HEADER_HEIGHT_REMS} sticky top-0 z-10 bg-white flex justify-center items-end w-full`}
    >
      <Link
        text="about"
        isActive={activeSection === VIEW_SECTIONS.ABOUT}
        href={`#${VIEW_SECTIONS.ABOUT}`}
      />
      <Link
        text="experience"
        isActive={activeSection === VIEW_SECTIONS.EXPERIENCE}
        href={`#${VIEW_SECTIONS.EXPERIENCE}`}
      />
      <Link
        text="work"
        isActive={activeSection === VIEW_SECTIONS.WORK}
        href={`#${VIEW_SECTIONS.WORK}`}
      />
      <Link
        text="education"
        isActive={activeSection === VIEW_SECTIONS.EDUCATION}
        href={`#${VIEW_SECTIONS.EDUCATION}`}
      />
    </div>
  );
};

export default Header;
