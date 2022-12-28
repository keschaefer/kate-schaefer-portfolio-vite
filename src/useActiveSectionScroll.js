import { useState, useEffect } from "react";

export const useActiveSectionScroll = (sections) => {
  const [windowScrollPosition, setWindowScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const getScrollPosition = () => setWindowScrollPosition(window.scrollY);

    window.addEventListener("scroll", getScrollPosition);

    return () => window.removeEventListener("scroll", getScrollPosition);
  }, []);

  useEffect(() => {
    const viewSections = sections.map((section) =>
      document.getElementById(section)
    );

    viewSections.forEach(
      (section) => {
        if (section) {
          const sectionTop = section.offsetTop;

          if (windowScrollPosition >= sectionTop - 250) {
            setActiveSection(section.getAttribute("id"));
          }
        }
      },
      [windowScrollPosition, sections]
    );
  });

  return activeSection;
};
