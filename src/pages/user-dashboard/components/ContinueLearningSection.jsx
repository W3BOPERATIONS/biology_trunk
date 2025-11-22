import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { mockEnrolledCourses } from '../../../data/dashboardMockData';

const ContinueLearningSection = () => {
  const navigate = useNavigate();
  
  const recentCourses = mockEnrolledCourses
    ?.sort((a, b) => new Date(b?.lastAccessed) - new Date(a?.lastAccessed))
    ?.slice(0, 3);

  const handleContinueCourse = (courseId) => {
    navigate(`/course-player/${courseId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Continue Learning</h2>
          <p className="text-sm text-text-secondary mt-1">
            Pick up where you left off
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => navigate('/my-courses')}
          iconName="ArrowRight"
          iconPosition="right"
        >
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {recentCourses?.map((course) => (
          <div
            key={course?.id}
            className="group bg-muted rounded-lg p-4 hover:shadow-md transition-all border border-transparent hover:border-primary/20"
          >
            <div className="flex items-start space-x-4">
              <div className="relative flex-shrink-0">
                <img
                  src={course?.thumbnail}
                  alt={course?.alt}
                  className="w-24 h-16 rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all flex items-center justify-center">
                  <Icon
                    name="PlayCircle"
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {course?.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">
                      By {course?.instructor}
                    </p>
                  </div>
                  <span className="text-xs text-text-secondary whitespace-nowrap ml-2">
                    {formatDate(course?.lastAccessed)}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">
                      Lesson {course?.completedLessons} of {course?.totalLessons}
                    </span>
                    <span className="font-semibold text-primary">
                      {course?.progress}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-300"
                      style={{ width: `${course?.progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="Clock" size={14} />
                      <span>{course?.estimatedTimeRemaining} left</span>
                    </div>
                    
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleContinueCourse(course?.id)}
                      iconName="PlayCircle"
                      iconPosition="left"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-border">
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary">Next lesson:</span>
                <span className="font-medium text-foreground">{course?.nextLesson}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueLearningSection;