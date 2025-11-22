import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CourseTabs = ({ course, activeTab, setActiveTab }) => {
  const [expandedSections, setExpandedSections] = useState([]);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BookOpen' },
    { id: 'curriculum', label: 'Curriculum', icon: 'List' },
    { id: 'instructor', label: 'Instructor', icon: 'User' },
    { id: 'reviews', label: 'Reviews', icon: 'Star' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) =>
      prev?.includes(sectionId)
        ? prev?.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const renderOverview = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">What you'll learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course?.whatYouWillLearn?.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Icon name="Check" size={20} className="text-success flex-shrink-0 mt-1" />
              <span className="text-text-secondary">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
        <ul className="space-y-2">
          {course?.requirements?.map((req, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-text-secondary mt-1">•</span>
              <span className="text-text-secondary">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Course Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {course?.features?.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <Icon name="CheckCircle" size={20} className="text-success" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurriculum = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Course Curriculum</h2>
        <div className="text-text-secondary">
          <span className="font-semibold">{course?.courseContent?.sections} sections</span>
          {' • '}
          <span className="font-semibold">{course?.courseContent?.lectures} lectures</span>
          {' • '}
          <span className="font-semibold">{course?.courseContent?.totalDuration}</span>
        </div>
      </div>

      {course?.curriculum?.map((section) => (
        <div key={section?.id} className="border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection(section?.id)}
            className="w-full flex items-center justify-between p-4 bg-muted hover:bg-muted/80 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Icon
                name={expandedSections?.includes(section?.id) ? 'ChevronDown' : 'ChevronRight'}
                size={20}
              />
              <div className="text-left">
                <h3 className="font-semibold text-foreground">{section?.title}</h3>
                <p className="text-sm text-text-secondary">
                  {section?.lectures} lectures • {section?.duration}
                </p>
              </div>
            </div>
          </button>

          {expandedSections?.includes(section?.id) && (
            <div className="bg-card">
              {section?.lessons?.map((lesson) => (
                <div
                  key={lesson?.id}
                  className="flex items-center justify-between p-4 border-t border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon name="PlayCircle" size={18} className="text-text-secondary" />
                    <span className="text-foreground">{lesson?.title}</span>
                    {lesson?.preview && (
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        Preview
                      </span>
                    )}
                  </div>
                  <span className="text-text-secondary text-sm">{lesson?.duration}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderInstructor = () => (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <img
          src={course?.instructor?.avatar}
          alt={course?.instructor?.alt}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {course?.instructor?.name}
          </h2>
          <p className="text-lg text-text-secondary mb-4">{course?.instructor?.title}</p>
          <p className="text-text-secondary mb-6">{course?.instructor?.bio}</p>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Star" size={18} className="text-yellow-400" />
                <span className="text-xl font-bold text-foreground">
                  {course?.instructor?.rating}
                </span>
              </div>
              <p className="text-sm text-text-secondary">Instructor Rating</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Users" size={18} className="text-primary" />
                <span className="text-xl font-bold text-foreground">
                  {course?.instructor?.students?.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-text-secondary">Students</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Icon name="BookOpen" size={18} className="text-secondary" />
                <span className="text-xl font-bold text-foreground">
                  {course?.instructor?.courses}
                </span>
              </div>
              <p className="text-sm text-text-secondary">Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviews = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Student Reviews</h2>
        <div className="flex items-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-foreground mb-2">{course?.rating}</div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)]?.map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={20}
                  className={
                    i < Math?.floor(course?.rating)
                      ? 'text-yellow-400 fill-yellow-400' :'text-gray-300'
                  }
                />
              ))}
            </div>
            <p className="text-text-secondary">Course Rating</p>
          </div>

          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1]?.map((stars) => {
              const percentage = Math?.random() * 80 + 10;
              return (
                <div key={stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-24">
                    {[...Array(stars)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-text-secondary w-12">
                    {Math?.round(percentage)}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {course?.reviews?.map((review) => (
          <div key={review?.id} className="border border-border rounded-lg p-6">
            <div className="flex items-start gap-4 mb-4">
              <img
                src={review?.user?.avatar}
                alt={review?.user?.alt}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{review?.user?.name}</h4>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className={
                            i < review?.rating
                              ? 'text-yellow-400 fill-yellow-400' :'text-gray-300'
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-text-secondary">{review?.date}</span>
                </div>
                <p className="text-text-secondary mb-3">{review?.comment}</p>
                {review?.verified && (
                  <span className="text-xs font-semibold text-success flex items-center gap-1">
                    <Icon name="CheckCircle" size={14} />
                    Verified Purchase
                  </span>
                )}
                <div className="flex items-center gap-4 mt-4">
                  <button className="text-sm text-text-secondary hover:text-foreground">
                    Helpful ({review?.helpful})
                  </button>
                  <button className="text-sm text-text-secondary hover:text-foreground">
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFAQ = () => {
    const faqs = [
      {
        question: 'How long do I have access to the course?',
        answer: 'You have lifetime access to the course materials, including all future updates.'
      },
      {
        question: 'Can I download the course videos?',
        answer: 'Yes! All course videos are available for download so you can learn offline.'
      },
      {
        question: 'Is there a money-back guarantee?',
        answer: 'Yes, we offer a 30-day money-back guarantee if you are not satisfied with the course.'
      },
      {
        question: 'Will I receive a certificate upon completion?',
        answer: 'Yes, you will receive a certificate of completion that you can share on LinkedIn and your resume.'
      },
      {
        question: 'Can I ask questions if I get stuck?',
        answer: 'Absolutely! You can ask questions in the Q&A section and our instructors respond quickly.'
      }
    ];

    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Frequently Asked Questions
        </h2>
        {faqs?.map((faq, index) => (
          <div key={index} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(`faq-${index}`)}
              className="w-full flex items-center justify-between p-4 bg-muted hover:bg-muted/80 transition-colors"
            >
              <h3 className="font-semibold text-foreground text-left">{faq?.question}</h3>
              <Icon
                name={expandedSections?.includes(`faq-${index}`) ? 'ChevronDown' : 'ChevronRight'}
                size={20}
              />
            </button>
            {expandedSections?.includes(`faq-${index}`) && (
              <div className="p-4 bg-card border-t border-border">
                <p className="text-text-secondary">{faq?.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="border-b border-border mb-8">
        <div className="flex gap-6 overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center gap-2 pb-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab?.id
                  ? 'border-primary text-primary font-semibold' :'border-transparent text-text-secondary hover:text-foreground'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'curriculum' && renderCurriculum()}
        {activeTab === 'instructor' && renderInstructor()}
        {activeTab === 'reviews' && renderReviews()}
        {activeTab === 'faq' && renderFAQ()}
      </div>
    </div>
  );
};

export default CourseTabs;