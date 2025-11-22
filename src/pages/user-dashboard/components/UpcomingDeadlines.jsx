import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { mockUpcomingDeadlines } from '../../../data/dashboardMockData';

const UpcomingDeadlines = () => {
  const formatDueDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `In ${diffDays} days`;
    return date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'assignment':
        return 'FileText';
      case 'quiz':
        return 'HelpCircle';
      case 'review':
        return 'Eye';
      default:
        return 'Calendar';
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Upcoming Deadlines</h3>
        <Icon name="Calendar" size={20} className="text-primary" />
      </div>

      {mockUpcomingDeadlines?.length > 0 ? (
        <div className="space-y-3">
          {mockUpcomingDeadlines?.map((deadline) => (
            <div
              key={deadline?.id}
              className={`border rounded-lg p-4 hover:shadow-md transition-all ${getPriorityColor(deadline?.priority)}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start space-x-3 flex-1">
                  <Icon name={getTypeIcon(deadline?.type)} size={20} />
                  <div className="flex-1">
                    <p className="font-semibold text-sm line-clamp-1">
                      {deadline?.taskTitle}
                    </p>
                    <p className="text-xs opacity-80 mt-1">
                      {deadline?.courseTitle}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${getPriorityColor(deadline?.priority)}`}>
                  {deadline?.priority}
                </span>
              </div>

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-current/20">
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span className="text-xs font-medium">
                    Due {formatDueDate(deadline?.dueDate)}
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <Icon name="CheckCircle" size={48} className="text-green-500 mx-auto mb-3" />
          <p className="text-sm text-text-secondary">No upcoming deadlines</p>
        </div>
      )}
    </div>
  );
};

export default UpcomingDeadlines;