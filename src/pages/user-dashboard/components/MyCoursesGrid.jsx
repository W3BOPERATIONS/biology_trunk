import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { mockEnrolledCourses } from '../../../data/dashboardMockData';

const MyCoursesGrid = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const filterOptions = [
    { value: 'all', label: 'All Courses' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'not-started', label: 'Not Started' }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Recently Accessed' },
    { value: 'progress', label: 'Progress' },
    { value: 'title', label: 'Title A-Z' }
  ];

  const getFilteredCourses = () => {
    let filtered = [...mockEnrolledCourses];

    if (filter === 'in-progress') {
      filtered = filtered?.filter(course => course?.progress > 0 && course?.progress < 100);
    } else if (filter === 'not-started') {
      filtered = filtered?.filter(course => course?.progress === 0);
    }

    switch (sortBy) {
      case 'recent':
        filtered?.sort((a, b) => new Date(b?.lastAccessed) - new Date(a?.lastAccessed));
        break;
      case 'progress':
        filtered?.sort((a, b) => b?.progress - a?.progress);
        break;
      case 'title':
        filtered?.sort((a, b) => a?.title?.localeCompare(b?.title));
        break;
      default:
        break;
    }

    return filtered;
  };

  const handleCourseClick = (courseId) => {
    navigate(`/course-details-page/${courseId}`);
  };

  const handleContinue = (e, courseId) => {
    e?.stopPropagation();
    navigate(`/course-player/${courseId}`);
  };

  const filteredCourses = getFilteredCourses();

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">My Courses</h2>
          <p className="text-sm text-text-secondary mt-1">
            {filteredCourses?.length} course{filteredCourses?.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e?.target?.value)}
            className="px-4 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {filterOptions?.map(option => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e?.target?.value)}
            className="px-4 py-2 border border-input rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {sortOptions?.map(option => (
              <option key={option?.value} value={option?.value}>
                Sort by: {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses?.map((course) => (
          <div
            key={course?.id}
            onClick={() => handleCourseClick(course?.id)}
            className="group bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-primary/20"
          >
            <div className="relative">
              <img
                src={course?.thumbnail}
                alt={course?.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                  {course?.level}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium">
                  {course?.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-foreground">{course?.rating}</span>
                </div>
              </div>

              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                {course?.title}
              </h3>

              <p className="text-sm text-text-secondary mb-3">
                By {course?.instructor}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Progress</span>
                  <span className="font-semibold text-primary">{course?.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all"
                    style={{ width: `${course?.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>{course?.completedLessons}/{course?.totalLessons} lessons</span>
                  <span>{course?.estimatedTimeRemaining} remaining</span>
                </div>
              </div>

              <Button
                variant="default"
                className="w-full"
                onClick={(e) => handleContinue(e, course?.id)}
                iconName="PlayCircle"
                iconPosition="left"
              >
                {course?.progress === 0 ? 'Start Course' : 'Continue Learning'}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="BookOpen" size={48} className="text-text-secondary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No courses found</h3>
          <p className="text-text-secondary mb-4">
            Try adjusting your filters or explore new courses
          </p>
          <Button variant="default" onClick={() => navigate('/course-listing-page')}>
            Browse Courses
          </Button>
        </div>
      )}
    </div>
  );
};

export default MyCoursesGrid;