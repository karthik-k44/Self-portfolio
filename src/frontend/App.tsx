import About from '@/frontend/features/about/About';
import Contact from '@/frontend/features/contact/Contact';
import Experience from '@/frontend/features/experience/Experience';
import Hero from '@/frontend/features/hero/Hero';
import Projects from '@/frontend/features/projects/Projects';
import Shell from '@/frontend/features/shell/Shell';
import Skills from '@/frontend/features/skills/Skills';

function App() {
  return (
    <Shell>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Shell>
  );
}

export default App;
