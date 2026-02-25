import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-space-black flex flex-col relative selection:bg-cyber-red/30">
      {/* Ambient aurora glow + noise texture */}
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      <div className="hidden md:block z-[100]">
        <Cursor />
      </div>

      <Navbar />

      <main className="flex-grow relative z-[2]">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-[#050508] py-8 text-center text-sm text-gray-500 relative z-10 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Saintgits Cyber Security Club. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-cyber-blue cursor-pointer transition-colors">
              GitHub
            </span>
            <span className="hover:text-cyber-purple cursor-pointer transition-colors">
              Report Vulnerability
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
