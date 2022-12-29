import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  HeroSection,
  AboutSection,
  EducationSection,
  ExperienceSection,
  WorkSection,
} from "./sections";

const App = () => {
  return (
    <div className="snap-y">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      {/* <WorkSection /> */}
      <Footer />
    </div>
  );
};

export default App;
