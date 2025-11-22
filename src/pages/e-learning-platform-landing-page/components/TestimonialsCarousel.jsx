import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Robert Martinez",
    role: "Software Engineer",
    company: "Microsoft",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_111de63eb-1763293804928.png",
    imageAlt: "Professional headshot of Robert Martinez, Hispanic male with short dark hair wearing blue shirt smiling in technology office",
    rating: 5,
    text: "The quality of instruction exceeded my expectations. I went from knowing nothing about programming to building full-stack applications in just 6 months. The career support team helped me land interviews at top tech companies.",
    course: "Complete Web Development Bootcamp"
  },
  {
    id: 2,
    name: "Lisa Anderson",
    role: "Data Scientist",
    company: "Amazon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1efea8232-1763295833460.png",
    imageAlt: "Professional headshot of Lisa Anderson, Caucasian female with blonde hair wearing white blouse in modern corporate setting",
    rating: 5,
    text: "This platform changed my life. The machine learning course was comprehensive yet easy to follow. The hands-on projects gave me the confidence to transition from finance to data science. Best investment I've ever made!",
    course: "Data Science & Machine Learning"
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    role: "Cloud Architect",
    company: "Google Cloud",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_139e33e02-1763291892107.png",
    imageAlt: "Professional headshot of Ahmed Hassan, Middle Eastern male with black hair and beard wearing dark suit in professional office",
    rating: 5,
    text: "The AWS certification prep course was incredibly thorough. The instructor's real-world experience made complex concepts easy to understand. I passed my certification on the first try and got promoted within 3 months.",
    course: "AWS Cloud Architect Certification"
  },
  {
    id: 4,
    name: "Maria Garcia",
    role: "UX Designer",
    company: "Adobe",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10dc6c8f9-1763296048231.png",
    imageAlt: "Professional headshot of Maria Garcia, Hispanic female with long brown hair wearing purple top in creative design studio",
    rating: 5,
    text: "The UI/UX course transformed my design approach. The portfolio projects I created during the course were instrumental in landing my dream job at Adobe. The instructors provided invaluable feedback on every assignment.",
    course: "UI/UX Design Masterclass"
  }];


  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-text-secondary">
            Join thousands of satisfied learners who achieved their career goals
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-primary">
              <Image
                src={currentTestimonial?.image}
                alt={currentTestimonial?.imageAlt}
                className="w-full h-full object-cover" />

            </div>

            <div className="flex items-center space-x-1 mb-4">
              {[...Array(currentTestimonial?.rating)]?.map((_, i) =>
              <Icon key={i} name="Star" size={20} color="var(--color-warning)" />
              )}
            </div>

            <blockquote className="text-lg text-foreground leading-relaxed mb-6 max-w-2xl">
              "{currentTestimonial?.text}"
            </blockquote>

            <div className="mb-4">
              <div className="text-xl font-semibold text-foreground">
                {currentTestimonial?.name}
              </div>
              <div className="text-text-secondary">
                {currentTestimonial?.role} at {currentTestimonial?.company}
              </div>
            </div>

            <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full text-sm">
              <Icon name="BookOpen" size={14} color="var(--color-primary)" />
              <span className="text-text-secondary">{currentTestimonial?.course}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
            aria-label="Previous testimonial">

            <Icon name="ChevronLeft" size={24} />
          </button>

          <div className="flex items-center space-x-2">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-primary w-6' : 'bg-border hover:bg-primary/50'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
            aria-label="Next testimonial">

            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      </div>
    </section>);

};

export default TestimonialsCarousel;