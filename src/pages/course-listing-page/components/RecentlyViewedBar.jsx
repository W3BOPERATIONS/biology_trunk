import Icon from '../../../components/AppIcon';

const RecentlyViewedBar = ({ courses, onCourseClick }) => {
  return (
    <div className="bg-card border-t border-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-bold text-foreground mb-4">Recently Viewed</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {courses?.map((course) => (
            <div
              key={course?.id}
              onClick={() => onCourseClick(course)}
              className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="relative h-32">
                <img
                  src={course?.thumbnail}
                  alt={course?.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h4 className="text-sm font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                  {course?.title}
                </h4>
                <div className="flex items-center gap-1 mb-2">
                  <Icon name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-semibold text-foreground">
                    {course?.rating}
                  </span>
                </div>
                <span className="text-sm font-bold text-primary">${course?.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedBar;