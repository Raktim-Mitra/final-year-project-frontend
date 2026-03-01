import { Star, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Resource } from '@/types/Index';
import { resourceTypeIcons, resourceTypeColors } from '@/constants';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const IconComponent = resourceTypeIcons[resource.type];
  const colorClass = resourceTypeColors[resource.type];

  return (
    <Card className="border-2 border-brand-accent/30 hover:border-brand-primary/40 hover:shadow-md transition-all group">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className={`size-10 rounded-lg flex items-center justify-center shrink-0 border ${colorClass}`}>
            <IconComponent className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className={`text-[10px] uppercase ${colorClass}`}>
                {resource.type}
              </Badge>
              <span className="flex items-center gap-0.5 text-amber-500">
                <Star className="w-3 h-3 fill-current" />
                <span className="text-[10px] font-bold">{resource.rating}</span>
              </span>
            </div>
            <h4 className="font-semibold text-foreground text-sm mb-0.5 group-hover:text-brand-primary transition-colors truncate">
              {resource.title}
            </h4>
            <p className="text-xs text-muted-foreground">{resource.source}</p>
            {resource.duration && (
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {resource.duration}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}