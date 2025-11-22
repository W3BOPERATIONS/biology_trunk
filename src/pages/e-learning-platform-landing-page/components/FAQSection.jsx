import { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "How much time do I need to commit to learning?",
      answer: "Our courses are designed to be flexible and self-paced. Most students dedicate 5-10 hours per week and complete courses within 2-3 months. However, you can learn faster or slower based on your schedule. All courses include lifetime access, so you can learn at your own pace without pressure."
    },
    {
      id: 2,
      question: "Are the certificates recognized by employers?",
      answer: "Yes! Our certificates are industry-recognized and valued by employers worldwide. They're verified through our platform and can be added to your LinkedIn profile. Many of our graduates have successfully used these certificates to land jobs at Fortune 500 companies. The certificates include detailed skill assessments and project portfolios."
    },
    {
      id: 3,
      question: "What if I don't have any prior experience?",
      answer: "No problem! Our courses are designed for all skill levels, from complete beginners to advanced professionals. Each course clearly indicates the prerequisite knowledge required. We offer beginner-friendly courses that start from the basics and gradually build your skills. Our instructors provide step-by-step guidance throughout your learning journey."
    },
    {
      id: 4,
      question: "How does the job placement assistance work?",
      answer: "Our Professional and Enterprise plans include comprehensive career support. This includes resume reviews, portfolio building guidance, interview preparation, and direct connections with hiring partners. We also provide salary negotiation coaching and ongoing career mentorship. Our job placement rate is 87% within 6 months of course completion."
    },
    {
      id: 5,
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Absolutely! We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied with your learning experience within the first 30 days, simply contact our support team for a full refund—no questions asked. We're confident in the quality of our courses and want you to learn risk-free."
    },
    {
      id: 6,
      question: "Do you offer team or corporate plans?",
      answer: "Yes! We offer customized corporate training solutions for teams of all sizes. Our enterprise plans include dedicated account management, custom learning paths, team analytics, and volume discounts. Contact our sales team to discuss your organization's specific training needs and get a personalized quote."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary">
            Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={faq?.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq?.question}
                </span>
                <Icon
                  name={openIndex === index ? "ChevronUp" : "ChevronDown"}
                  size={24}
                  color="var(--color-primary)"
                  className="flex-shrink-0"
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-text-secondary leading-relaxed">
                    {faq?.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-text-secondary mb-4">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:support@edulandingpro.com"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium"
            >
              <Icon name="Mail" size={20} />
              <span>support@edulandingpro.com</span>
            </a>
            <span className="hidden sm:inline text-text-secondary">•</span>
            <a
              href="tel:+1-800-123-4567"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium"
            >
              <Icon name="Phone" size={20} />
              <span>+1 (800) 123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;