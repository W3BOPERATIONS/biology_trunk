import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EnrollmentCard = ({ course, onEnroll, onAddToCart, onPreview }) => {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6 shadow-lg">
      <div className="mb-6">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-4xl font-bold text-foreground">${course?.price}</span>
          {course?.discount > 0 && (
            <>
              <span className="text-xl text-text-secondary line-through">
                ${course?.originalPrice}
              </span>
              <span className="text-lg font-bold text-success">{course?.discount}% OFF</span>
            </>
          )}
        </div>
        {course?.discount > 0 && (
          <p className="text-sm text-destructive font-semibold">
            Limited time offer! Sale ends soon
          </p>
        )}
      </div>

      <div className="space-y-3 mb-6">
        <Button onClick={onEnroll} variant="default" className="w-full" size="lg">
          Enroll Now
        </Button>
        <Button
          onClick={onAddToCart}
          variant="outline"
          className="w-full"
          iconName="ShoppingCart"
          iconPosition="left"
        >
          Add to Cart
        </Button>
        <Button
          onClick={onPreview}
          variant="outline"
          className="w-full"
          iconName="Play"
          iconPosition="left"
        >
          Preview This Course
        </Button>
      </div>

      <div className="mb-6">
        <p className="text-center text-sm text-text-secondary">
          30-Day Money-Back Guarantee
        </p>
      </div>

      <div className="border-t border-border pt-6 space-y-4">
        <h4 className="font-semibold text-foreground mb-4">This course includes:</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Icon name="PlayCircle" size={18} className="text-primary" />
            <span className="text-sm text-text-secondary">{course?.duration} on-demand video</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="FileText" size={18} className="text-primary" />
            <span className="text-sm text-text-secondary">
              {course?.courseContent?.lectures} lectures
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Download" size={18} className="text-primary" />
            <span className="text-sm text-text-secondary">Downloadable resources</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Infinity" size={18} className="text-primary" />
            <span className="text-sm text-text-secondary">Full lifetime access</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Smartphone" size={18} className="text-primary" />
            <span className="text-sm text-text-secondary">Access on mobile and TV</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Award" size={18} className="text-primary" />
            <span className="text-sm text-text-secondary">Certificate of completion</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 mt-6">
        <h4 className="font-semibold text-foreground mb-3">Course Details:</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">Level:</span>
            <span className="font-medium text-foreground">{course?.level}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Duration:</span>
            <span className="font-medium text-foreground">{course?.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Lectures:</span>
            <span className="font-medium text-foreground">
              {course?.courseContent?.lectures}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Language:</span>
            <span className="font-medium text-foreground">{course?.language}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Updated:</span>
            <span className="font-medium text-foreground">{course?.lastUpdated}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentCard;