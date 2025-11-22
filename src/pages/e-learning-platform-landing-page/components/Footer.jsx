import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const courseCategories = [
    'Web Development',
    'Data Science',
    'Mobile Development',
    'Cloud Computing',
    'Cybersecurity',
    'UI/UX Design'
  ];

  const quickLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Partners', href: '#' }
  ];

  const support = [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'System Status', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' }
  ];

  const socialLinks = [
    { icon: 'Facebook', href: '#', label: 'Facebook' },
    { icon: 'Twitter', href: '#', label: 'Twitter' },
    { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'Instagram', href: '#', label: 'Instagram' },
    { icon: 'Youtube', href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={24} color="var(--color-primary)" />
              </div>
              <span className="text-xl font-bold text-foreground">EduLanding Pro</span>
            </div>
            <p className="text-text-secondary text-sm mb-4">
              Transform your career with expert-led courses. Learn in-demand skills and achieve your professional goals.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.icon}
                  href={social?.href}
                  aria-label={social?.label}
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                >
                  <Icon name={social?.icon} size={18} color="var(--color-text-secondary)" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Course Categories</h3>
            <ul className="space-y-2">
              {courseCategories?.map((category) => (
                <li key={category}>
                  <a href="#" className="text-text-secondary text-sm hover:text-primary transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks?.map((link) => (
                <li key={link?.label}>
                  <a href={link?.href} className="text-text-secondary text-sm hover:text-primary transition-colors">
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support?.map((link) => (
                <li key={link?.label}>
                  <a href={link?.href} className="text-text-secondary text-sm hover:text-primary transition-colors">
                    {link?.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © {currentYear} EduLanding Pro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <span className="text-text-secondary text-sm">SSL Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} color="var(--color-primary)" />
                <span className="text-text-secondary text-sm">Certified Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;