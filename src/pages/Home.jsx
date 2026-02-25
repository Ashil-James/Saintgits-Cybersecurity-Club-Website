import Hero from "../features/Hero";
import AboutTerminal from "../features/AboutTerminal";
import FocusAreas from "../features/FocusAreas";
import Services from "../features/Services";
import Events from "../features/Events";
import Leaderboard from "../features/Leaderboard";
import Team from "../features/Team";

export default function Home() {
  return (
    <div className="flex flex-col pb-20">
      <div id="home">
        <Hero />
      </div>
      <AboutTerminal />
      <FocusAreas />
      <Services />
      <Events />
      <Leaderboard />
      <Team />
    </div>
  );
}

