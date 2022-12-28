import { useActiveSectionScroll } from "./useActiveSectionScroll";
import { VIEW_SECTIONS } from "./constants";

const Link = ({ text, isActive }) => {
  return (
    <a className={`px-4  ${isActive ? "border-b-4 border-red-500" : ""}`}>
      {text}
    </a>
  );
};

const Header = () => {
  const sections = Object.values(VIEW_SECTIONS);
  const activeSection = useActiveSectionScroll(sections);

  return (
    <div className="h-12 sticky top-0 z-10 bg-white flex justify-center items-end w-full">
      <Link text="about" isActive={activeSection === VIEW_SECTIONS.ABOUT} />
      <Link
        text="eduction"
        isActive={activeSection === VIEW_SECTIONS.EDUCATION}
      />
      <Link
        text="experience"
        isActive={activeSection === VIEW_SECTIONS.EXPERIENCE}
      />
      <Link text="work" isActive={activeSection === VIEW_SECTIONS.WORK} />
    </div>
  );
};

export default Header;
