import { Resource } from '@/types/Index';
import FeaturedResource from '../ui/FeaturedResource';
import ResourceCard from '../ui/ResourceCard';

interface ResourcesTabProps {
  resources: Resource[];
}

export default function ResourcesTab({ resources }: ResourcesTabProps) {
  const featuredResources = resources.filter(r => r.isFeatured);
  const regularResources = resources.filter(r => !r.isFeatured);

  return (
    <div className="space-y-6">
      {/* Featured Resources */}
      {featuredResources.map(resource => (
        <FeaturedResource key={resource.id} resource={resource} />
      ))}

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {regularResources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}