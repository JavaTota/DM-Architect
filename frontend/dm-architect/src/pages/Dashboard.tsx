import CampaignCard from "../components/CampaignCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Campaign = {
  _id: string;
  name: string;
  theme: string;
  partyLevel: number;
  updatedAt: string;
};

export default function Dashboard() {
  const navigate = useNavigate();

  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/campaigns");

        if (!res.ok) {
          throw new Error("Failed to fetch campaigns");
        }

        const data = await res.json();
        setCampaigns(data);
      } catch (err) {
        setError("Could not load campaigns");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold tracking-tight">CampaignSmith</h1>

        <button
        onClick={() => navigate("/profile")}
        className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800"
        >
        Profile
        </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold">Your Campaigns</h2>
            <p className="mt-2 text-slate-400">
              Create, manage, and expand your D&amp;D worlds.
            </p>
          </div>

          <button
            onClick={() => navigate("/create")}
            className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-500"
          >
            + Create Campaign
          </button>
        </div>

        {loading && <p className="text-slate-400">Loading campaigns...</p>}

        {error && <p className="text-red-400">{error}</p>}

        {!loading && !error && campaigns.length === 0 && (
          <div className="rounded-2xl border border-slate-800 bg-slate-800 p-8 text-center">
            <h3 className="text-xl font-semibold">No campaigns yet</h3>
            <p className="mt-2 text-slate-400">
              Create your first campaign to get started.
            </p>
          </div>
        )}

        {!loading && !error && campaigns.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign._id}
                campaign={{
                  id: campaign._id,
                  name: campaign.name,
                  theme: campaign.theme,
                  partyLevel: campaign.partyLevel,
                  updatedAt: new Date(campaign.updatedAt).toLocaleDateString(),
                }}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}