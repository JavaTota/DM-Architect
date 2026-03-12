import { useNavigate } from "react-router-dom";
import type { Campaign } from "../types/Campaign";

type CampaignCardProps = {
  campaign: Campaign;
};

export default function CampaignCard({ campaign }: CampaignCardProps) {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-lg transition hover:border-violet-500 hover:shadow-violet-500/10">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">{campaign.name}</h2>
        <p className="mt-1 text-sm text-slate-400">{campaign.theme}</p>
      </div>

      <div className="space-y-2 text-sm text-slate-300">
        <p>
          <span className="font-medium text-slate-200">Party Level:</span>{" "}
          {campaign.partyLevel}
        </p>
        <p>
          <span className="font-medium text-slate-200">Last Updated:</span>{" "}
          {campaign.updatedAt}
        </p>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={() => navigate(`/campaign/${campaign.id}`)}
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500"
        >
          Open
        </button>

        <button className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-700">
          Delete
        </button>
      </div>
    </div>
  );
}