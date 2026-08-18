export type ServiceCategory = 'riding' | 'walking' | 'care' | 'plan';

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period?: string;
  icon: string;
  tagline: string;
  description: string;
  isBestValue?: boolean;
  badge?: string;
  features: string[];
  durationMinutes?: number;
  highlightColor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  priceHint: string;
  benefits: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  experience: string;
  description: string;
  specialties: string[];
}

export interface PromiseItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface SafetyPillar {
  id: string;
  title: string;
  icon: string;
  summary: string;
  details: string[];
}

export interface CustomerReview {
  id: string;
  ownerName: string;
  dogName: string;
  dogBreed: string;
  rating: number;
  date: string;
  serviceUsed: string;
  comment: string;
  verified: boolean;
  avatarUrl: string;
}

export interface BookingFormData {
  customerName: string;
  phoneNumber: string;
  dogName: string;
  dogBreed: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  additionalNotes: string;
}
