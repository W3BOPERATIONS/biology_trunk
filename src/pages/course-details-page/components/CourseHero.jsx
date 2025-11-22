import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CourseHero = ({ course, onPreview, onToggleWishlist, onShare }) => {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                {course?.category}
              </span>
              {course?.bestseller && (
                <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded">
                  BESTSELLER
                </span>
              )}
              {course?.trending && (
                <span className="text-sm font-semibold text-success bg-success/10 px-3 py-1 rounded flex items-center gap-1">
                  <Icon name="TrendingUp" size={14} />
                  TRENDING
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-4">{course?.title}</h1>
            <p className="text-lg text-text-secondary mb-6">{course?.description}</p>

            <div className="flex items-center flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Icon name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-lg font-bold text-foreground">{course?.rating}</span>
                </div>
                <span className="text-text-secondary">
                  ({course?.reviewCount?.toLocaleString()} reviews)
                </span>
              </div>

              <div className="flex items-center gap-2 text-text-secondary">
                <Icon name="Users" size={18} />
                <span>{course?.studentsEnrolled?.toLocaleString()} students</span>
              </div>

              <div className="flex items-center gap-2 text-text-secondary">
                <Icon name="Clock" size={18} />
                <span>{course?.duration} total</span>
              </div>

              <div className="flex items-center gap-2 text-text-secondary">
                <Icon name="Calendar" size={18} />
                <span>Updated {course?.lastUpdated}</span>
              </div>

              <div className="flex items-center gap-2 text-text-secondary">
                <Icon name="Globe" size={18} />
                <span>{course?.language}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <img
                src={course?.instructor?.avatar}
                alt={course?.instructor?.alt}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-text-secondary">Created by</p>
                <p className="font-semibold text-foreground">{course?.instructor?.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={onPreview}
                variant="outline"
                iconName="Play"
                iconPosition="left"
              >
                Preview Course
              </Button>
              <button
                onClick={onToggleWishlist}
                className="p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                aria-label="Add to wishlist"
              >
                <Icon name="Heart" size={20} />
              </button>
              <button
                onClick={onShare}
                className="p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                aria-label="Share course"
              >
                <Icon name="Share2" size={20} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-1 lg:block hidden">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={course?.thumbnail}
                alt={course?.alt}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={onPreview}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Play" size={28} className="text-primary ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;