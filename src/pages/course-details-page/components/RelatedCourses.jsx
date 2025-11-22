import Icon from '../../../components/AppIcon';

const RelatedCourses = ({ courses, onCourseClick }) => {
  return (
    <div className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground mb-8">Students Also Bought</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses?.map((course) => (
            <div
              key={course?.id}
              onClick={() => onCourseClick(course)}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="relative h-40">
                <img
                  src={course?.thumbnail}
                  alt={course?.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {course?.bestseller && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                    BESTSELLER
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {course?.title}
                </h3>
                <p className="text-xs text-text-secondary mb-3">{course?.instructor?.name}</p>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-semibold text-foreground">
                      {course?.rating}
                    </span>
                  </div>
                  <span className="text-xs text-text-secondary">
                    ({course?.reviewCount?.toLocaleString()})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">${course?.price}</span>
                  {course?.discount > 0 && (
                    <span className="text-xs text-text-secondary line-through">
                      ${course?.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedCourses;