import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CampaignWorkspace from "./pages/CampaignWorkspace";
import CreateCampaign from "./pages/CreateCampaign";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/campaign/:id/*" element={<CampaignWorkspace />} />
      <Route path="/create" element={<CreateCampaign />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;