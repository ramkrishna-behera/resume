import logo from './logo.svg';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
//import './Style.css';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
