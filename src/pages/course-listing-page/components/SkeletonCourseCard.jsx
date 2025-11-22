const SkeletonCourseCard = ({ viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-64 h-48 bg-muted" />
          <div className="flex-1 p-6">
            <div className="h-6 bg-muted rounded w-3/4 mb-3" />
            <div className="h-4 bg-muted rounded w-full mb-2" />
            <div className="h-4 bg-muted rounded w-2/3 mb-4" />
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-muted rounded-full" />
              <div className="h-4 bg-muted rounded w-24" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-4 bg-muted rounded w-16" />
              <div className="h-4 bg-muted rounded w-24" />
              <div className="h-4 bg-muted rounded w-16" />
            </div>
            <div className="flex items-center justify-between">
              <div className="h-8 bg-muted rounded w-24" />
              <div className="h-10 bg-muted rounded w-32" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden animate-pulse">
      <div className="h-48 bg-muted" />
      <div className="p-4">
        <div className="h-6 bg-muted rounded w-3/4 mb-3" />
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-muted rounded-full" />
          <div className="h-4 bg-muted rounded w-24" />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="h-4 bg-muted rounded w-16" />
          <div className="h-4 bg-muted rounded w-20" />
        </div>
        <div className="flex items-center gap-2 mb-4">
          <div className="h-4 bg-muted rounded w-20" />
          <div className="h-4 bg-muted rounded w-16 ml-auto" />
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="h-6 bg-muted rounded w-20" />
          <div className="h-4 bg-muted rounded w-16" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCourseCard;