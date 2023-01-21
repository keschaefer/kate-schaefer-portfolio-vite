import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { AboutSection, ExperienceSection, WorkSection } from "./sections";
import { Divider } from "./components";

const App = () => {
  return (
    <div className="snap-y text-xl">
      <Header />
      <AboutSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <WorkSection />
      <Footer />
    </div>
  );
};

export default App;
