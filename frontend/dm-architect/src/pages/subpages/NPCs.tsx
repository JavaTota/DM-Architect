import { useState } from "react";
import AddNpcForm from "../../components/AddNpcForm";

type NPC = {
  id: string;
  name: string;
  role: string;
  location: string;
  personality: string;
  motivation: string;
  secret: string;
};

export default function NPCs() {
  const [showForm, setShowForm] = useState(false);
  const [npcs, setNpcs] = useState<NPC[]>([]);

  function handleAddNpc(npc: Omit<NPC, "id">) {
    const newNpc = {
      id: crypto.randomUUID(),
      ...npc,
    };

    setNpcs((prev) => [newNpc, ...prev]);
    setShowForm(false);
  }

  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">NPCs</h2>
          <p className="mt-2 text-slate-400">
            Manage the characters that shape your campaign world.
          </p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-500"
        >
          + Add NPC
        </button>
      </section>

      {showForm && (
        <AddNpcForm
          onSubmit={handleAddNpc}
          onCancel={() => setShowForm(false)}
        />
      )}

      {npcs.length === 0 ? (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-2xl font-semibold text-white">No NPCs yet</h3>
          <p className="mt-3 text-slate-400">
            Create your first NPC to start populating your campaign.
          </p>
        </section>
      ) : (
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {npcs.map((npc) => (
            <article
              key={npc.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-2xl font-semibold text-white">{npc.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{npc.role}</p>

              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  {npc.location}
                </p>
                <p>
                  <span className="font-semibold text-white">Motivation:</span>{" "}
                  {npc.motivation}
                </p>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}