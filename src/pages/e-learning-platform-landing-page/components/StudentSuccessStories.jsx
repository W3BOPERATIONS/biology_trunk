import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StudentSuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
  {
    id: 1,
    name: "Marcus Williams",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18d854688-1763295573707.png",
    imageAlt: "Professional headshot of Marcus Williams, African American male in navy suit with confident smile in modern office setting",
    previousRole: "Retail Manager",
    currentRole: "Full Stack Developer",
    company: "Tech Innovations Inc.",
    previousSalary: 45000,
    currentSalary: 95000,
    timeframe: "8 months",
    course: "Complete Web Development Bootcamp",
    testimonial: "I never thought I could transition from retail to tech. The structured curriculum and hands-on projects gave me the confidence to apply for developer roles. Within 3 months of completing the course, I landed my dream job with a 111% salary increase!",
    linkedinVerified: true
  },
  {
    id: 2,
    name: "Priya Sharma",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16d1c7e0f-1763293856215.png",
    imageAlt: "Professional headshot of Priya Sharma, Indian female with long black hair wearing white blouse smiling in technology workspace",
    previousRole: "Marketing Coordinator",
    currentRole: "Data Analyst",
    company: "Global Analytics Corp",
    previousSalary: 52000,
    currentSalary: 88000,
    timeframe: "6 months",
    course: "Data Science & Machine Learning",
    testimonial: "The course transformed my career trajectory. I went from creating marketing reports to building predictive models. The instructors were incredibly supportive, and the real-world projects prepared me perfectly for my new role.",
    linkedinVerified: true
  },
  {
    id: 3,
    name: "James Chen",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_101be0cb3-1763300423274.png",
    imageAlt: "Professional headshot of James Chen, Asian male with short black hair wearing gray blazer in corporate technology office",
    previousRole: "Junior Designer",
    currentRole: "Senior UX Designer",
    company: "Creative Solutions Ltd",
    previousSalary: 48000,
    currentSalary: 82000,
    timeframe: "5 months",
    course: "UI/UX Design Masterclass",
    testimonial: "This course didn\'t just teach me design principles—it taught me how to think like a senior designer. The portfolio projects I created during the course were instrumental in landing my promotion and 71% salary increase.",
    linkedinVerified: true
  }];


  const currentStory = stories?.[activeStory];
  const salaryIncrease = Math.round((currentStory?.currentSalary - currentStory?.previousSalary) / currentStory?.previousSalary * 100);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real Success Stories
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Join thousands of professionals who transformed their careers through our platform
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <Image
                src={currentStory?.image}
                alt={currentStory?.imageAlt}
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">{currentStory?.name}</h3>
                  {currentStory?.linkedinVerified &&
                  <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold flex items-center space-x-1">
                      <Icon name="CheckCircle" size={12} />
                      <span>Verified</span>
                    </div>
                  }
                </div>
                <p className="text-white/90 text-sm">{currentStory?.currentRole} at {currentStory?.company}</p>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Icon name="TrendingUp" size={16} />
                  <span>{salaryIncrease}% Salary Increase</span>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Before</div>
                    <div className="text-lg font-semibold text-foreground">{currentStory?.previousRole}</div>
                    <div className="text-sm text-text-secondary">${currentStory?.previousSalary?.toLocaleString()}/year</div>
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-1">After</div>
                    <div className="text-lg font-semibold text-primary">{currentStory?.currentRole}</div>
                    <div className="text-sm text-success font-semibold">${currentStory?.currentSalary?.toLocaleString()}/year</div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="BookOpen" size={16} color="var(--color-primary)" />
                    <span className="text-sm font-medium text-foreground">Course Completed</span>
                  </div>
                  <p className="text-sm text-text-secondary">{currentStory?.course}</p>
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  <Icon name="Clock" size={16} color="var(--color-text-secondary)" />
                  <span className="text-sm text-text-secondary">Career transformation in {currentStory?.timeframe}</span>
                </div>

                <blockquote className="relative">
                  <Icon name="Quote" size={32} color="var(--color-primary)" className="absolute -top-2 -left-2 opacity-20" />
                  <p className="text-text-secondary leading-relaxed italic pl-6">
                    "{currentStory?.testimonial}"
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 mt-8">
          {stories?.map((story, index) =>
          <button
            key={story?.id}
            onClick={() => setActiveStory(index)}
            className={`w-3 h-3 rounded-full transition-all ${
            activeStory === index ? 'bg-primary w-8' : 'bg-border hover:bg-primary/50'}`
            }
            aria-label={`View ${story?.name}'s story`} />

          )}
        </div>
      </div>
    </section>);

};

export default StudentSuccessStories;