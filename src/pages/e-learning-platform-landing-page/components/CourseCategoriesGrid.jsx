import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CourseCategoriesGrid = ({ onPreviewLesson }) => {
  const categories = [
    {
      id: 1,
      name: "Web Development",
      icon: "Code",
      courses: 156,
      rating: 4.8,
      startingPrice: 49,
      color: "var(--color-primary)"
    },
    {
      id: 2,
      name: "Data Science",
      icon: "Database",
      courses: 89,
      rating: 4.9,
      startingPrice: 59,
      color: "var(--color-secondary)"
    },
    {
      id: 3,
      name: "Mobile Development",
      icon: "Smartphone",
      courses: 67,
      rating: 4.7,
      startingPrice: 54,
      color: "var(--color-accent)"
    },
    {
      id: 4,
      name: "Cloud Computing",
      icon: "Cloud",
      courses: 54,
      rating: 4.8,
      startingPrice: 64,
      color: "var(--color-success)"
    },
    {
      id: 5,
      name: "Cybersecurity",
      icon: "Shield",
      courses: 43,
      rating: 4.9,
      startingPrice: 69,
      color: "var(--color-error)"
    },
    {
      id: 6,
      name: "AI & Machine Learning",
      icon: "Brain",
      courses: 78,
      rating: 4.9,
      startingPrice: 74,
      color: "var(--color-warning)"
    },
    {
      id: 7,
      name: "DevOps",
      icon: "GitBranch",
      courses: 45,
      rating: 4.7,
      startingPrice: 59,
      color: "var(--color-primary)"
    },
    {
      id: 8,
      name: "UI/UX Design",
      icon: "Palette",
      courses: 92,
      rating: 4.8,
      startingPrice: 49,
      color: "var(--color-secondary)"
    },
    {
      id: 9,
      name: "Digital Marketing",
      icon: "TrendingUp",
      courses: 71,
      rating: 4.6,
      startingPrice: 44,
      color: "var(--color-accent)"
    },
    {
      id: 10,
      name: "Business Analytics",
      icon: "BarChart",
      courses: 38,
      rating: 4.8,
      startingPrice: 54,
      color: "var(--color-success)"
    },
    {
      id: 11,
      name: "Project Management",
      icon: "Briefcase",
      courses: 52,
      rating: 4.7,
      startingPrice: 49,
      color: "var(--color-warning)"
    },
    {
      id: 12,
      name: "Blockchain",
      icon: "Link",
      courses: 29,
      rating: 4.9,
      startingPrice: 79,
      color: "var(--color-error)"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Explore Course Categories
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Choose from 12 popular categories with over 500 courses designed by industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories?.map((category) => (
            <div
              key={category?.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-lg mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${category?.color}15` }}>
                <Icon name={category?.icon} size={32} color={category?.color} />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {category?.name}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">{category?.courses} courses</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} color="var(--color-warning)" />
                    <span className="text-foreground font-medium">{category?.rating}</span>
                  </div>
                </div>
                <div className="text-sm text-text-secondary">
                  Starting at <span className="text-foreground font-semibold">${category?.startingPrice}</span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => onPreviewLesson(category)}
                iconName="Play"
                iconPosition="left"
              >
                Preview Free Lesson
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategoriesGrid;