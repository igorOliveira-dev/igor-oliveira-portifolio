import Sidebar from "./components/sidebar/Sidebar";
import AboutMe from "./sections/aboutMe/AboutMe";
import Begin from "./sections/begin/Begin";
import Benefits from "./sections/benefits/Benefits";
import Contact from "./sections/contact/Contact";
import Projects from "./sections/projects/Projects";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Begin />
      <AboutMe />
      <Projects />
      <Benefits />
      <Contact />
    </main>
  );
}
