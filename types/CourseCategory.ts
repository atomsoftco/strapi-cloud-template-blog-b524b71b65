export interface CourseFAQ {
  question: string;
  answer: string; // Use string for static data; can be ReactNode if needed in components
}

export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  image: string; // URL or path to image
  learningPoints: string[];
  acquiredSkills: string[];
  faqs: CourseFAQ[];
  availableDates: string[]; // ISO date strings
}
