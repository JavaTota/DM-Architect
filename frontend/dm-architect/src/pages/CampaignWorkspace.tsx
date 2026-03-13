import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import type { Campaign } from "../types/Campaign";
import { Sidebar } from "../components/Sidebar";
import AiToolsPanel from "../components/AiToolsPanel";
import Topbar from "../components/Topbar";

import Overview from "./subpages/Overview";
import NPCs from "./subpages/NPCs";
import Quests from "./subpages/Quests";
import Sessions from "./subpages/Sessions";
import Locations from "./subpages/Locations";
import Notes from "./subpages/Notes";
import Timeline from "./subpages/Timeline";
import AiAssistant from "./subpages/AiAssistant";

type CampaignDetails = Campaign & {
  tone?: string;
  settingType?: string;
  idea?: string;
  summary?: string;
  villain?: {
    name?: string;
    goal?: string;
    motivation?: string;
    secret?: string;
  };
  startingLocation?: {
    name?: string;
    description?: string;
    importantNPCs?: string[];
    landmarks?: string[];
  };
  firstQuestHook?: string;
};

export default function CampaignWorkspace() {
  const { id } = useParams();

  const [campaign, setCampaign] = useState<CampaignDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/campaigns/${id}`);

        if (!res.ok) {
          throw new Error("Campaign not found");
        }

        const data = await res.json();

        setCampaign({
          id: data._id,
          name: data.name,
          theme: data.theme,
          partyLevel: data.partyLevel,
          updatedAt: data.updatedAt,
          tone: data.tone,
          settingType: data.settingType,
          idea: data.idea,
          summary: data.summary,
          villain: data.villain,
          startingLocation: data.startingLocation,
          firstQuestHook: data.firstQuestHook,
        });
      } catch (err) {
        setError("Campaign not found");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCampaign();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
        <h1 className="text-2xl font-bold">Loading campaign...</h1>
      </div>
    );
  }

  if (error || !campaign) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
        <h1 className="text-2xl font-bold">{error || "Campaign not found"}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1225] text-white">
      <div className="mx-auto flex min-h-screen max-w-400 flex-col p-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#101935] shadow-2xl shadow-black/30">
          <Topbar campaign={campaign} />

          <div className="grid min-h-[calc(100vh-5rem)] grid-cols-12">
            <Sidebar />

            <main className="col-span-7 bg-[#111a36] p-5">
              <Routes>
                <Route index element={<Overview campaign={campaign} />} />
                <Route path="overview" element={<Overview campaign={campaign} />} />
                <Route path="npcs" element={<NPCs />} />
                <Route path="quests" element={<Quests />} />
                <Route path="sessions" element={<Sessions />} />
                <Route path="locations" element={<Locations />} />
                <Route path="notes" element={<Notes />} />
                <Route path="timeline" element={<Timeline />} />
                <Route path="ai" element={<AiAssistant />} />
              </Routes>
            </main>

            <AiToolsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}