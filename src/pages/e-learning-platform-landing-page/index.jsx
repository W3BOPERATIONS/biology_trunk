import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import CoursePreviewModal from '../../components/CoursePreviewModal';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import CourseCategoriesGrid from './components/CourseCategoriesGrid';
import FeaturedCoursesCarousel from './components/FeaturedCoursesCarousel';
import StudentSuccessStories from './components/StudentSuccessStories';
import PlatformFeaturesGrid from './components/PlatformFeaturesGrid';
import PricingSection from './components/PricingSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CompanyLogos from './components/CompanyLogos';
import LearningStatistics from './components/LearningStatistics';
import FAQSection from './components/FAQSection';
import FreeTrialForm from './components/FreeTrialForm';
import Footer from './components/Footer';

const ELearningPlatformLandingPage = () => {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    const notificationTimer = setInterval(() => {
      const notifications = [
        'Sarah from New York just enrolled in Web Development Bootcamp',
        'Michael from London completed Data Science course',
        'Emma from Sydney just earned her certification',
        'David from Toronto started his free trial'
      ];
      const randomNotification = notifications?.[Math.floor(Math.random() * notifications?.length)];
      setNotificationMessage(randomNotification);
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }, 10000);

    return () => clearInterval(notificationTimer);
  }, []);

  const handleStartTrial = () => {
    const trialSection = document.getElementById('free-trial-section');
    if (trialSection) {
      trialSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrowseCourses = () => {
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      coursesSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreviewLesson = (category) => {
    const mockCourse = {
      id: category?.id,
      title: `${category?.name} Fundamentals`,
      description: `Master the essentials of ${category?.name} with hands-on projects and expert instruction.`,
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      instructor: 'Expert Instructor',
      rating: category?.rating,
      reviews: category?.courses * 50,
      students: category?.courses * 100,
      duration: '24 hours',
      level: 'All Levels',
      price: category?.startingPrice,
      originalPrice: category?.startingPrice * 2
    };
    setSelectedCourse(mockCourse);
    setIsPreviewModalOpen(true);
  };

  const handleCoursePreview = (course) => {
    setSelectedCourse(course);
    setIsPreviewModalOpen(true);
  };

  const handleSelectPlan = (plan) => {
    alert(`You selected the ${plan?.name} plan! Redirecting to checkout...`);
  };

  const handleTrialSubmit = (formData) => {
    console.log('Trial signup data:', formData);
    alert(`Welcome aboard, ${formData?.fullName}! Check your email (${formData?.email}) for login credentials and next steps.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="main-content">
        <HeroSection 
          onStartTrial={handleStartTrial}
          onBrowseCourses={handleBrowseCourses}
        />
        
        <ProblemSection />
        
        <SolutionSection />
        
        <div id="courses-section">
          <CourseCategoriesGrid onPreviewLesson={handlePreviewLesson} />
        </div>
        
        <FeaturedCoursesCarousel onCoursePreview={handleCoursePreview} />
        
        <StudentSuccessStories />
        
        <PlatformFeaturesGrid />
        
        <PricingSection onSelectPlan={handleSelectPlan} />
        
        <TestimonialsCarousel />
        
        <CompanyLogos />
        
        <LearningStatistics />
        
        <FAQSection />
        
        <div id="free-trial-section">
          <FreeTrialForm onSubmit={handleTrialSubmit} />
        </div>
      </main>

      <Footer />

      <CoursePreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
        course={selectedCourse}
      />

      {showNotification && (
        <div className="fixed bottom-8 left-8 bg-card border border-border rounded-lg shadow-xl p-4 max-w-sm animate-slideUp z-50">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-foreground font-medium">
                {notificationMessage}
              </p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-text-secondary hover:text-foreground"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ELearningPlatformLandingPage;