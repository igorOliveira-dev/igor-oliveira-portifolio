import Sidebar from "./components/sidebar/Sidebar";
import Begin from "./sections/begin/Begin";
import SiteContent from "./sections/siteContent/SiteContent";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Begin />
      <SiteContent />
    </main>
  );
}
