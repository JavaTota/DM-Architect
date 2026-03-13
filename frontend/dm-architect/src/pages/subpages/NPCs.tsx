import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NpcForm from "../../components/NpcForm";
import type { Npc } from "../../types/NPC";

type NpcFormValues = {
  name: string;
  role: string;
  location: string;
  personality: string;
  motivation: string;
  secret: string;
};

export default function NPCs() {
  const { id: campaignId } = useParams();

  const [npcs, setNpcs] = useState<Npc[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingNpc, setEditingNpc] = useState<Npc | null>(null);

  async function fetchNpcs() {
    if (!campaignId) return;

    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3001/api/npcs?campaignId=${campaignId}`
      );

      if (!res.ok) {
        throw new Error("Failed to load NPCs");
      }

      const data = await res.json();
      setNpcs(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Could not load NPCs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNpcs();
  }, [campaignId]);

  async function handleCreateNpc(values: NpcFormValues) {
    if (!campaignId) return;

    const res = await fetch("http://localhost:3001/api/npcs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ campaignId, ...values }),
    });

    if (!res.ok) {
      throw new Error("Failed to create NPC");
    }

    setShowCreateForm(false);
    await fetchNpcs();
  }

  async function handleUpdateNpc(values: NpcFormValues) {
    if (!editingNpc) return;

    const res = await fetch(`http://localhost:3001/api/npcs/${editingNpc._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error("Failed to update NPC");
    }

    setEditingNpc(null);
    await fetchNpcs();
  }

  async function handleDeleteNpc(npcId: string) {
    const confirmed = window.confirm("Delete this NPC?");
    if (!confirmed) return;

    const res = await fetch(`http://localhost:3001/api/npcs/${npcId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete NPC");
    }

    await fetchNpcs();
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
          onClick={() => {
            setEditingNpc(null);
            setShowCreateForm(true);
          }}
          className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-500"
        >
          + Add NPC
        </button>
      </section>

      {showCreateForm && (
        <NpcForm
          submitLabel="Create NPC"
          onSubmit={handleCreateNpc}
          onCancel={() => setShowCreateForm(false)}
        />
      )}

      {editingNpc && (
        <NpcForm
          submitLabel="Update NPC"
          initialValues={{
            name: editingNpc.name,
            role: editingNpc.role,
            location: editingNpc.location,
            personality: editingNpc.personality,
            motivation: editingNpc.motivation,
            secret: editingNpc.secret,
          }}
          onSubmit={handleUpdateNpc}
          onCancel={() => setEditingNpc(null)}
        />
      )}

      {loading && (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
          Loading NPCs...
        </section>
      )}

      {!loading && error && (
        <section className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center text-red-300">
          {error}
        </section>
      )}

      {!loading && !error && npcs.length === 0 && (
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-2xl font-semibold text-white">No NPCs yet</h3>
          <p className="mt-3 text-slate-400">
            Create your first NPC to start populating your campaign.
          </p>
        </section>
      )}

      {!loading && !error && npcs.length > 0 && (
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {npcs.map((npc) => (
            <article
              key={npc._id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {npc.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{npc.role}</p>
                </div>

                <div className="h-12 w-12 rounded-full bg-white/10" />
              </div>

              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  {npc.location || "Unknown"}
                </p>
                <p>
                  <span className="font-semibold text-white">Personality:</span>{" "}
                  {npc.personality || "Not set"}
                </p>
                <p>
                  <span className="font-semibold text-white">Motivation:</span>{" "}
                  {npc.motivation || "Not set"}
                </p>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => setEditingNpc(npc)}
                  className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteNpc(npc._id)}
                  className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 hover:bg-red-500/20"
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}