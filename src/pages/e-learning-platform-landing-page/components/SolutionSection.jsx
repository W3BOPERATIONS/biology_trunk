import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SolutionSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
  {
    id: 0,
    icon: "Video",
    title: "Interactive Video Lessons",
    description: "Learn from HD video content with interactive quizzes and real-time code editors",
    image: "https://images.unsplash.com/photo-1625496015040-2f461a6a717b",
    imageAlt: "Professional instructor teaching online course with laptop and microphone in modern home office setup with natural lighting"
  },
  {
    id: 1,
    icon: "BarChart3",
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics and milestone celebrations",
    image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d",
    imageAlt: "Digital dashboard displaying colorful progress charts and learning analytics on computer screen with graphs showing upward trends"
  },
  {
    id: 2,
    icon: "Award",
    title: "Industry Certifications",
    description: "Earn recognized certificates that boost your resume and LinkedIn profile",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16af76f8c-1763562535828.png",
    imageAlt: "Professional certificate of completion displayed on desk with laptop showing digital badge and achievement ribbon"
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your Complete Learning Platform
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Everything you need to master new skills and advance your career, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features?.map((feature) =>
            <div
              key={feature?.id}
              onClick={() => setActiveFeature(feature?.id)}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
              activeFeature === feature?.id ?
              'border-primary bg-primary/5' : 'border-border bg-card hover:border-primary/50'}`
              }>

                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                activeFeature === feature?.id ? 'bg-primary' : 'bg-muted'}`
                }>
                    <Icon
                    name={feature?.icon}
                    size={24}
                    color={activeFeature === feature?.id ? 'var(--color-primary-foreground)' : 'var(--color-primary)'} />

                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature?.title}
                    </h3>
                    <p className="text-text-secondary">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border border-border">
              <Image
                src={features?.[activeFeature]?.image}
                alt={features?.[activeFeature]?.imageAlt}
                className="w-full h-full object-cover" />

            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Icon name="Play" size={20} />
                <span className="font-semibold">Try Demo Course</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SolutionSection;