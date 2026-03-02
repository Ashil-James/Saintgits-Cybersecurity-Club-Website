import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="ops" element={<Home />} />
        <Route path="deployments" element={<Home />} />
        <Route path="leaderboard" element={<Home />} />
        <Route path="team" element={<Home />} />
      </Route>
    </Routes>
  );
}
