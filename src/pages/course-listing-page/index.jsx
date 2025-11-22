import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../pages/e-learning-platform-landing-page/components/Footer';
import SearchBar from './components/SearchBar';
import FilterSidebar from './components/FilterSidebar';
import CourseCard from './components/CourseCard';
import SkeletonCourseCard from './components/SkeletonCourseCard';
import ViewToggle from './components/ViewToggle';
import SortDropdown from './components/SortDropdown';
import Pagination from './components/Pagination';
import RecentlyViewedBar from './components/RecentlyViewedBar';
import EmptyState from './components/EmptyState';
import { coursesData, categoriesData } from '../../data/coursesData';
import { motion, AnimatePresence } from 'framer-motion';

const CourseListingPage = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [minRating, setMinRating] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const coursesPerPage = 12;

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesData);
      setFilteredCourses(coursesData);
      setIsLoading(false);
    }, 1000);

    const storedRecentlyViewed = localStorage.getItem('recentlyViewed');
    if (storedRecentlyViewed) {
      setRecentlyViewed(JSON.parse(storedRecentlyViewed));
    }

    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    applyFilters();
  }, [
    searchQuery,
    selectedCategories,
    selectedLevels,
    priceRange,
    minRating,
    selectedDuration,
    sortBy,
    courses
  ]);

  const applyFilters = () => {
    let filtered = [...courses];

    if (searchQuery) {
      filtered = filtered?.filter(
        (course) =>
          course?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
          course?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
          course?.instructor?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    if (selectedCategories?.length > 0) {
      filtered = filtered?.filter((course) =>
        selectedCategories?.includes(course?.category)
      );
    }

    if (selectedLevels?.length > 0) {
      filtered = filtered?.filter((course) =>
        selectedLevels?.includes(course?.level)
      );
    }

    filtered = filtered?.filter(
      (course) => course?.price >= priceRange?.[0] && course?.price <= priceRange?.[1]
    );

    if (minRating > 0) {
      filtered = filtered?.filter((course) => course?.rating >= minRating);
    }

    if (selectedDuration) {
      filtered = filtered?.filter((course) => {
        const hours = parseInt(course?.duration);
        switch (selectedDuration) {
          case 'short':
            return hours < 10;
          case 'medium':
            return hours >= 10 && hours < 30;
          case 'long':
            return hours >= 30;
          default:
            return true;
        }
      });
    }

    filtered = sortCourses(filtered, sortBy);

    setFilteredCourses(filtered);
    setCurrentPage(1);
  };

  const sortCourses = (coursesToSort, sortType) => {
    const sorted = [...coursesToSort];
    switch (sortType) {
      case 'popularity':
        return sorted?.sort((a, b) => b?.studentsEnrolled - a?.studentsEnrolled);
      case 'rating':
        return sorted?.sort((a, b) => b?.rating - a?.rating);
      case 'newest':
        return sorted?.sort((a, b) => new Date(b?.lastUpdated) - new Date(a?.lastUpdated));
      case 'price-low':
        return sorted?.sort((a, b) => a?.price - b?.price);
      case 'price-high':
        return sorted?.sort((a, b) => b?.price - a?.price);
      default:
        return sorted;
    }
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedLevels([]);
    setPriceRange([0, 200]);
    setMinRating(0);
    setSelectedDuration('');
    setSortBy('relevance');
  };

  const handleCourseClick = (course) => {
    const updatedRecentlyViewed = [
      course,
      ...recentlyViewed?.filter((c) => c?.id !== course?.id)
    ]?.slice(0, 5);
    setRecentlyViewed(updatedRecentlyViewed);
    localStorage.setItem('recentlyViewed', JSON.stringify(updatedRecentlyViewed));
    navigate(`/course-details-page/${course?.slug}`);
  };

  const handleToggleWishlist = (courseId) => {
    const updatedWishlist = wishlist?.includes(courseId)
      ? wishlist?.filter((id) => id !== courseId)
      : [...wishlist, courseId];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses?.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses?.length / coursesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Course Catalog - Discover 10,000+ Expert-Led Online Courses | EduLanding Pro</title>
        <meta
          name="description"
          content="Browse our extensive catalog of online courses. Filter by category, level, price, and rating to find the perfect course for your learning goals."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Discover Your Next Course
              </h1>
              <p className="text-lg text-text-secondary mb-6">
                {filteredCourses?.length} courses available
              </p>
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex gap-8">
              <div className="hidden lg:block w-64 flex-shrink-0">
                <FilterSidebar
                  categories={categoriesData}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  selectedLevels={selectedLevels}
                  setSelectedLevels={setSelectedLevels}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  minRating={minRating}
                  setMinRating={setMinRating}
                  selectedDuration={selectedDuration}
                  setSelectedDuration={setSelectedDuration}
                  onClearFilters={handleClearFilters}
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsMobileFilterOpen(true)}
                      className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      <span>Filters</span>
                      {(selectedCategories?.length > 0 ||
                        selectedLevels?.length > 0 ||
                        minRating > 0) && (
                        <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          {selectedCategories?.length +
                            selectedLevels?.length +
                            (minRating > 0 ? 1 : 0)}
                        </span>
                      )}
                    </button>
                    <span className="text-text-secondary">
                      Showing {indexOfFirstCourse + 1}-
                      {Math.min(indexOfLastCourse, filteredCourses?.length)} of{' '}
                      {filteredCourses?.length} courses
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
                    <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
                  </div>
                </div>

                {isLoading ? (
                  <div
                    className={
                      viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' :'space-y-4'
                    }
                  >
                    {[...Array(6)]?.map((_, index) => (
                      <SkeletonCourseCard key={index} viewMode={viewMode} />
                    ))}
                  </div>
                ) : filteredCourses?.length === 0 ? (
                  <EmptyState onClearFilters={handleClearFilters} />
                ) : (
                  <>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={viewMode}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={
                          viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' :'space-y-4'
                        }
                      >
                        {currentCourses?.map((course) => (
                          <CourseCard
                            key={course?.id}
                            course={course}
                            viewMode={viewMode}
                            isInWishlist={wishlist?.includes(course?.id)}
                            onCourseClick={handleCourseClick}
                            onToggleWishlist={handleToggleWishlist}
                          />
                        ))}
                      </motion.div>
                    </AnimatePresence>

                    {totalPages > 1 && (
                      <div className="mt-12">
                        <Pagination
                          currentPage={currentPage}
                          totalPages={totalPages}
                          onPageChange={handlePageChange}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {recentlyViewed?.length > 0 && (
            <RecentlyViewedBar
              courses={recentlyViewed}
              onCourseClick={handleCourseClick}
            />
          )}
        </main>

        <Footer />

        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileFilterOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 w-80 bg-card shadow-xl overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-2 hover:bg-muted rounded-lg"
                  >
                    ✕
                  </button>
                </div>
                <FilterSidebar
                  categories={categoriesData}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  selectedLevels={selectedLevels}
                  setSelectedLevels={setSelectedLevels}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  minRating={minRating}
                  setMinRating={setMinRating}
                  selectedDuration={selectedDuration}
                  setSelectedDuration={setSelectedDuration}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseListingPage;