import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Header from '../../components/Header';
import DashboardSidebar from './components/DashboardSidebar';
import WelcomeSection from './components/WelcomeSection';
import ContinueLearningSection from './components/ContinueLearningSection';
import MyCoursesGrid from './components/MyCoursesGrid';
import CompletedCoursesSection from './components/CompletedCoursesSection';
import WishlistSection from './components/WishlistSection';
import CertificatesSection from './components/CertificatesSection';
import PurchaseHistorySection from './components/PurchaseHistorySection';
import SettingsSection from './components/SettingsSection';
import ActivityFeed from './components/ActivityFeed';
import UpcomingDeadlines from './components/UpcomingDeadlines';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <WelcomeSection />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ContinueLearningSection />
              </div>
              <div className="space-y-6">
                <ActivityFeed />
                <UpcomingDeadlines />
              </div>
            </div>
          </div>
        );
      case 'my-courses':
        return <MyCoursesGrid />;
      case 'completed':
        return <CompletedCoursesSection />;
      case 'wishlist':
        return <WishlistSection />;
      case 'certificates':
        return <CertificatesSection />;
      case 'purchase-history':
        return <PurchaseHistorySection />;
      case 'settings':
        return <SettingsSection />;
      case 'help':
        return (
          <div className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Help Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: 'BookOpen',
                  title: 'Getting Started',
                  description: 'Learn how to make the most of your learning experience'
                },
                {
                  icon: 'HelpCircle',
                  title: 'FAQs',
                  description: 'Find answers to commonly asked questions'
                },
                {
                  icon: 'MessageCircle',
                  title: 'Contact Support',
                  description: 'Get help from our dedicated support team'
                },
                {
                  icon: 'Video',
                  title: 'Video Tutorials',
                  description: 'Watch step-by-step guides and tutorials'
                }
              ]?.map((item, index) => (
                <div
                  key={index}
                  className="bg-muted rounded-lg p-6 hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-primary/20"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item?.title}</h3>
                  <p className="text-sm text-text-secondary">{item?.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>My Dashboard - EduLanding Pro</title>
        <meta name="description" content="Manage your courses, track progress, and access certificates in your personalized learning dashboard" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <div className="flex">
          <DashboardSidebar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            isMobileOpen={isSidebarOpen}
            onMobileClose={() => setIsSidebarOpen(false)}
          />

          <main className="flex-1 min-h-screen">
            <div className="sticky top-0 z-30 bg-background border-b border-border lg:hidden">
              <div className="flex items-center justify-between p-4">
                <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Open sidebar"
                >
                  <Icon name="Menu" size={24} />
                </button>
              </div>
            </div>

            <div className="p-4 md:p-6 lg:p-8">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;