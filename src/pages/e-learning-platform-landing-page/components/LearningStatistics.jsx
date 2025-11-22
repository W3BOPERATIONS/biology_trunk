import { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LearningStatistics = () => {
  const [counts, setCounts] = useState({
    students: 0,
    courses: 0,
    placements: 0,
    satisfaction: 0
  });

  const finalCounts = {
    students: 500000,
    courses: 1250,
    placements: 45000,
    satisfaction: 98
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => ({
        students: Math.min(prev?.students + Math.ceil(finalCounts?.students / steps), finalCounts?.students),
        courses: Math.min(prev?.courses + Math.ceil(finalCounts?.courses / steps), finalCounts?.courses),
        placements: Math.min(prev?.placements + Math.ceil(finalCounts?.placements / steps), finalCounts?.placements),
        satisfaction: Math.min(prev?.satisfaction + Math.ceil(finalCounts?.satisfaction / steps), finalCounts?.satisfaction)
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      id: 1,
      icon: "Users",
      value: counts?.students,
      suffix: "+",
      label: "Students Enrolled",
      color: "var(--color-primary)"
    },
    {
      id: 2,
      icon: "BookOpen",
      value: counts?.courses,
      suffix: "+",
      label: "Courses Completed",
      color: "var(--color-secondary)"
    },
    {
      id: 3,
      icon: "Briefcase",
      value: counts?.placements,
      suffix: "+",
      label: "Job Placements",
      color: "var(--color-success)"
    },
    {
      id: 4,
      icon: "ThumbsUp",
      value: counts?.satisfaction,
      suffix: "%",
      label: "Satisfaction Rate",
      color: "var(--color-accent)"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Join a thriving community of learners achieving remarkable results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-4">
                <Icon name={stat?.icon} size={32} color={stat?.color} />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat?.value?.toLocaleString()}{stat?.suffix}
              </div>
              <div className="text-text-secondary font-medium">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningStatistics;