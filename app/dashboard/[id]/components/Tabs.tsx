export default function Tabs({ tab, setTab }: { tab: string; setTab: (t: string) => void }) {
  const tabs = [
    { id: "modules", label: "Modules" },
    { id: "co", label: "Outcomes" },
    { id: "resources", label: "Resources" },
    { id: "questions", label: "Questions" },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex gap-8" aria-label="Tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
              ${
                tab === t.id
                  ? "border-[#42a8c5] text-[#42a8c5]" // Dashboard brand color
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </div>
  );
}