export default function AiToolsPanel() {
  const tools = [
    "Generate NPC",
    "Generate Quest",
    "Generate Session",
    "Generate Location",
    "Generate Plot Twist",
  ];

  return (
    <aside className="col-span-3 border-l border-white/10 bg-[#0f1730] p-5">
      <div className="space-y-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-4 text-2xl font-semibold">AI Tools</h3>

          <div className="space-y-3">
            {tools.map((item, index) => (
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
  );
}