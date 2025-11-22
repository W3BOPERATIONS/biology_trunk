import { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FreeTrialForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    skillLevel: '',
    interests: [],
    smsReminders: false
  });

  const [errors, setErrors] = useState({});

  const skillLevels = [
    { value: '', label: 'Select your skill level' },
    { value: 'beginner', label: 'Beginner - Just starting out' },
    { value: 'intermediate', label: 'Intermediate - Some experience' },
    { value: 'advanced', label: 'Advanced - Professional level' }
  ];

  const interestOptions = [
    { id: 'web', label: 'Web Development' },
    { id: 'data', label: 'Data Science' },
    { id: 'mobile', label: 'Mobile Development' },
    { id: 'cloud', label: 'Cloud Computing' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'marketing', label: 'Digital Marketing' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestToggle = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev?.interests?.includes(interestId)
        ? prev?.interests?.filter(id => id !== interestId)
        : [...prev?.interests, interestId]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.skillLevel) {
      newErrors.skillLevel = 'Please select your skill level';
    }

    if (formData?.interests?.length === 0) {
      newErrors.interests = 'Please select at least one area of interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Start Your Free 7-Day Trial
          </h2>
          <p className="text-lg text-text-secondary">
            No credit card required. Cancel anytime. Get instant access to 500+ courses.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData?.fullName}
              onChange={handleInputChange}
              error={errors?.fullName}
              required
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData?.email}
              onChange={handleInputChange}
              error={errors?.email}
              description="We'll send your login credentials to this email"
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              placeholder="+1 (555) 123-4567"
              value={formData?.phone}
              onChange={handleInputChange}
              error={errors?.phone}
              required
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Current Skill Level <span className="text-error">*</span>
              </label>
              <select
                name="skillLevel"
                value={formData?.skillLevel}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring ${
                  errors?.skillLevel ? 'border-error' : 'border-input'
                }`}
              >
                {skillLevels?.map(level => (
                  <option key={level?.value} value={level?.value}>
                    {level?.label}
                  </option>
                ))}
              </select>
              {errors?.skillLevel && (
                <p className="mt-1 text-sm text-error">{errors?.skillLevel}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Areas of Interest <span className="text-error">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interestOptions?.map(option => (
                  <Checkbox
                    key={option?.id}
                    label={option?.label}
                    checked={formData?.interests?.includes(option?.id)}
                    onChange={() => handleInterestToggle(option?.id)}
                  />
                ))}
              </div>
              {errors?.interests && (
                <p className="mt-2 text-sm text-error">{errors?.interests}</p>
              )}
            </div>

            <Checkbox
              label="Send me SMS reminders for my learning schedule"
              description="Get helpful reminders to stay on track with your learning goals"
              checked={formData?.smsReminders}
              onChange={(e) => setFormData(prev => ({ ...prev, smsReminders: e?.target?.checked }))}
            />

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="Shield" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                <div className="text-sm text-text-secondary">
                  <strong className="text-foreground">Your privacy is protected.</strong> We never share your information with third parties. By signing up, you agree to our Terms of Service and Privacy Policy.
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="default"
              size="lg"
              className="cta-primary w-full text-lg"
              iconName="Rocket"
              iconPosition="left"
            >
              Start My Free Trial
            </Button>

            <p className="text-center text-sm text-text-secondary">
              Already have an account?{' '}
              <button type="button" className="text-primary hover:underline font-medium">
                Sign in here
              </button>
            </p>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
            <Icon name="Check" size={16} color="var(--color-success)" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
            <Icon name="Check" size={16} color="var(--color-success)" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
            <Icon name="Check" size={16} color="var(--color-success)" />
            <span>Instant access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialForm;