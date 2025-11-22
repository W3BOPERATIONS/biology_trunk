import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedCoursesCarousel = ({ onCoursePreview }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2025",
    instructor: "Dr. Sarah Johnson",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1aeb36939-1763296764391.png",
    instructorImageAlt: "Professional headshot of Dr. Sarah Johnson, female instructor with brown hair wearing navy blazer in modern office setting",
    thumbnail: "https://images.unsplash.com/photo-1695070534772-b3db40410818",
    thumbnailAlt: "Modern laptop displaying colorful code editor with HTML CSS JavaScript on screen in bright workspace with coffee cup",
    rating: 4.9,
    reviews: 12543,
    students: 45678,
    duration: "48 hours",
    level: "All Levels",
    price: 49.99,
    originalPrice: 199.99,
    bestseller: true
  },
  {
    id: 2,
    title: "Data Science & Machine Learning Masterclass",
    instructor: "Prof. Michael Chen",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11efe0564-1763295966459.png",
    instructorImageAlt: "Professional headshot of Prof. Michael Chen, Asian male instructor with glasses wearing white shirt in technology lab",
    thumbnail: "https://images.unsplash.com/photo-1573311525852-81c1a0b8d03c",
    thumbnailAlt: "Computer screen showing colorful data visualization charts graphs and analytics dashboard with blue and purple color scheme",
    rating: 4.8,
    reviews: 8932,
    students: 32145,
    duration: "56 hours",
    level: "Intermediate",
    price: 59.99,
    originalPrice: 229.99,
    bestseller: false
  },
  {
    id: 3,
    title: "iOS App Development with Swift",
    instructor: "Emily Rodriguez",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18e36e24a-1763294274617.png",
    instructorImageAlt: "Professional headshot of Emily Rodriguez, Hispanic female instructor with long dark hair wearing teal blouse smiling warmly",
    thumbnail: "https://images.unsplash.com/photo-1540448880868-fc8f11e2938b",
    thumbnailAlt: "iPhone displaying mobile app interface with colorful UI elements and code snippets on MacBook screen in developer workspace",
    rating: 4.9,
    reviews: 6754,
    students: 23456,
    duration: "42 hours",
    level: "Intermediate",
    price: 54.99,
    originalPrice: 209.99,
    bestseller: true
  },
  {
    id: 4,
    title: "AWS Cloud Architect Certification Prep",
    instructor: "David Thompson",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_176ca3a85-1763294277357.png",
    instructorImageAlt: "Professional headshot of David Thompson, Caucasian male instructor with short gray hair wearing dark suit in corporate office",
    thumbnail: "https://images.unsplash.com/photo-1649682892309-e10e0b7cd40b",
    thumbnailAlt: "Digital cloud computing concept with glowing network connections and server infrastructure visualization on dark blue background",
    rating: 4.8,
    reviews: 5432,
    students: 18765,
    duration: "38 hours",
    level: "Advanced",
    price: 64.99,
    originalPrice: 249.99,
    bestseller: false
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals & Ethical Hacking",
    instructor: "Alex Kumar",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_16d452239-1763299445724.png",
    instructorImageAlt: "Professional headshot of Alex Kumar, Indian male instructor with black hair wearing gray shirt in technology security center",
    thumbnail: "https://images.unsplash.com/photo-1654588827084-b6f27735ba7d",
    thumbnailAlt: "Digital security concept showing padlock icon with binary code and cybersecurity shield on dark screen with green matrix effect",
    rating: 4.9,
    reviews: 7821,
    students: 28934,
    duration: "52 hours",
    level: "Intermediate",
    price: 69.99,
    originalPrice: 259.99,
    bestseller: true
  },
  {
    id: 6,
    title: "UI/UX Design: From Concept to Prototype",
    instructor: "Jessica Park",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_15780cdc0-1763299445992.png",
    instructorImageAlt: "Professional headshot of Jessica Park, Asian female instructor with short black hair wearing purple top in creative design studio",
    thumbnail: "https://images.unsplash.com/photo-1553525302-7b0a445043ee",
    thumbnailAlt: "Designer workspace with colorful UI mockups wireframes and design tools on large monitor with tablet and stylus on desk",
    rating: 4.8,
    reviews: 9123,
    students: 34567,
    duration: "36 hours",
    level: "All Levels",
    price: 49.99,
    originalPrice: 189.99,
    bestseller: false
  }];


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses?.length) % courses?.length);
  };

  const visibleCourses = [
  courses?.[currentIndex],
  courses?.[(currentIndex + 1) % courses?.length],
  courses?.[(currentIndex + 2) % courses?.length]];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Featured Courses
            </h2>
            <p className="text-lg text-text-secondary">
              Top-rated programs chosen by industry professionals
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all">

              <Icon name="ChevronLeft" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all">

              <Icon name="ChevronRight" size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCourses?.map((course) =>
          <div
            key={course?.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
            onClick={() => onCoursePreview(course)}>

              <div className="relative h-48 overflow-hidden">
                <Image
                src={course?.thumbnail}
                alt={course?.thumbnailAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

                {course?.bestseller &&
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Bestseller
                  </div>
              }
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Icon name="Play" size={24} color="var(--color-primary)" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {course?.title}
                </h3>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                    src={course?.instructorImage}
                    alt={course?.instructorImageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <span className="text-sm text-text-secondary">{course?.instructor}</span>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} color="var(--color-warning)" />
                    <span className="font-medium text-foreground">{course?.rating}</span>
                    <span>({course?.reviews?.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={14} />
                    <span>{(course?.students / 1000)?.toFixed(1)}K</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{course?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="BarChart" size={14} />
                    <span>{course?.level}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      ${course?.price}
                    </div>
                    <div className="text-sm text-text-secondary line-through">
                      ${course?.originalPrice}
                    </div>
                  </div>
                  <Button
                  variant="default"
                  size="sm"
                  className="cta-primary"
                  iconName="ShoppingCart"
                  iconPosition="left">

                    Enroll
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex md:hidden items-center justify-center space-x-3 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all">

            <Icon name="ChevronLeft" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all">

            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      </div>
    </section>);

};

export default FeaturedCoursesCarousel;