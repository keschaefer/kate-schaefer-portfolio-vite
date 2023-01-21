import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { AboutSection, ExperienceSection, WorkSection } from "./sections";

const App = () => {
  return (
    <div className="snap-y text-xl">
      <Header />
      <AboutSection />
      <ExperienceSection />
      {/* <WorkSection /> */}
      <Footer />
    </div>
  );
};

export default App;
