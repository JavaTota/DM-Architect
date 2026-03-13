import type { Campaign } from "../../types/Campaign";

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

type Props = {
  campaign: CampaignDetails;
};

export default function Overview({ campaign }: Props) {
  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="mb-4 text-3xl font-bold">Campaign Overview</h2>
        <div className="rounded-2xl border border-white/10 bg-[#1a2446] p-5">
          <p className="mb-3 text-lg text-white/90">
            <span className="font-semibold">Campaign Summary:</span>{" "}
            {campaign.summary || campaign.idea || "No summary yet."}
          </p>

          <div className="space-y-2 text-white/80">
            <p>
              <span className="font-semibold text-white">Theme:</span>{" "}
              {campaign.theme || "Not set"}
            </p>
            <p>
              <span className="font-semibold text-white">Tone:</span>{" "}
              {campaign.tone || "Not set"}
            </p>
            <p>
              <span className="font-semibold text-white">Party Level:</span>{" "}
              {campaign.partyLevel}
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-4 text-2xl font-semibold">Main Villain</h3>
          <div className="rounded-2xl border border-white/10 bg-[#1a2446] p-4">
            <div className="mb-4 flex gap-4">
              <div className="h-28 w-24 rounded-xl bg-linear-to-b from-slate-700 to-slate-900" />
              <div>
                <h4 className="text-2xl font-bold">
                  {campaign.villain?.name || "No villain yet"}
                </h4>

                <div className="mt-3 space-y-2 text-sm text-white/80">
                  <p>
                    <span className="font-semibold text-white">Goal:</span>{" "}
                    {campaign.villain?.goal || "Not set"}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Motivation:</span>{" "}
                    {campaign.villain?.motivation || "Not set"}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Secret:</span>{" "}
                    {campaign.villain?.secret || "Not set"}
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full rounded-xl bg-white/10 py-3 text-sm font-medium hover:bg-white/15">
              Expand Villain Details
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-4 text-2xl font-semibold">Starting Location</h3>
          <div className="rounded-2xl border border-white/10 bg-[#1a2446] p-5">
            <h4 className="text-3xl font-bold">
              {campaign.startingLocation?.name || "No location yet"}
            </h4>

            <p className="mt-4 text-white/80">
              {campaign.startingLocation?.description ||
                "No location description yet."}
            </p>

            <div className="mt-5 space-y-3 text-white/80">
              <p>
                <span className="font-semibold text-white">Important NPCs:</span>{" "}
                {campaign.startingLocation?.importantNPCs?.length
                  ? campaign.startingLocation.importantNPCs.join(", ")
                  : "None yet"}
              </p>

              <p>
                <span className="font-semibold text-white">Notable Landmarks:</span>{" "}
                {campaign.startingLocation?.landmarks?.length
                  ? campaign.startingLocation.landmarks.join(", ")
                  : "None yet"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h3 className="mb-4 text-2xl font-semibold">First Quest Hook</h3>
        <div className="space-y-3 rounded-2xl border border-white/10 bg-[#1a2446] p-5">
          <p className="text-white/85">
            {campaign.firstQuestHook || "No quest hook yet."}
          </p>

          <div className="flex justify-end">
            <button className="rounded-xl bg-white/10 px-4 py-2.5 text-sm hover:bg-white/15">
              View Full Timeline
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        {["Add NPC", "Add Quest", "Add Session", "Add Note"].map((item) => (
          <button
            key={item}
            className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 font-medium hover:bg-white/15"
          >
            + {item}
          </button>
        ))}
      </section>
    </div>
  );
}