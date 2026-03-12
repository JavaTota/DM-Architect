import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCampaign() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    theme: "",
    tone: "",
    settingType: "",
    partyLevel: 1,
    idea: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "partyLevel" ? Number(value) : value,
    }));
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:3001/api/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const newCampaign = await res.json();
    navigate(`/campaign/${newCampaign._id}`);
  } catch (error) {
    console.error("Failed to create campaign:", error);
  }
};


  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-4xl font-bold">Create Campaign</h1>
        <p className="mt-2 text-slate-400">
          Set up the foundation of your campaign world.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 rounded-2xl border border-slate-800 bg-slate-800 p-8"
        >
          {/* Campaign Name */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Campaign Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-slate-700 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          {/* Theme */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">Theme</label>
            <select
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-700 px-4 py-3"
            >
              <option value="">Select theme</option>
              <option>Dark Fantasy</option>
              <option>High Fantasy</option>
              <option>Political Intrigue</option>
              <option>Horror</option>
            </select>
          </div>

          {/* Tone */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">Tone</label>
            <select
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-700 px-4 py-3"
            >
              <option value="">Select tone</option>
              <option>Grim</option>
              <option>Epic</option>
              <option>Mysterious</option>
              <option>Lighthearted</option>
            </select>
          </div>

          {/* Party Level */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Party Level
            </label>
            <input
              type="number"
              name="partyLevel"
              value={formData.partyLevel}
              onChange={handleChange}
              min={1}
              max={20}
              className="w-full rounded-lg bg-slate-700 px-4 py-3"
            />
          </div>

          {/* Campaign Idea */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Campaign Idea
            </label>
            <textarea
              name="idea"
              value={formData.idea}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-lg bg-slate-700 px-4 py-3"
              placeholder="Example: A dying kingdom hiding a pact with demons..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-3 font-semibold hover:bg-violet-500"
           
          >
            Generate Campaign
          </button>
        </form>
      </div>
    </main>
  );
}