import Sidebar from "./components/sidebar/Sidebar";
import Benefits from "./sections/begin/Begin";
import SiteContent from "./sections/benefits/Benefits";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Benefits />
      <SiteContent />
    </main>
  );
}
