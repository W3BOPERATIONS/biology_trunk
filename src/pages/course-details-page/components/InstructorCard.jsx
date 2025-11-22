import Icon from '../../../components/AppIcon';

const InstructorCard = ({ instructor }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-xl font-bold text-foreground mb-6">About the Instructor</h3>
      <div className="flex items-start gap-4">
        <img
          src={instructor?.avatar}
          alt={instructor?.alt}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="text-lg font-bold text-foreground mb-1">{instructor?.name}</h4>
          <p className="text-text-secondary mb-4">{instructor?.title}</p>
          <p className="text-text-secondary mb-6">{instructor?.bio}</p>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Icon name="Star" size={16} className="text-yellow-400" />
                <span className="font-bold text-foreground">{instructor?.rating}</span>
              </div>
              <p className="text-xs text-text-secondary">Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Icon name="Users" size={16} className="text-primary" />
                <span className="font-bold text-foreground">
                  {(instructor?.students / 1000)?.toFixed(0)}K
                </span>
              </div>
              <p className="text-xs text-text-secondary">Students</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Icon name="BookOpen" size={16} className="text-secondary" />
                <span className="font-bold text-foreground">{instructor?.courses}</span>
              </div>
              <p className="text-xs text-text-secondary">Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;