import Icon from '../../../components/AppIcon';

const CompanyLogos = () => {
  const companies = [
    { id: 1, name: "Microsoft", icon: "Building2" },
    { id: 2, name: "Google", icon: "Globe" },
    { id: 3, name: "Amazon", icon: "ShoppingCart" },
    { id: 4, name: "Meta", icon: "Share2" },
    { id: 5, name: "Apple", icon: "Smartphone" },
    { id: 6, name: "Netflix", icon: "Film" },
    { id: 7, name: "Tesla", icon: "Zap" },
    { id: 8, name: "Adobe", icon: "Palette" }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Trusted by Employees at Leading Companies
          </h3>
          <p className="text-text-secondary">
            Our graduates work at Fortune 500 companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {companies?.map((company) => (
            <div
              key={company?.id}
              className="flex flex-col items-center justify-center space-y-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-16 h-16 bg-card border border-border rounded-lg flex items-center justify-center">
                <Icon name={company?.icon} size={32} color="var(--color-text-secondary)" />
              </div>
              <span className="text-sm font-medium text-text-secondary">{company?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;