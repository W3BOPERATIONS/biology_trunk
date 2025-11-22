import Icon from '../../../components/AppIcon';
import { mockRecentActivity } from '../../../data/dashboardMockData';

const ActivityFeed = () => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    return date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {mockRecentActivity?.map((activity) => (
          <div
            key={activity?.id}
            className="flex items-start space-x-3 p-3 hover:bg-muted rounded-lg transition-colors"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-muted`}>
              <Icon name={activity?.icon} size={18} className={activity?.color} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground line-clamp-2">{activity?.title}</p>
              <p className="text-xs text-text-secondary mt-1">
                {formatTimestamp(activity?.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-sm text-primary hover:underline font-medium">
        View All Activity
      </button>
    </div>
  );
};

export default ActivityFeed;