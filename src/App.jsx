import "./App.css";
import Header from "./Header";
import { AboutSection, ExperienceSection, WorkSection } from "./Sections";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
    </div>
  );
};

export default App;
