import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../pages/e-learning-platform-landing-page/components/Footer';
import CourseHero from './components/CourseHero';
import CourseTabs from './components/CourseTabs';
import InstructorCard from './components/InstructorCard';
import EnrollmentCard from './components/EnrollmentCard';
import RelatedCourses from './components/RelatedCourses';
import { coursesData } from '../../data/coursesData';

const CourseDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setTimeout(() => {
      const foundCourse = coursesData?.find((c) => c?.slug === slug);
      if (foundCourse) {
        setCourse(foundCourse);
        const related = coursesData
          ?.filter((c) => c?.category === foundCourse?.category && c?.id !== foundCourse?.id)
          ?.slice(0, 4);
        setRelatedCourses(related);
      }
      setIsLoading(false);
    }, 800);
  }, [slug]);

  const handleEnroll = () => {
    alert(`Enrolling in: ${course?.title}`);
  };

  const handlePreview = () => {
    alert('Opening course preview...');
  };

  const handleAddToCart = () => {
    alert(`Added "${course?.title}" to cart!`);
  };

  const handleToggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const isInWishlist = wishlist?.includes(course?.id);
    
    if (isInWishlist) {
      const updated = wishlist?.filter((id) => id !== course?.id);
      localStorage.setItem('wishlist', JSON.stringify(updated));
      alert('Removed from wishlist');
    } else {
      wishlist?.push(course?.id);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert('Added to wishlist!');
    }
  };

  const handleShare = () => {
    if (navigator?.share) {
      navigator
        ?.share({
          title: course?.title,
          text: course?.description,
          url: window?.location?.href
        })
        ?.catch((err) => console.log('Error sharing:', err));
    } else {
      alert('Sharing not supported on this browser');
    }
  };

  const handleRelatedCourseClick = (relatedCourse) => {
    navigate(`/course-details-page/${relatedCourse?.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">Course Not Found</h2>
          <button
            onClick={() => navigate('/course-listing-page')}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Browse All Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{course?.title} | EduLanding Pro</title>
        <meta name="description" content={course?.description} />
        <meta property="og:title" content={course?.title} />
        <meta property="og:description" content={course?.description} />
        <meta property="og:image" content={course?.thumbnail} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <CourseHero
            course={course}
            onPreview={handlePreview}
            onToggleWishlist={handleToggleWishlist}
            onShare={handleShare}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <CourseTabs
                  course={course}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />

                <div className="mt-12">
                  <InstructorCard instructor={course?.instructor} />
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <EnrollmentCard
                    course={course}
                    onEnroll={handleEnroll}
                    onAddToCart={handleAddToCart}
                    onPreview={handlePreview}
                  />
                </div>
              </div>
            </div>
          </div>

          {relatedCourses?.length > 0 && (
            <RelatedCourses
              courses={relatedCourses}
              onCourseClick={handleRelatedCourseClick}
            />
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CourseDetailsPage;