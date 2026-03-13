export function Sidebar() {
  const items = [
    "Overview",
    "NPCs",
    "Quests",
    "Sessions",
    "Locations",
    "Notes",
    "Timeline",
    "AI Assistant",
  ];

  return (
    <aside className="col-span-2 border-r border-white/10 bg-[#0f1730] p-4">
      <nav className="space-y-2">
        {items.map((item, index) => (
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
  );
}