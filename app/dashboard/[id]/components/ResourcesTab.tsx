import { useState } from "react";
import { useAuthStore } from "@/store/authStore";

const API = "http://localhost:5001";

// Helper function to detect the resource type from the URL
const getResourceType = (url: string) => {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be")) {
    return "video";
  }
  if (lowerUrl.endsWith(".pdf")) {
    return "pdf";
  }
  return "article";
};

// Helper component to render the correct badge based on type
const ResourceBadge = ({ type }: { type: string }) => {
  if (type === "video") {
    return (
      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider shrink-0 border border-red-100">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        Video
      </span>
    );
  }
  if (type === "pdf") {
    return (
      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider shrink-0 border border-orange-100">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
        PDF
      </span>
    );
  }
  // Default to Article
  return (
    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eaf4f7] text-[#42a8c5] text-[10px] font-bold uppercase tracking-wider shrink-0 border border-[#d5ebf2]">
      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
      Article
    </span>
  );
};

function ModuleResourceItem({ module, token }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleOpen = async () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState && resources.length === 0) {
      setLoading(true);
      try {
        const res = await fetch(`${API}/api/module/${module.id}/resources`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) setResources(data.resources);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden transition-all mb-4">
      <button 
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-5 hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-gray-800 text-left">{module.name}</span>
        <span className="text-[#42a8c5] text-xl font-light shrink-0 ml-4">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="p-5 pt-0 border-t border-gray-100 bg-slate-50/50">
          {loading && <p className="text-sm text-[#42a8c5] animate-pulse mt-4">Curating resources...</p>}
          {!loading && resources.length === 0 && <p className="text-sm text-gray-500 mt-4">No resources found.</p>}
          
          <div className="mt-4 space-y-2">
            {resources.map((r: any, i: number) => {
              const resourceType = getResourceType(r.url);
              
              return (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-white border rounded-lg hover:border-[#42a8c5] hover:shadow-sm transition-all gap-4"
                >
                  <div className="flex items-center gap-4 flex-1 overflow-hidden">
                    {/* Render the appropriate badge */}
                    <ResourceBadge type={resourceType} />
                    
                    <span className="text-sm font-medium text-gray-600 group-hover:text-[#42a8c5] truncate">
                      {r.title}
                    </span>
                  </div>
                  <span className="text-gray-300 group-hover:text-[#42a8c5] transition-colors shrink-0">
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ResourcesTab({ modules }: { modules: any[] }) {
  const { token } = useAuthStore();

  return (
    <div>
      <p className="text-sm text-gray-500 mb-6">Click on a module to fetch curated study materials.</p>
      <div>
        {modules.map((m: any) => (
          <ModuleResourceItem key={m.id} module={m} token={token} />
        ))}
      </div>
    </div>
  );
}