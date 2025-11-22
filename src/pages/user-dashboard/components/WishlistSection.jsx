import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { mockWishlist } from '../../../data/dashboardMockData';

const WishlistSection = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState(mockWishlist);

  const handleRemoveFromWishlist = (courseId) => {
    setWishlistItems(prev => prev?.filter(item => item?.id !== courseId));
  };

  const handleAddToCart = (course) => {
    console.log('Adding to cart:', course);
    alert(`${course?.title} added to cart!`);
  };

  const handleCourseClick = (courseId) => {
    navigate(`/course-details-page/${courseId}`);
  };

  const calculateDiscount = (price, originalPrice) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">My Wishlist</h2>
          <p className="text-sm text-text-secondary mt-1">
            {wishlistItems?.length} course{wishlistItems?.length !== 1 ? 's' : ''} saved
          </p>
        </div>
        {wishlistItems?.length > 0 && (
          <Button
            variant="default"
            onClick={() => alert('Adding all to cart!')}
            iconName="ShoppingCart"
            iconPosition="left"
          >
            Add All to Cart
          </Button>
        )}
      </div>

      {wishlistItems?.length > 0 ? (
        <div className="space-y-4">
          {wishlistItems?.map((course) => (
            <div
              key={course?.id}
              className="bg-muted rounded-lg p-4 hover:shadow-md transition-all border border-transparent hover:border-primary/20"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div
                  onClick={() => handleCourseClick(course?.id)}
                  className="cursor-pointer flex-shrink-0"
                >
                  <img
                    src={course?.thumbnail}
                    alt={course?.alt}
                    className="w-full sm:w-48 h-32 rounded-lg object-cover hover:opacity-90 transition-opacity"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3
                        onClick={() => handleCourseClick(course?.id)}
                        className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer line-clamp-2"
                      >
                        {course?.title}
                      </h3>
                      <p className="text-sm text-text-secondary mt-1">
                        By {course?.instructor}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromWishlist(course?.id)}
                      className="text-text-secondary hover:text-red-500 transition-colors flex-shrink-0"
                      title="Remove from wishlist"
                    >
                      <Icon name="Trash2" size={18} />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded font-medium">
                      {course?.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                      <span className="font-semibold text-foreground">{course?.rating}</span>
                      <span className="text-text-secondary">
                        ({course?.students?.toLocaleString()} students)
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} className="text-text-secondary" />
                      <span className="text-text-secondary">{course?.duration}</span>
                    </div>
                    <span className="px-2 py-1 bg-muted text-text-secondary rounded text-xs">
                      {course?.level}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-foreground">
                        ${course?.price}
                      </span>
                      <span className="text-sm text-text-secondary line-through">
                        ${course?.originalPrice}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-medium">
                        {calculateDiscount(course?.price, course?.originalPrice)}% OFF
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="default"
                        onClick={() => handleAddToCart(course)}
                        iconName="ShoppingCart"
                        iconPosition="left"
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleCourseClick(course?.id)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Icon name="Heart" size={48} className="text-text-secondary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Your wishlist is empty</h3>
          <p className="text-text-secondary mb-4">
            Explore courses and save your favorites here
          </p>
          <Button variant="default" onClick={() => navigate('/course-listing-page')}>
            Browse Courses
          </Button>
        </div>
      )}
    </div>
  );
};

export default WishlistSection;