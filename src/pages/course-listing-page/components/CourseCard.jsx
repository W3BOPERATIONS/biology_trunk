import Icon from '../../../components/AppIcon';
import { motion } from 'framer-motion';

const CourseCard = ({ course, viewMode, isInWishlist, onCourseClick, onToggleWishlist }) => {
  const handleWishlistClick = (e) => {
    e?.stopPropagation();
    onToggleWishlist(course?.id);
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => onCourseClick(course)}
        className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
      >
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-64 h-48 sm:h-auto flex-shrink-0">
            <img
              src={course?.thumbnail}
              alt={course?.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {course?.bestseller && (
              <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded">
                BESTSELLER
              </span>
            )}
            {course?.newRelease && (
              <span className="absolute top-3 right-3 bg-success text-white text-xs font-bold px-3 py-1 rounded">
                NEW
              </span>
            )}
          </div>

          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {course?.title}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2 mb-3">
                  {course?.description}
                </p>
              </div>
              <button
                onClick={handleWishlistClick}
                className="p-2 hover:bg-muted rounded-full transition-colors ml-4"
                aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Icon
                  name="Heart"
                  size={20}
                  className={isInWishlist ? 'text-red-500 fill-red-500' : 'text-text-secondary'}
                />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <img
                src={course?.instructor?.avatar}
                alt={course?.instructor?.alt}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-text-secondary">{course?.instructor?.name}</span>
            </div>

            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <div className="flex items-center gap-1">
                <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="font-semibold text-foreground">{course?.rating}</span>
                <span className="text-sm text-text-secondary">
                  ({course?.reviewCount?.toLocaleString()})
                </span>
              </div>
              <div className="flex items-center gap-1 text-text-secondary text-sm">
                <Icon name="Users" size={16} />
                <span>{course?.studentsEnrolled?.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1 text-text-secondary text-sm">
                <Icon name="Clock" size={16} />
                <span>{course?.duration}</span>
              </div>
              <span className="text-xs px-2 py-1 bg-muted rounded text-text-secondary">
                {course?.level}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">${course?.price}</span>
                {course?.discount > 0 && (
                  <>
                    <span className="text-sm text-text-secondary line-through">
                      ${course?.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-success">
                      {course?.discount}% OFF
                    </span>
                  </>
                )}
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                View Course
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => onCourseClick(course)}
      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      <div className="relative h-48">
        <img
          src={course?.thumbnail}
          alt={course?.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {course?.bestseller && (
          <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded">
            BESTSELLER
          </span>
        )}
        {course?.newRelease && (
          <span className="absolute top-3 right-3 bg-success text-white text-xs font-bold px-3 py-1 rounded">
            NEW
          </span>
        )}
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full transition-colors shadow-md"
          aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Icon
            name="Heart"
            size={18}
            className={isInWishlist ? 'text-red-500 fill-red-500' : 'text-gray-700'}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {course?.title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <img
            src={course?.instructor?.avatar}
            alt={course?.instructor?.alt}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm text-text-secondary">{course?.instructor?.name}</span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-foreground">{course?.rating}</span>
          </div>
          <span className="text-xs text-text-secondary">
            ({course?.reviewCount?.toLocaleString()})
          </span>
          <span className="text-xs text-text-secondary">•</span>
          <span className="text-xs text-text-secondary">
            {course?.studentsEnrolled?.toLocaleString()} students
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Icon name="Clock" size={14} className="text-text-secondary" />
          <span className="text-sm text-text-secondary">{course?.duration}</span>
          <span className="text-xs px-2 py-0.5 bg-muted rounded text-text-secondary ml-auto">
            {course?.level}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">${course?.price}</span>
            {course?.discount > 0 && (
              <span className="text-sm text-text-secondary line-through">
                ${course?.originalPrice}
              </span>
            )}
          </div>
          {course?.discount > 0 && (
            <span className="text-xs font-bold text-success">
              {course?.discount}% OFF
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;