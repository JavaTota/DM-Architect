import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Campaign } from "../types/Campaign";

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
          <header className="flex h-20 items-center justify-between border-b border-white/10 bg-white/5 px-6">
            <div className="flex items-center gap-4">
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
              <div className="h-11 w-11 rounded-full bg-white/20" />
            </div>
          </header>

          <div className="grid min-h-[calc(100vh-8rem)] grid-cols-12">
            <aside className="col-span-2 border-r border-white/10 bg-[#0f1730] p-4">
              <nav className="space-y-2">
                {[
                  "Overview",
                  "NPCs",
                  "Quests",
                  "Sessions",
                  "Locations",
                  "Notes",
                  "Timeline",
                  "AI Assistant",
                ].map((item, index) => (
                  <button
                    key={item}
                    className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                      index === 0
                        ? "bg-indigo-500/30 text-white"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="space-y-2">
                  <button className="flex w-full rounded-xl px-4 py-3 text-left text-sm text-white/70 hover:bg-white/5 hover:text-white">
                    Settings
                  </button>
                  <button className="flex w-full rounded-xl px-4 py-3 text-left text-sm text-white/70 hover:bg-white/5 hover:text-white">
                    Logout
                  </button>
                </div>
              </div>
            </aside>

            <main className="col-span-7 bg-[#111a36] p-5">
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
                        <span className="font-semibold text-white">
                          Party Level:
                        </span>{" "}
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
                              <span className="font-semibold text-white">
                                Goal:
                              </span>{" "}
                              {campaign.villain?.goal || "Not set"}
                            </p>
                            <p>
                              <span className="font-semibold text-white">
                                Motivation:
                              </span>{" "}
                              {campaign.villain?.motivation || "Not set"}
                            </p>
                            <p>
                              <span className="font-semibold text-white">
                                Secret:
                              </span>{" "}
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
                    <h3 className="mb-4 text-2xl font-semibold">
                      Starting Location
                    </h3>
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
                          <span className="font-semibold text-white">
                            Important NPCs:
                          </span>{" "}
                          {campaign.startingLocation?.importantNPCs?.length
                            ? campaign.startingLocation.importantNPCs.join(", ")
                            : "None yet"}
                        </p>
                        <p>
                          <span className="font-semibold text-white">
                            Notable Landmarks:
                          </span>{" "}
                          {campaign.startingLocation?.landmarks?.length
                            ? campaign.startingLocation.landmarks.join(", ")
                            : "None yet"}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="mb-4 text-2xl font-semibold">
                    First Quest Hook
                  </h3>
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
                  {["Add NPC", "Add Quest", "Add Session", "Add Note"].map(
                    (item) => (
                      <button
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 font-medium hover:bg-white/15"
                      >
                        + {item}
                      </button>
                    )
                  )}
                </section>
              </div>
            </main>

            <aside className="col-span-3 border-l border-white/10 bg-[#0f1730] p-5">
              <div className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="mb-4 text-2xl font-semibold">AI Tools</h3>
                  <div className="space-y-3">
                    {[
                      "Generate NPC",
                      "Generate Quest",
                      "Generate Session",
                      "Generate Location",
                      "Generate Plot Twist",
                    ].map((item, index) => (
                      <button
                        key={item}
                        className={`w-full rounded-xl px-4 py-3 text-left font-medium ${
                          index === 0
                            ? "bg-indigo-500 text-white hover:bg-indigo-400"
                            : "bg-white/10 text-white hover:bg-white/15"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <input
                    type="text"
                    placeholder="Ask AI about your campaign..."
                    className="w-full rounded-xl border border-white/10 bg-[#1a2446] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none"
                  />

                  <div className="mt-4 space-y-3 text-sm text-white/75">
                    <button className="block hover:text-white">
                      Generate tavern rumors
                    </button>
                    <button className="block hover:text-white">
                      Create a rival adventuring party
                    </button>
                    <button className="block hover:text-white">
                      Expand the villain&apos;s plans
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}