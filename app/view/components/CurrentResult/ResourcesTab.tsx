import { Resource } from '@/types/Index';
import FeaturedResource from '../ui/FeaturedResource';
import ResourceCard from '../ui/ResourceCard';

interface ResourcesTabProps {
  resources: Resource[];
}

export default function ResourcesTab({ resources }: ResourcesTabProps) {
  const featured = resources.filter(r => r.isFeatured);
  const regular = resources.filter(r => !r.isFeatured);

  return (
    <div className="space-y-6">
      {featured.map(resource => (
        <FeaturedResource key={resource.id} resource={resource} />
      ))}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {regular.map(resource => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}