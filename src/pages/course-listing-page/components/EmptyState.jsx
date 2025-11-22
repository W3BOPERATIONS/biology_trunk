import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmptyState = ({ onClearFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-6">
        <Icon name="Search" size={48} className="text-text-secondary" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-2">No Courses Found</h3>
      <p className="text-text-secondary text-center mb-6 max-w-md">
        We couldn't find any courses matching your search criteria. Try adjusting your filters or search terms.
      </p>
      <Button onClick={onClearFilters} variant="default">
        Clear All Filters
      </Button>
    </div>
  );
};

export default EmptyState;