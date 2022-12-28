import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  HeroSection,
  AboutSection,
  EducationSection,
  ExperienceSection,
  WorkSection,
} from "./Sections";

const App = () => {
  return (
    <div className="snap-x">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <EducationSection />
      <Footer />
    </div>
  );
};

export default App;
