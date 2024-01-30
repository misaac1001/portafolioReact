import "./App.css";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Navbar } from "./component/Navbar";
import Projects from "./component/Projects";
import { Skills } from "./component/Skills";
import { Testimonials } from "./component/Testimonials";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
