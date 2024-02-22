import "./App.css";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import Projects from "./component/Projects";
import { Skills } from "./component/Skills";
import { Navbar } from "./component/navbar/Navbar.jsx";


function App() {
  return (
    <main className="text-gray-400 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
