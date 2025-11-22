import { useState, useEffect, useRef } from 'react';
import Icon from './AppIcon';
import Button from './ui/Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const categoryDropdownRef = useRef(null);

  const courseCategories = [
    { id: 1, name: 'Web Development', count: 156, difficulty: 'All Levels' },
    { id: 2, name: 'Data Science', count: 89, difficulty: 'Intermediate' },
    { id: 3, name: 'Mobile Development', count: 67, difficulty: 'All Levels' },
    { id: 4, name: 'Cloud Computing', count: 54, difficulty: 'Advanced' },
    { id: 5, name: 'Cybersecurity', count: 43, difficulty: 'Intermediate' },
    { id: 6, name: 'AI & Machine Learning', count: 78, difficulty: 'Advanced' },
    { id: 7, name: 'DevOps', count: 45, difficulty: 'Intermediate' },
    { id: 8, name: 'UI/UX Design', count: 92, difficulty: 'Beginner' },
    { id: 9, name: 'Digital Marketing', count: 71, difficulty: 'All Levels' },
    { id: 10, name: 'Business Analytics', count: 38, difficulty: 'Intermediate' },
    { id: 11, name: 'Project Management', count: 52, difficulty: 'All Levels' },
    { id: 12, name: 'Blockchain', count: 29, difficulty: 'Advanced' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryDropdownRef?.current && !categoryDropdownRef?.current?.contains(event?.target)) {
        setIsCategoryDropdownOpen(false);
      }
    };

    if (isCategoryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCategoryDropdownOpen]);

  useEffect(() => {
    if (isMobileMenuOpen || isAuthModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isAuthModalOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleCategoryClick = (categoryName) => {
    setIsCategoryDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleFreeTrial = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header-nav">
        <div className="header-container">
          <div className="header-content">
            <div className="header-logo">
              <div className="header-logo-icon">
                {/* <Icon name="GraduationCap" size={20} color="var(--color-primary)" /> */}
                <img src="/1.png" alt="Biology" width={80} height={80} />
                {/* <img src="/1.png" alt="Biology" className="w-95 h-95 object-contain" /> */}


              </div>
              <span className="header-logo-text">BIOLOGY TRUNK</span>
            </div>

            <nav className="header-nav-links">
              <div className="relative" ref={categoryDropdownRef}>
                <button
                  onClick={toggleCategoryDropdown}
                  className="header-nav-link flex items-center space-x-1"
                >
                  <span>Courses</span>
                  <Icon 
                    name={isCategoryDropdownOpen ? "ChevronUp" : "ChevronDown"} 
                    size={16} 
                  />
                </button>

                {isCategoryDropdownOpen && (
                  <div className="category-dropdown">
                    {courseCategories?.map((category) => (
                      <div
                        key={category?.id}
                        onClick={() => handleCategoryClick(category?.name)}
                        className="category-item"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{category?.name}</span>
                          <span className="text-xs text-text-secondary">{category?.count}</span>
                        </div>
                        <div className="text-xs text-text-secondary mt-1">
                          {category?.difficulty}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => openAuthModal('login')} className="header-nav-link">
                Login
              </button>
            </nav>

            <div className="header-actions">
              <div className="hidden lg:block">
                <Button
                  variant="default"
                  className="cta-primary"
                  onClick={handleFreeTrial}
                >
                  Start Free Trial
                </Button>
              </div>

              <button
                onClick={toggleMobileMenu}
                className="header-mobile-toggle"
                aria-label="Toggle mobile menu"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <>
          <div 
            className="mobile-menu-overlay"
            onClick={toggleMobileMenu}
          />
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-text-secondary px-4 py-2">
                  Course Categories
                </div>
                {courseCategories?.map((category) => (
                  <button
                    key={category?.id}
                    onClick={() => handleCategoryClick(category?.name)}
                    className="mobile-menu-link w-full text-left"
                  >
                    <div className="flex justify-between items-center">
                      <span>{category?.name}</span>
                      <span className="text-xs text-text-secondary">{category?.count}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="border-t border-border my-4" />

              <button
                onClick={() => openAuthModal('login')}
                className="mobile-menu-link w-full text-left"
              >
                Login
              </button>

              <button
                onClick={() => openAuthModal('register')}
                className="mobile-menu-link w-full text-left"
              >
                Register
              </button>

              <div className="mt-6">
                <Button
                  variant="default"
                  className="cta-primary w-full"
                  onClick={handleFreeTrial}
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      {isAuthModalOpen && (
        <div className="modal-overlay" onClick={closeAuthModal}>
          <div className="modal-content" onClick={(e) => e?.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {authMode === 'login' ? 'Welcome Back' : 'Create Your Account'}
              </h2>
              <button onClick={closeAuthModal} className="modal-close">
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    iconName="Mail"
                    iconPosition="left"
                  >
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    iconName="Github"
                    iconPosition="left"
                  >
                    GitHub
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-card px-2 text-text-secondary">
                      Or continue with email
                    </span>
                  </div>
                </div>

                <form className="space-y-4">
                  {authMode === 'register' && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Enter your full name"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your password"
                    />
                  </div>

                  {authMode === 'login' && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-input" />
                        <span className="text-sm text-text-secondary">Remember me</span>
                      </label>
                      <button type="button" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <Button
                    variant="default"
                    className="cta-primary w-full"
                    type="submit"
                  >
                    {authMode === 'login' ? 'Sign In' : 'Create Account'}
                  </Button>
                </form>

                <div className="text-center text-sm text-text-secondary">
                  {authMode === 'login' ? (
                    <>
                      Don't have an account?{' '}
                      <button
                        onClick={() => setAuthMode('register')}
                        className="text-primary hover:underline font-medium"
                      >
                        Sign up
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{' '}
                      <button
                        onClick={() => setAuthMode('login')}
                        className="text-primary hover:underline font-medium"
                      >
                        Sign in
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;