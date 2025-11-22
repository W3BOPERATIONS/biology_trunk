import { useState } from 'react';
import Icon from './AppIcon';
import Image from './AppImage';
import Button from './ui/Button';

const CoursePreviewModal = ({ isOpen, onClose, course }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !course) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BookOpen' },
    { id: 'curriculum', label: 'Curriculum', icon: 'List' },
    { id: 'instructor', label: 'Instructor', icon: 'User' },
    { id: 'reviews', label: 'Reviews', icon: 'Star' },
  ];

  const curriculumModules = [
    {
      id: 1,
      title: 'Getting Started',
      lessons: 8,
      duration: '2h 15m',
      lessons_list: [
        { id: 1, title: 'Introduction to the Course', duration: '10m', preview: true },
        { id: 2, title: 'Setting Up Your Environment', duration: '15m', preview: true },
        { id: 3, title: 'Understanding the Basics', duration: '20m', preview: false },
      ],
    },
    {
      id: 2,
      title: 'Core Concepts',
      lessons: 12,
      duration: '4h 30m',
      lessons_list: [
        { id: 4, title: 'Fundamental Principles', duration: '25m', preview: false },
        { id: 5, title: 'Advanced Techniques', duration: '30m', preview: false },
      ],
    },
    {
      id: 3,
      title: 'Practical Applications',
      lessons: 10,
      duration: '3h 45m',
      lessons_list: [
        { id: 6, title: 'Real-world Projects', duration: '45m', preview: false },
        { id: 7, title: 'Best Practices', duration: '20m', preview: false },
      ],
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Excellent course! The instructor explains complex concepts in a very clear way.',
      helpful: 24,
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      date: '1 month ago',
      comment: 'This course helped me land my dream job. Highly recommended!',
      helpful: 18,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 4,
      date: '1 month ago',
      comment: 'Great content and practical examples. Would love more advanced topics.',
      helpful: 12,
    },
  ];

  const handleEnroll = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="bg-card rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e?.stopPropagation()}
      >
        <div className="modal-header">
          <h2 className="modal-title">{course?.title}</h2>
          <button onClick={onClose} className="modal-close">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="relative h-64 bg-muted">
            <Image
              src={course?.thumbnail || '/assets/images/course-preview.jpg'}
              alt={course?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:bg-accent/90 transition-all">
                <Icon name="Play" size={24} />
              </button>
            </div>
          </div>

          <div className="px-6 py-4 border-b border-border">
            <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={16} color="var(--color-warning)" />
                <span className="font-medium text-foreground">{course?.rating || '4.8'}</span>
                <span>({course?.reviews || '2,456'} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={16} />
                <span>{course?.students || '12,543'} students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={16} />
                <span>{course?.duration || '24 hours'}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="BarChart" size={16} />
                <span>{course?.level || 'All Levels'}</span>
              </div>
            </div>
          </div>

          <div className="border-b border-border">
            <div className="flex space-x-1 px-6">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab?.id
                      ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">What you'll learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Master the fundamentals and advanced concepts',
                      'Build real-world projects from scratch',
                      'Understand industry best practices',
                      'Prepare for professional certifications',
                      'Gain hands-on experience with tools',
                      'Learn from expert instructors',
                    ]?.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="Check" size={20} color="var(--color-success)" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Course Description</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {course?.description || 'This comprehensive course is designed to take you from beginner to advanced level. You\'ll learn through hands-on projects, real-world examples, and expert instruction. By the end of this course, you\'ll have the skills and confidence to apply what you\'ve learned in professional settings.'}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {[
                      'No prior experience required',
                      'A computer with internet connection',
                      'Willingness to learn and practice',
                    ]?.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2 text-text-secondary">
                        <span className="text-primary mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Course Content</h3>
                  <span className="text-sm text-text-secondary">
                    {curriculumModules?.reduce((acc, module) => acc + module.lessons, 0)} lessons • 
                    {curriculumModules?.reduce((acc, module) => {
                      const hours = parseInt(module.duration);
                      return acc + hours;
                    }, 0)}h total
                  </span>
                </div>

                {curriculumModules?.map((module) => (
                  <div key={module.id} className="border border-border rounded-lg">
                    <div className="px-4 py-3 bg-muted flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon name="ChevronDown" size={20} />
                        <div>
                          <h4 className="font-medium text-foreground">{module.title}</h4>
                          <span className="text-sm text-text-secondary">
                            {module.lessons} lessons • {module.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="divide-y divide-border">
                      {module.lessons_list?.map((lesson) => (
                        <div key={lesson?.id} className="px-4 py-3 flex items-center justify-between hover:bg-muted/50">
                          <div className="flex items-center space-x-3">
                            <Icon name="PlayCircle" size={16} />
                            <span className="text-sm text-foreground">{lesson?.title}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-text-secondary">{lesson?.duration}</span>
                            {lesson?.preview && (
                              <span className="text-xs text-primary font-medium">Preview</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'instructor' && (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                    <Icon name="User" size={40} color="var(--color-text-secondary)" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {course?.instructor || 'Dr. Jane Smith'}
                    </h3>
                    <p className="text-text-secondary mb-3">
                      Senior Software Engineer at Tech Corp
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={16} />
                        <span>4.9 Instructor Rating</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Award" size={16} />
                        <span>15,234 Reviews</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={16} />
                        <span>45,678 Students</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="PlayCircle" size={16} />
                        <span>12 Courses</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">About the Instructor</h4>
                  <p className="text-text-secondary leading-relaxed">
                    With over 15 years of industry experience, I've worked with leading tech companies and trained thousands of students worldwide. My passion is making complex topics accessible and helping students achieve their career goals through practical, hands-on learning.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-8 pb-6 border-b border-border">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-1">4.8</div>
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      {[1, 2, 3, 4, 5]?.map((star) => (
                        <Icon key={star} name="Star" size={16} color="var(--color-warning)" />
                      ))}
                    </div>
                    <div className="text-sm text-text-secondary">Course Rating</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1]?.map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <span className="text-sm text-text-secondary w-12">
                          {rating} star
                        </span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-warning"
                            style={{ width: `${rating === 5 ? 75 : rating === 4 ? 20 : 5}%` }}
                          />
                        </div>
                        <span className="text-sm text-text-secondary w-12 text-right">
                          {rating === 5 ? '75%' : rating === 4 ? '20%' : '5%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews?.map((review) => (
                    <div key={review?.id} className="border-b border-border pb-6 last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                            <Icon name="User" size={20} color="var(--color-text-secondary)" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{review?.name}</div>
                            <div className="text-sm text-text-secondary">{review?.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(review?.rating)]?.map((_, i) => (
                            <Icon key={i} name="Star" size={14} color="var(--color-warning)" />
                          ))}
                        </div>
                      </div>
                      <p className="text-text-secondary mb-3">{review?.comment}</p>
                      <button className="text-sm text-text-secondary hover:text-primary flex items-center space-x-1">
                        <Icon name="ThumbsUp" size={14} />
                        <span>Helpful ({review?.helpful})</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="px-6 py-4 border-t border-border bg-muted/50">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-foreground">
                ${course?.price || '49.99'}
              </div>
              {course?.originalPrice && (
                <div className="text-sm text-text-secondary line-through">
                  ${course?.originalPrice}
                </div>
              )}
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" onClick={onClose}>
                Save for Later
              </Button>
              <Button
                variant="default"
                className="cta-primary"
                onClick={handleEnroll}
                iconName="ShoppingCart"
                iconPosition="left"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreviewModal;