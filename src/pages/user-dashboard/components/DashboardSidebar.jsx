import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const DashboardSidebar = ({ activeTab, onTabChange, isMobileOpen, onMobileClose }) => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({});

  const menuItems = [
    {
      id: 'overview',
      label: 'Dashboard Overview',
      icon: 'LayoutDashboard',
      color: 'text-blue-500'
    },
    {
      id: 'my-courses',
      label: 'My Courses',
      icon: 'BookOpen',
      color: 'text-green-500',
      badge: '4'
    },
    {
      id: 'completed',
      label: 'Completed Courses',
      icon: 'CheckCircle',
      color: 'text-purple-500',
      badge: '5'
    },
    {
      id: 'wishlist',
      label: 'Wishlist',
      icon: 'Heart',
      color: 'text-red-500',
      badge: '3'
    },
    {
      id: 'certificates',
      label: 'Certificates',
      icon: 'Award',
      color: 'text-yellow-500'
    },
    {
      id: 'purchase-history',
      label: 'Purchase History',
      icon: 'ShoppingBag',
      color: 'text-indigo-500'
    },
    {
      id: 'settings',
      label: 'Account Settings',
      icon: 'Settings',
      color: 'text-gray-500'
    },
    {
      id: 'help',
      label: 'Help Center',
      icon: 'HelpCircle',
      color: 'text-orange-500'
    }
  ];

  const handleTabClick = (tabId) => {
    onTabChange(tabId);
    if (onMobileClose) {
      onMobileClose();
    }
  };

  const handleBackToHome = () => {
    navigate('/');
    if (onMobileClose) {
      onMobileClose();
    }
  };

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen bg-card border-r border-border
          w-64 z-50 transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}
      >
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={20} color="white" />
              </div>
              <span className="font-semibold text-foreground">EduLanding Pro</span>
            </div>
            <button
              onClick={onMobileClose}
              className="lg:hidden text-text-secondary hover:text-foreground"
              aria-label="Close sidebar"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems?.map((item) => (
            <button
              key={item?.id}
              onClick={() => handleTabClick(item?.id)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg
                transition-all duration-200 group
                ${activeTab === item?.id
                  ? 'bg-primary text-white' :'text-foreground hover:bg-muted'
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <Icon
                  name={item?.icon}
                  size={20}
                  className={activeTab === item?.id ? 'text-white' : item?.color}
                />
                <span className="font-medium text-sm">{item?.label}</span>
              </div>
              {item?.badge && (
                <span
                  className={`
                    px-2 py-1 text-xs rounded-full font-semibold
                    ${activeTab === item?.id
                      ? 'bg-white text-primary' :'bg-primary text-white'
                    }
                  `}
                >
                  {item?.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <button
            onClick={handleBackToHome}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg
              text-foreground hover:bg-muted transition-colors"
          >
            <Icon name="ArrowLeft" size={20} />
            <span className="font-medium text-sm">Back to Home</span>
          </button>
        </div>

        <div className="p-4 border-t border-border">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Zap" size={20} color="white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  Upgrade to Premium
                </h4>
                <p className="text-xs text-text-secondary mb-3">
                  Get unlimited access to all courses
                </p>
                <button className="w-full bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;