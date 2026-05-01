export default function ModulesTab({ modules }: { modules: any[] }) {
  
  if (modules.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-xl border shadow-sm">
        <p className="text-gray-500">No modules found for this syllabus.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {modules.map((m: any, index: number) => (
        <div key={m.id} className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#eaf4f7] text-[#42a8c5] text-xs font-bold">
              {index + 1}
            </span>
            <h3 className="text-lg font-bold text-gray-800">{m.name}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed pl-10 text-sm">
            {m.content}
          </p>
        </div>
      ))}
    </div>
  );
}