import { BookMarked, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Resource } from '@/types/Index';

interface FeaturedResourceProps {
  resource: Resource;
}

export default function FeaturedResource({ resource }: FeaturedResourceProps) {
  return (
    <div className="p-[3px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-2xl shadow-lg">
      <Card className="rounded-[13px] border-0">
        <CardContent className="p-5 flex items-center gap-5">
          <div className="size-20 shrink-0 rounded-xl bg-gradient-to-br from-brand-secondary/30 to-brand-bg flex items-center justify-center">
            <BookMarked className="w-8 h-8 text-brand-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-brand-primary text-white text-[10px] font-black uppercase tracking-wider border-0">
                Featured
              </Badge>
              <span className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs font-bold">{resource.rating}</span>
              </span>
            </div>
            <h4 className="text-lg font-bold text-foreground mb-1 truncate">{resource.title}</h4>
            <p className="text-muted-foreground text-sm">{resource.source}</p>
          </div>
          <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white shadow-md shrink-0">
            Access
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}