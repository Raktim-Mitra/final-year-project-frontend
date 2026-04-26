import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/authStore";

const API = "http://localhost:5001";

export default function OutcomesTab({ syllabusId }: { syllabusId: string }) {
  const { token } = useAuthStore();
  const [outcomes, setOutcomes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCO = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API}/api/syllabus/${syllabusId}/outcomes`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) setOutcomes(data.outcomes);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCO();
  }, [syllabusId, token]);

  if (loading) {
    return <p className="text-center py-20 text-gray-500 animate-pulse">Analyzing text and generating outcomes...</p>;
  }

  const extractBullets = (text: string) => {
    if (!text) return [];
    return text.split("\n").filter((line) => line.trim().startsWith("-")).map((line) => line.replace("-", "").trim());
  };

  return (
    <div className="space-y-4">
      {outcomes.map((o: any, i: number) => {
        const bullets = extractBullets(o.outcome);
        
        return (
          <div key={i} className="p-5 bg-white border rounded-xl shadow-sm flex items-start gap-4">
             <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase shrink-0 mt-0.5">
                CO {i + 1}
              </span>
              <ul className="space-y-2 flex-1">
                {bullets.length > 0 ? (
                  bullets.map((bullet, idx) => (
                    <li key={idx} className="text-gray-700 text-sm leading-relaxed">
                      • {bullet}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-700 text-sm leading-relaxed">{o.outcome}</li>
                )}
              </ul>
          </div>
        );
      })}
    </div>
  );
}