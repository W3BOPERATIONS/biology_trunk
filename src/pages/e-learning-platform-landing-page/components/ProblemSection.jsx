import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const problems = [
    {
      id: 1,
      icon: "AlertCircle",
      stat: "67%",
      title: "Skill Gap Crisis",
      description: "of employers report difficulty finding candidates with required technical skills",
      color: "var(--color-error)"
    },
    {
      id: 2,
      icon: "TrendingDown",
      stat: "3.2M",
      title: "Job Market Competition",
      description: "unfilled tech positions globally due to lack of qualified professionals",
      color: "var(--color-warning)"
    },
    {
      id: 3,
      icon: "Clock",
      stat: "5 Years",
      title: "Career Stagnation",
      description: "average time professionals stay in same role without skill advancement",
      color: "var(--color-text-secondary)"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Challenge Facing Today's Professionals
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            The job market is evolving faster than ever. Without continuous learning, your career growth stalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems?.map((problem) => (
            <div
              key={problem?.id}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-6 mx-auto">
                <Icon name={problem?.icon} size={32} color={problem?.color} />
              </div>
              <div className="text-4xl font-bold text-center mb-2" style={{ color: problem?.color }}>
                {problem?.stat}
              </div>
              <h3 className="text-xl font-semibold text-foreground text-center mb-3">
                {problem?.title}
              </h3>
              <p className="text-text-secondary text-center leading-relaxed">
                {problem?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
          <p className="text-lg text-foreground font-medium mb-2">
            Don't let outdated skills hold you back from your dream career
          </p>
          <p className="text-text-secondary">
            The time to invest in yourself is now. Start learning today and see results in 90 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;