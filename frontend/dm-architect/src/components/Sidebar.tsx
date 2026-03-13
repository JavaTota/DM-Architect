import { useNavigate, useParams } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();
  const { id } = useParams();

  const items = [
    { label: "Overview", path: "overview" },
    { label: "NPCs", path: "npcs" },
    { label: "Quests", path: "quests" },
    { label: "Sessions", path: "sessions" },
    { label: "Locations", path: "locations" },
    { label: "Notes", path: "notes" },
    { label: "Timeline", path: "timeline" },
    { label: "AI Assistant", path: "ai" },
  ];

  return (
    <aside className="col-span-2 border-r border-white/10 bg-[#0f1730] p-4">
      <nav className="space-y-2">
        {items.map((item, index) => (
          <button
            key={item.label}
            onClick={() => navigate(`/campaign/${id}/${item.path}`)}
            className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
              index === 0
                ? "bg-indigo-500/30 text-white"
                : "text-white/80 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.label}
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