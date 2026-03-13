import { useNavigate } from "react-router-dom";
import type { Campaign } from "../types/Campaign";

type CampaignDetails = Campaign & {
  tone?: string;
};

type TopbarProps = {
  campaign: CampaignDetails;
};

export default function Topbar({ campaign }: TopbarProps) {
  const navigate = useNavigate();

  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-white/5 px-6">
      <div
        onClick={() => navigate("/")}
        className="flex cursor-pointer items-center gap-4"
      >
        <div className="h-11 w-11 rounded-xl bg-linear-to-br from-violet-500 to-indigo-700" />

        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold">{campaign.name}</h1>

          <span className="hidden text-lg text-white/70 md:block">
            Campaign Workspace
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-xl border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-white/15">
          Save
        </button>

        <button className="rounded-xl border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-semibold hover:bg-white/15">
          Export Campaign
        </button>

        <button
          onClick={() => navigate("/")}
          className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
        >
          Dashboard
        </button>

        <div
            onClick={() => navigate("/profile")}
            className="h-11 w-11 cursor-pointer rounded-full bg-white/20"
          />
        </div>
    </header>
  );
}