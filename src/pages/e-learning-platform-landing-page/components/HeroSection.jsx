import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onStartTrial, onBrowseCourses }) => {
  const [stats] = useState({
    learners: 500000,
    completionRate: 95,
    salaryIncrease: 40
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <Icon name="TrendingUp" size={16} />
            <span>Join 500K+ professionals advancing their careers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Transform Your Career<br />
            <span className="text-primary">in 90 Days</span>
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Learn in-demand skills from industry experts with flexible courses that fit your schedule. Get certified and land your dream job.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="default"
              size="lg"
              className="cta-primary text-lg px-8 py-6"
              onClick={onStartTrial}
              iconName="Rocket"
              iconPosition="left"
            >
              Start Learning Today - Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={onBrowseCourses}
              iconName="BookOpen"
              iconPosition="left"
            >
              Browse 500+ Courses
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Icon name="Users" size={24} color="var(--color-primary)" />
                <div className="text-3xl font-bold text-foreground">
                  {(stats?.learners / 1000)?.toFixed(0)}K+
                </div>
              </div>
              <div className="text-sm text-text-secondary">Active Learners</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Icon name="Award" size={24} color="var(--color-success)" />
                <div className="text-3xl font-bold text-foreground">
                  {stats?.completionRate}%
                </div>
              </div>
              <div className="text-sm text-text-secondary">Completion Rate</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Icon name="TrendingUp" size={24} color="var(--color-accent)" />
                <div className="text-3xl font-bold text-foreground">
                  {stats?.salaryIncrease}%
                </div>
              </div>
              <div className="text-sm text-text-secondary">Avg. Salary Increase</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} color="var(--color-text-secondary)" />
      </div>
    </section>
  );
};

export default HeroSection;