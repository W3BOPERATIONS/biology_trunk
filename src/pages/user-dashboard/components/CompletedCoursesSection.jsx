import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { mockCompletedCourses } from '../../../data/dashboardMockData';

const CompletedCoursesSection = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');

  const handleDownloadCertificate = (certificateId) => {
    console.log('Downloading certificate:', certificateId);
    alert(`Certificate ${certificateId} download started!`);
  };

  const handleReviewCourse = (courseId) => {
    navigate(`/course-details-page/${courseId}`);
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Completed Courses</h2>
          <p className="text-sm text-text-secondary mt-1">
            {mockCompletedCourses?.length} course{mockCompletedCourses?.length !== 1 ? 's' : ''} completed
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid' ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
            }`}
          >
            <Icon name="Grid" size={18} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list' ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
            }`}
          >
            <Icon name="List" size={18} />
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCompletedCourses?.map((course) => (
            <div
              key={course?.id}
              className="bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-all border border-transparent hover:border-primary/20 group"
            >
              <div className="relative">
                <img
                  src={course?.thumbnail}
                  alt={course?.alt}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <Icon name="CheckCircle" size={16} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded font-medium">
                  Completed
                </span>
                
                <h3 className="font-semibold text-foreground mt-3 mb-2 line-clamp-2">
                  {course?.title}
                </h3>
                
                <p className="text-sm text-text-secondary mb-3">
                  By {course?.instructor}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <p className="text-text-secondary">Completed</p>
                    <p className="font-semibold text-foreground">
                      {formatDate(course?.completedDate)}
                    </p>
                  </div>
                  <div>
                    <p className="text-text-secondary">Final Score</p>
                    <p className="font-semibold text-green-600">{course?.finalScore}%</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleDownloadCertificate(course?.certificateId)}
                    iconName="Download"
                    iconPosition="left"
                  >
                    Certificate
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleReviewCourse(course?.id)}
                  >
                    <Icon name="Eye" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {mockCompletedCourses?.map((course) => (
            <div
              key={course?.id}
              className="bg-muted rounded-lg p-4 hover:shadow-md transition-all border border-transparent hover:border-primary/20"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={course?.thumbnail}
                  alt={course?.alt}
                  className="w-24 h-16 rounded-lg object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground line-clamp-1">
                        {course?.title}
                      </h3>
                      <p className="text-sm text-text-secondary">By {course?.instructor}</p>
                    </div>
                    <Icon name="CheckCircle" size={20} className="text-green-500 flex-shrink-0" />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={14} className="text-text-secondary" />
                      <span className="text-text-secondary">{formatDate(course?.completedDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Award" size={14} className="text-text-secondary" />
                      <span className="text-text-secondary">Score: {course?.finalScore}%</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                      <span className="font-semibold text-foreground">{course?.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleDownloadCertificate(course?.certificateId)}
                    iconName="Download"
                    iconPosition="left"
                  >
                    Certificate
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleReviewCourse(course?.id)}
                  >
                    <Icon name="Eye" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedCoursesSection;