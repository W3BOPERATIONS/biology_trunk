import Icon from '../../../components/AppIcon';

const PlatformFeaturesGrid = () => {
  const features = [
    {
      id: 1,
      icon: "Smartphone",
      title: "Mobile Learning",
      description: "Learn on-the-go with our mobile app. Download lessons for offline access and continue your progress anywhere."
    },
    {
      id: 2,
      icon: "Award",
      title: "Industry Certificates",
      description: "Earn recognized certificates upon completion. Boost your resume and LinkedIn profile with verified credentials."
    },
    {
      id: 3,
      icon: "Infinity",
      title: "Lifetime Access",
      description: "One-time payment for lifetime access. Return to course materials anytime and stay updated with new content."
    },
    {
      id: 4,
      icon: "Users",
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience at top companies."
    },
    {
      id: 5,
      icon: "MessageSquare",
      title: "Community Support",
      description: "Join a vibrant community of learners. Get help from peers and instructors through forums and chat."
    },
    {
      id: 6,
      icon: "Code",
      title: "Hands-on Projects",
      description: "Build real-world projects that showcase your skills. Create a portfolio that impresses employers."
    },
    {
      id: 7,
      icon: "Zap",
      title: "Self-Paced Learning",
      description: "Learn at your own speed. No deadlines or pressure—complete courses on your schedule."
    },
    {
      id: 8,
      icon: "BarChart3",
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics. Set goals and celebrate milestones."
    },
    {
      id: 9,
      icon: "Headphones",
      title: "24/7 Support",
      description: "Get help whenever you need it. Our support team is available around the clock to assist you."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our platform provides all the tools and support you need to master new skills and advance your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature) => (
            <div
              key={feature?.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <Icon
                  name={feature?.icon}
                  size={28}
                  color="var(--color-primary)"
                  className="group-hover:text-primary-foreground"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature?.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeaturesGrid;