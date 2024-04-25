import "./App.css";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Navbar } from "./component/navbar/Navbar";
import Projects from "./component/Projects";
import { Skills } from "./component/Skills";
import { SoftSkill } from "./component/SoftSkill";


function App() {
  return (
    <main>
      <Navbar/>
      <About />
      <Projects id="projects" />
      <Skills />
      <SoftSkill/>
      <Contact id="contact" />
    </main>
  );
}

export default App;
