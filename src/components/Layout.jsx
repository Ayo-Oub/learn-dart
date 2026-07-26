import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="app-shell">
      <Topbar />
      <main className="content-grid">
        <Sidebar />
        <section className="lesson-view" aria-live="polite">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
}
