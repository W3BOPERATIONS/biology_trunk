import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = ({ onSelectPlan }) => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [projectedSalary, setProjectedSalary] = useState(75000);

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 29,
      period: 'month',
      description: 'Perfect for getting started',
      features: [
        'Access to 100+ courses',
        'Basic certificates',
        'Community forum access',
        'Mobile app access',
        'Email support'
      ],
      notIncluded: [
        'Career coaching',
        'Interview preparation',
        'Job placement assistance'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 49,
      period: 'month',
      description: 'Most popular for career growth',
      recommended: true,
      features: [
        'Access to 500+ courses',
        'Industry-recognized certificates',
        'Priority community support',
        'Mobile app with offline access',
        'Live Q&A sessions',
        'Career coaching (2 sessions/month)',
        'Resume review',
        'Portfolio building guidance'
      ],
      notIncluded: [
        'Dedicated career mentor'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 99,
      period: 'month',
      description: 'Complete career transformation',
      features: [
        'Unlimited course access',
        'Premium certificates',
        'VIP community access',
        'All mobile features',
        'Weekly live sessions',
        'Unlimited career coaching',
        'Interview preparation',
        'Job placement assistance',
        'Dedicated career mentor',
        'Salary negotiation support',
        'Lifetime access guarantee'
      ],
      notIncluded: []
    }
  ];

  const calculateROI = () => {
    const planPrice = plans?.find(p => p?.id === selectedPlan)?.price || 49;
    const annualCost = planPrice * 12;
    const salaryIncrease = projectedSalary * 0.4; // 40% average increase
    const roi = ((salaryIncrease - annualCost) / annualCost * 100)?.toFixed(0);
    return { annualCost, salaryIncrease, roi };
  };

  const roiData = calculateROI();

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Invest in yourself today and see returns for a lifetime. All plans include 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans?.map((plan) => (
            <div
              key={plan?.id}
              className={`bg-card border-2 rounded-2xl p-8 transition-all ${
                plan?.recommended
                  ? 'border-primary shadow-xl scale-105'
                  : 'border-border hover:border-primary/50 hover:shadow-lg'
              }`}
            >
              {plan?.recommended && (
                <div className="bg-primary text-primary-foreground text-center py-2 -mx-8 -mt-8 mb-6 rounded-t-2xl font-semibold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan?.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{plan?.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-foreground">${plan?.price}</span>
                  <span className="text-text-secondary ml-2">/{plan?.period}</span>
                </div>
              </div>

              <Button
                variant={plan?.recommended ? 'default' : 'outline'}
                className={`w-full mb-6 ${plan?.recommended ? 'cta-primary' : ''}`}
                onClick={() => onSelectPlan(plan)}
                iconName="ArrowRight"
                iconPosition="right"
              >
                Get Started
              </Button>

              <div className="space-y-3">
                {plan?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
                {plan?.notIncluded?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 opacity-40">
                    <Icon name="X" size={20} color="var(--color-text-secondary)" className="flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Calculate Your ROI
          </h3>

          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Current Salary: ${projectedSalary?.toLocaleString()}
              </label>
              <input
                type="range"
                min="30000"
                max="150000"
                step="5000"
                value={projectedSalary}
                onChange={(e) => setProjectedSalary(Number(e?.target?.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-muted rounded-lg p-4 text-center">
                <div className="text-sm text-text-secondary mb-1">Annual Investment</div>
                <div className="text-2xl font-bold text-foreground">
                  ${roiData?.annualCost?.toLocaleString()}
                </div>
              </div>
              <div className="bg-success/10 rounded-lg p-4 text-center">
                <div className="text-sm text-text-secondary mb-1">Projected Salary Increase</div>
                <div className="text-2xl font-bold text-success">
                  +${roiData?.salaryIncrease?.toLocaleString()}
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-sm text-text-secondary mb-1">Return on Investment</div>
                <div className="text-2xl font-bold text-primary">
                  {roiData?.roi}%
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-text-secondary">
              Based on average 40% salary increase reported by our graduates within 12 months of course completion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;