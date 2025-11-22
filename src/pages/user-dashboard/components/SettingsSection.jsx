import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { mockUser } from '../../../data/dashboardMockData';

const SettingsSection = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: mockUser?.name,
    email: mockUser?.email,
    bio: mockUser?.bio
  });
  const [preferences, setPreferences] = useState(mockUser?.preferences);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: 'User' },
    { id: 'password', label: 'Password', icon: 'Lock' },
    { id: 'preferences', label: 'Preferences', icon: 'Settings' },
    { id: 'notifications', label: 'Notifications', icon: 'Bell' }
  ];

  const handleProfileUpdate = (e) => {
    e?.preventDefault();
    console.log('Updating profile:', profileData);
    alert('Profile updated successfully!');
  };

  const handlePasswordChange = (e) => {
    e?.preventDefault();
    if (passwordData?.newPassword !== passwordData?.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Changing password');
    alert('Password changed successfully!');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handlePreferencesUpdate = (e) => {
    e?.preventDefault();
    console.log('Updating preferences:', preferences);
    alert('Preferences updated successfully!');
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <h2 className="text-xl font-bold text-foreground mb-6">Account Settings</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-64 flex-shrink-0">
          <nav className="space-y-1">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                  transition-all duration-200
                  ${activeTab === tab?.id
                    ? 'bg-primary text-white' :'text-foreground hover:bg-muted'
                  }
                `}
              >
                <Icon name={tab?.icon} size={20} />
                <span className="font-medium">{tab?.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1">
          {activeTab === 'profile' && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Profile Information</h3>
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Profile Picture
                  </label>
                  <div className="flex items-center space-x-4">
                    <img
                      src={mockUser?.avatar}
                      alt={mockUser?.alt}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        Upload New
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profileData?.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e?.target?.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profileData?.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e?.target?.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Bio
                  </label>
                  <textarea
                    value={profileData?.bio}
                    onChange={(e) => setProfileData({ ...profileData, bio: e?.target?.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>

                <Button variant="default" type="submit">
                  Save Changes
                </Button>
              </form>
            </div>
          )}

          {activeTab === 'password' && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Change Password</h3>
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={passwordData?.currentPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e?.target?.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={passwordData?.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e?.target?.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={passwordData?.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e?.target?.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>

                <Button variant="default" type="submit">
                  Update Password
                </Button>
              </form>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Preferences</h3>
              <form onSubmit={handlePreferencesUpdate} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Theme
                  </label>
                  <select
                    value={preferences?.theme}
                    onChange={(e) => setPreferences({ ...preferences, theme: e?.target?.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences?.notifications}
                      onChange={(e) => setPreferences({ ...preferences, notifications: e?.target?.checked })}
                      className="w-5 h-5 rounded border-input"
                    />
                    <div>
                      <p className="font-medium text-foreground">Push Notifications</p>
                      <p className="text-sm text-text-secondary">Receive notifications about course updates</p>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences?.emailUpdates}
                      onChange={(e) => setPreferences({ ...preferences, emailUpdates: e?.target?.checked })}
                      className="w-5 h-5 rounded border-input"
                    />
                    <div>
                      <p className="font-medium text-foreground">Email Updates</p>
                      <p className="text-sm text-text-secondary">Get email updates about new courses</p>
                    </div>
                  </label>
                </div>

                <Button variant="default" type="submit">
                  Save Preferences
                </Button>
              </form>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Notification Settings</h3>
              <div className="space-y-4">
                {[
                  { id: 'course-updates', label: 'Course Updates', description: 'Get notified when courses you\'re enrolled in are updated' },
                  { id: 'new-courses', label: 'New Courses', description: 'Notifications about new courses in your favorite categories' },
                  { id: 'assignments', label: 'Assignments', description: 'Reminders about upcoming assignments and deadlines' },
                  { id: 'certificates', label: 'Certificates', description: 'Notifications when you earn new certificates' },
                  { id: 'promotions', label: 'Promotions', description: 'Special offers and discounts on courses' }
                ]?.map((setting) => (
                  <div key={setting?.id} className="flex items-start justify-between p-4 bg-muted rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{setting?.label}</p>
                      <p className="text-sm text-text-secondary mt-1">{setting?.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;