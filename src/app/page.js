import Sidebar from "./components/sidebar/Sidebar";
import Benefits from "./sections/begin/Begin";
import SiteContent from "./sections/benefits/Benefits";
import Contact from "./sections/contact/Contact";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Benefits />
      <SiteContent />
      <Contact />
    </main>
  );
}
