import "./App.css";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Navbar } from "./component/navbar/Navbar";
import Projects from "./component/Projects";
import { Skills } from "./component/Skills";


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About />
      <Projects id="projects" />
      <Skills />
      <Contact id="contact" />
    </main>
  );
}

export default App;
