export const mockUser = {
  id: 1,
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1214868d7-1763294182397.png",
  alt: 'Professional headshot of Sarah Johnson with blonde hair and friendly smile',
  joinDate: '2024-01-15',
  learningStreak: 47,
  totalCoursesEnrolled: 12,
  completedCourses: 5,
  hoursLearned: 156,
  certificatesEarned: 5,
  currentPlan: 'Premium',
  bio: 'Passionate learner focused on web development and data science',
  preferences: {
    theme: 'light',
    notifications: true,
    emailUpdates: true
  }
};

export const mockAchievements = [
{
  id: 1,
  name: '7-Day Streak',
  description: 'Completed 7 consecutive days of learning',
  icon: 'Flame',
  color: 'text-orange-500',
  earnedDate: '2025-11-10',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1545b7162-1763564086328.png",
  alt: 'Flame icon representing a 7-day learning streak achievement'
},
{
  id: 2,
  name: 'Fast Learner',
  description: 'Completed a course in record time',
  icon: 'Zap',
  color: 'text-yellow-500',
  earnedDate: '2025-11-05',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19dbcb8f6-1763564085426.png",
  alt: 'Lightning bolt icon symbolizing fast learning achievement'
},
{
  id: 3,
  name: 'Certificate Master',
  description: 'Earned 5 certificates',
  icon: 'Award',
  color: 'text-blue-500',
  earnedDate: '2025-11-15',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14887fe21-1763564087373.png",
  alt: 'Award trophy icon representing certificate mastery achievement'
}];


export const mockEnrolledCourses = [
{
  id: 1,
  title: 'Complete Web Development Bootcamp',
  instructor: 'Angela Yu',
  thumbnail: "https://images.unsplash.com/photo-1676279170337-c838813c7e39",
  alt: 'Modern workspace setup with laptop displaying web development code and design mockups',
  progress: 65,
  nextLesson: 'Advanced JavaScript Concepts',
  totalLessons: 120,
  completedLessons: 78,
  lastAccessed: '2025-11-18',
  estimatedTimeRemaining: '15 hours',
  rating: 4.8,
  category: 'Web Development',
  level: 'Intermediate',
  enrollmentDate: '2025-09-01'
},
{
  id: 2,
  title: 'Python for Data Science',
  instructor: 'Jose Portilla',
  thumbnail: "https://images.unsplash.com/photo-1698919585695-546e4a31fc8f",
  alt: 'Data analysis workspace showing Python code, graphs, and statistical charts on multiple screens',
  progress: 45,
  nextLesson: 'Pandas DataFrames',
  totalLessons: 80,
  completedLessons: 36,
  lastAccessed: '2025-11-17',
  estimatedTimeRemaining: '22 hours',
  rating: 4.9,
  category: 'Data Science',
  level: 'Beginner',
  enrollmentDate: '2025-10-01'
},
{
  id: 3,
  title: 'React - The Complete Guide',
  instructor: 'Maximilian Schwarzmüller',
  thumbnail: "https://images.unsplash.com/photo-1666470956471-30178dbe98ff",
  alt: 'Developer workstation with React component code and modern UI design on ultrawide monitor',
  progress: 82,
  nextLesson: 'Redux Toolkit',
  totalLessons: 100,
  completedLessons: 82,
  lastAccessed: '2025-11-19',
  estimatedTimeRemaining: '8 hours',
  rating: 4.7,
  category: 'Web Development',
  level: 'Advanced',
  enrollmentDate: '2025-08-15'
},
{
  id: 4,
  title: 'Machine Learning A-Z',
  instructor: 'Hadelin de Ponteves',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_17f96e8c7-1763564086650.png",
  alt: 'AI and machine learning setup showing neural network diagrams and data visualization on screens',
  progress: 28,
  nextLesson: 'Linear Regression',
  totalLessons: 90,
  completedLessons: 25,
  lastAccessed: '2025-11-16',
  estimatedTimeRemaining: '35 hours',
  rating: 4.6,
  category: 'AI & Machine Learning',
  level: 'Intermediate',
  enrollmentDate: '2025-10-15'
}];


export const mockCompletedCourses = [
{
  id: 5,
  title: 'JavaScript Essentials',
  instructor: 'Brad Traversy',
  thumbnail: "https://images.unsplash.com/photo-1512115061610-82e87808f9a8",
  alt: 'Clean coding setup with JavaScript ES6 syntax displayed on laptop screen with coffee mug',
  completedDate: '2025-10-28',
  rating: 4.8,
  certificateId: 'CERT-2025-001',
  category: 'Web Development',
  duration: '24 hours',
  finalScore: 95
},
{
  id: 6,
  title: 'CSS Masterclass',
  instructor: 'Jonas Schmedtmann',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_190023f54-1763564087246.png",
  alt: 'Designer workspace showing CSS Grid and Flexbox layouts with colorful design mockups',
  completedDate: '2025-10-15',
  rating: 4.9,
  certificateId: 'CERT-2025-002',
  category: 'Web Development',
  duration: '18 hours',
  finalScore: 92
},
{
  id: 7,
  title: 'Git & GitHub Complete Guide',
  instructor: 'Colt Steele',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_12a2dea37-1763564086862.png",
  alt: 'Development environment with GitHub interface showing branches, commits, and collaboration tools',
  completedDate: '2025-09-30',
  rating: 4.7,
  certificateId: 'CERT-2025-003',
  category: 'DevOps',
  duration: '12 hours',
  finalScore: 88
},
{
  id: 8,
  title: 'Responsive Web Design',
  instructor: 'Kevin Powell',
  thumbnail: "https://images.unsplash.com/photo-1684242282290-997cabc3ad06",
  alt: 'Multiple devices showing responsive website layouts from desktop to mobile screens',
  completedDate: '2025-09-15',
  rating: 4.8,
  certificateId: 'CERT-2025-004',
  category: 'Web Development',
  duration: '16 hours',
  finalScore: 94
},
{
  id: 9,
  title: 'SQL for Beginners',
  instructor: 'Mosh Hamedani',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_165f6d5ac-1763564087154.png",
  alt: 'Database management interface showing SQL queries and data tables on professional monitor',
  completedDate: '2025-08-30',
  rating: 4.6,
  certificateId: 'CERT-2025-005',
  category: 'Database',
  duration: '14 hours',
  finalScore: 90
}];


export const mockWishlist = [
{
  id: 10,
  title: 'Advanced Node.js Development',
  instructor: 'Andrew Mead',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1103645a8-1763564084582.png",
  alt: 'Backend development workspace with Node.js server code and API documentation displayed',
  price: 89.99,
  originalPrice: 199.99,
  rating: 4.7,
  students: 45000,
  duration: '32 hours',
  level: 'Advanced',
  category: 'Backend Development',
  addedDate: '2025-11-10'
},
{
  id: 11,
  title: 'UI/UX Design Masterclass',
  instructor: 'Daniel Walter Scott',
  thumbnail: "https://images.unsplash.com/photo-1710787554730-1b416f226a21",
  alt: 'Designer workspace with Figma interface showing UI design prototypes and color palettes',
  price: 79.99,
  originalPrice: 179.99,
  rating: 4.9,
  students: 67000,
  duration: '28 hours',
  level: 'Intermediate',
  category: 'UI/UX Design',
  addedDate: '2025-11-12'
},
{
  id: 12,
  title: 'AWS Solutions Architect',
  instructor: 'Stephane Maarek',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_10d181d4b-1763564086039.png",
  alt: 'Cloud infrastructure diagram showing AWS services architecture on multiple screens',
  price: 99.99,
  originalPrice: 219.99,
  rating: 4.8,
  students: 89000,
  duration: '40 hours',
  level: 'Advanced',
  category: 'Cloud Computing',
  addedDate: '2025-11-08'
}];


export const mockRecentActivity = [
{
  id: 1,
  type: 'completion',
  title: 'Completed JavaScript Essentials',
  timestamp: '2025-11-18T14:30:00',
  icon: 'CheckCircle',
  color: 'text-green-500'
},
{
  id: 2,
  type: 'enrollment',
  title: 'Enrolled in Machine Learning A-Z',
  timestamp: '2025-11-17T10:15:00',
  icon: 'BookOpen',
  color: 'text-blue-500'
},
{
  id: 3,
  type: 'achievement',
  title: 'Earned Certificate Master badge',
  timestamp: '2025-11-15T16:45:00',
  icon: 'Award',
  color: 'text-yellow-500'
},
{
  id: 4,
  type: 'lesson',
  title: 'Completed Advanced JavaScript lesson',
  timestamp: '2025-11-14T09:20:00',
  icon: 'PlayCircle',
  color: 'text-purple-500'
},
{
  id: 5,
  type: 'certificate',
  title: 'Downloaded CSS Masterclass certificate',
  timestamp: '2025-11-13T11:00:00',
  icon: 'Download',
  color: 'text-indigo-500'
}];


export const mockUpcomingDeadlines = [
{
  id: 1,
  courseTitle: 'React - The Complete Guide',
  taskTitle: 'Final Project Submission',
  dueDate: '2025-11-25',
  priority: 'high',
  type: 'assignment'
},
{
  id: 2,
  courseTitle: 'Python for Data Science',
  taskTitle: 'Mid-term Quiz',
  dueDate: '2025-11-28',
  priority: 'medium',
  type: 'quiz'
},
{
  id: 3,
  courseTitle: 'Complete Web Development Bootcamp',
  taskTitle: 'Portfolio Project Review',
  dueDate: '2025-12-05',
  priority: 'low',
  type: 'review'
}];


export const mockCertificates = [
{
  id: 'CERT-2025-001',
  courseTitle: 'JavaScript Essentials',
  issueDate: '2025-10-28',
  instructor: 'Brad Traversy',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1579a245c-1763564084770.png",
  alt: 'Professional certificate document with JavaScript course completion details and signature',
  verificationUrl: 'https://verify.example.com/CERT-2025-001'
},
{
  id: 'CERT-2025-002',
  courseTitle: 'CSS Masterclass',
  issueDate: '2025-10-15',
  instructor: 'Jonas Schmedtmann',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_10c2d4b85-1763564085768.png",
  alt: 'CSS certification document showing mastery in modern styling techniques and design',
  verificationUrl: 'https://verify.example.com/CERT-2025-002'
},
{
  id: 'CERT-2025-003',
  courseTitle: 'Git & GitHub Complete Guide',
  issueDate: '2025-09-30',
  instructor: 'Colt Steele',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_14428b3a2-1763564086226.png",
  alt: 'Git certification showing proficiency in version control and collaborative development',
  verificationUrl: 'https://verify.example.com/CERT-2025-003'
},
{
  id: 'CERT-2025-004',
  courseTitle: 'Responsive Web Design',
  issueDate: '2025-09-15',
  instructor: 'Kevin Powell',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_14b3c6955-1763564085756.png",
  alt: 'Responsive design certificate showcasing mobile-first development expertise',
  verificationUrl: 'https://verify.example.com/CERT-2025-004'
},
{
  id: 'CERT-2025-005',
  courseTitle: 'SQL for Beginners',
  issueDate: '2025-08-30',
  instructor: 'Mosh Hamedani',
  thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_17d3efb22-1763564085439.png",
  alt: 'SQL certification document demonstrating database management and query expertise',
  verificationUrl: 'https://verify.example.com/CERT-2025-005'
}];


export const mockPurchaseHistory = [
{
  id: 'PUR-2025-001',
  courseTitle: 'Complete Web Development Bootcamp',
  purchaseDate: '2025-09-01',
  amount: 89.99,
  paymentMethod: 'Credit Card',
  status: 'completed',
  invoiceUrl: '/invoices/PUR-2025-001.pdf'
},
{
  id: 'PUR-2025-002',
  courseTitle: 'Python for Data Science',
  purchaseDate: '2025-10-01',
  amount: 79.99,
  paymentMethod: 'PayPal',
  status: 'completed',
  invoiceUrl: '/invoices/PUR-2025-002.pdf'
},
{
  id: 'PUR-2025-003',
  courseTitle: 'React - The Complete Guide',
  purchaseDate: '2025-08-15',
  amount: 94.99,
  paymentMethod: 'Credit Card',
  status: 'completed',
  invoiceUrl: '/invoices/PUR-2025-003.pdf'
},
{
  id: 'PUR-2025-004',
  courseTitle: 'Machine Learning A-Z',
  purchaseDate: '2025-10-15',
  amount: 99.99,
  paymentMethod: 'Debit Card',
  status: 'completed',
  invoiceUrl: '/invoices/PUR-2025-004.pdf'
}];