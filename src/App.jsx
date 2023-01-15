import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  WorkSection,
} from "./sections";

const App = () => {
  return (
    <div className="snap-y">
      <Header />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      {/* <WorkSection /> */}
      <Footer />
    </div>
  );
};

export default App;
