import { Star, Clock } from 'lucide-react';
import { Resource } from '@/types/Index';
import { resourceTypeIcons, resourceTypeColors } from '@/constants';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const IconComponent = resourceTypeIcons[resource.type];
  const colorClass = resourceTypeColors[resource.type];

  return (
    <div className="p-4 border-2 border-[#D9C4B0]/30 rounded-xl hover:border-[#5da8bd]/40 hover:shadow-md transition-all group">
      <div className="flex items-start gap-3">
        <div className={`size-10 rounded-lg flex items-center justify-center shrink-0 border ${colorClass}`}>
          <IconComponent className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase border ${colorClass}`}>
              {resource.type}
            </span>
            <span className="flex items-center gap-0.5 text-amber-500">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-[10px] font-bold">{resource.rating}</span>
            </span>
          </div>
          <h4 className="font-semibold text-gray-900 text-sm mb-0.5 group-hover:text-[#5da8bd] transition-colors">
            {resource.title}
          </h4>
          <p className="text-xs text-gray-500">{resource.source}</p>
          {resource.duration && (
            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {resource.duration}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}