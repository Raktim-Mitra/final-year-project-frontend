import { BookMarked, Star } from 'lucide-react';
import { Resource } from '@/types/Index';

interface FeaturedResourceProps {
  resource: Resource;
}

export default function FeaturedResource({ resource }: FeaturedResourceProps) {
  return (
    <div className="p-1 bg-gradient-to-r from-[#5da8bd] via-[#BBDCE5] to-[#D9C4B0] rounded-2xl shadow-lg">
      <div className="bg-white rounded-[14px] p-5 flex items-center gap-5">
        <div className="size-20 shrink-0 rounded-xl bg-gradient-to-br from-[#BBDCE5]/30 to-[#ECEEDF] flex items-center justify-center">
          <BookMarked className="w-8 h-8 text-[#5da8bd]" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-gradient-to-r from-[#5da8bd] to-[#71a9b8] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
              Featured
            </span>
            <span className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-xs font-bold">{resource.rating}</span>
            </span>
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-1">{resource.title}</h4>
          <p className="text-gray-500 text-sm">{resource.source}</p>
        </div>
        <button className="px-5 py-2.5 bg-[#5da8bd] text-white text-sm font-bold rounded-xl hover:bg-[#4f9aad] transition-colors shadow-md">
          Access
        </button>
      </div>
    </div>
  );
}