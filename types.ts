export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  imageUrl: string;
  date: string;
  description: string;
  lessons: number;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  category: string;
  isBestseller?: boolean;
}
