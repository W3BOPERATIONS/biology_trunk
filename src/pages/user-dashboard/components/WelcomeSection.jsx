import Icon from '../../../components/AppIcon';
import { mockUser, mockAchievements } from '../../../data/dashboardMockData';

const WelcomeSection = () => {
  const getGreeting = () => {
    const hour = new Date()?.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-2xl p-6 md:p-8 border border-border">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={mockUser?.avatar}
              alt={mockUser?.alt}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white" />
          </div>
          
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              {getGreeting()}, {mockUser?.name?.split(' ')?.[0]}! 👋
            </h1>
            <p className="text-text-secondary">
              Ready to continue your learning journey?
            </p>
            <div className="flex items-center space-x-4 mt-3">
              <div className="flex items-center space-x-2">
                <Icon name="Flame" size={18} className="text-orange-500" />
                <span className="text-sm font-semibold text-foreground">
                  {mockUser?.learningStreak} day streak
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="BookOpen" size={18} className="text-blue-500" />
                <span className="text-sm text-text-secondary">
                  {mockUser?.totalCoursesEnrolled} courses
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {mockAchievements?.slice(0, 3)?.map((achievement) => (
            <div
              key={achievement?.id}
              className="bg-card rounded-lg p-3 border border-border hover:shadow-lg transition-all cursor-pointer group"
              title={achievement?.description}
            >
              <Icon
                name={achievement?.icon}
                size={24}
                className={`${achievement?.color} group-hover:scale-110 transition-transform`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="BookOpen" size={20} className="text-blue-500" />
            <span className="text-xs text-text-secondary">Total</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{mockUser?.totalCoursesEnrolled}</p>
          <p className="text-xs text-text-secondary">Courses Enrolled</p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="Clock" size={20} className="text-green-500" />
            <span className="text-xs text-text-secondary">This month</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{mockUser?.hoursLearned}</p>
          <p className="text-xs text-text-secondary">Hours Learned</p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="Award" size={20} className="text-yellow-500" />
            <span className="text-xs text-text-secondary">Earned</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{mockUser?.certificatesEarned}</p>
          <p className="text-xs text-text-secondary">Certificates</p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="Flame" size={20} className="text-orange-500" />
            <span className="text-xs text-text-secondary">Current</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{mockUser?.learningStreak}</p>
          <p className="text-xs text-text-secondary">Day Streak</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;