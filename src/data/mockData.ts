import { PricingPlan, ServiceItem, TeamMember, PromiseItem, SafetyPillar, CustomerReview } from '../types';

import sagarPhoto from '../assets/images/sagar_photo_1787072609021.jpg';
import gokarnaPhoto from '../assets/images/gokarna_photo_1787072626463.jpg';
import manojPhoto from '../assets/images/manoj_photo_1787072642667.jpg';

export const BUSINESS_PHONE = '7387926046';
export const BUSINESS_PHONE_FORMATTED = '+91 73879 26046';
export const BUSINESS_EMAIL = 'contact@dogstar.care';
export const BUSINESS_LOCATION = 'Citywide Premium Care & Outing Centers';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'ride-1hr',
    name: '1 Hour Dog Riding',
    price: 150,
    period: 'per session',
    durationMinutes: 60,
    icon: 'Bike',
    tagline: 'Ideal for quick cardio & refreshing outdoor fun',
    description: 'Safe, supervised riding and energetic walking with individual professional care and companionship.',
    isBestValue: false,
    badge: 'Popular Single Session',
    features: [
      '60 Minutes active riding & walking',
      '1-on-1 Dedicated care specialist',
      'Safe, certified harness & handling',
      'Hydration breaks & clean water',
      'Post-ride paw wipe & check',
      'Live GPS & WhatsApp photo updates'
    ]
  },
  {
    id: 'monthly-standard',
    name: 'Monthly Standard Plan',
    price: 9999,
    period: 'per month',
    icon: 'Crown',
    tagline: 'Comprehensive daily routine with highest savings',
    description: 'Full attention, regular riding & exercise tailored for dogs who need regular activity and structured daily routines.',
    isBestValue: true,
    badge: 'BEST VALUE • MOST POPULAR',
    highlightColor: 'amber',
    features: [
      '3 Dedicated sessions every single day',
      'Regular dog riding, exercise & cardio',
      'Full attention & VIP professional care',
      'Priority slot booking & fixed timings',
      'Custom pace based on dog temperament',
      'Complimentary basic coat hygiene support',
      'Direct line to lead care executive',
      'Ideal for working dog owners'
    ]
  },
  {
    id: 'ride-2hr',
    name: '2 Hours Dog Riding',
    price: 300,
    period: 'per session',
    durationMinutes: 120,
    icon: 'Compass',
    tagline: 'Extended adventure for high-energy breeds',
    description: 'Extended outdoor activity with enriched sensory routes, safe handling, stamina building, and attentive supervision.',
    isBestValue: false,
    badge: 'High-Energy Dogs',
    features: [
      '120 Minutes comprehensive outdoor trail',
      'Agility pacing & sensory stimulation',
      'Safe handling & continuous supervision',
      'Multiple shaded rest & hydration pauses',
      'Treats & healthy stamina replenishment',
      'End-of-session activity report'
    ]
  }
];

export const ADDITIONAL_SERVICES: ServiceItem[] = [
  {
    id: 'daily-exercise',
    title: 'Daily Dog Exercise',
    icon: 'Activity',
    category: 'care',
    shortDescription: 'Healthy outdoor activity and tailored physical exercise to burn energy happily.',
    fullDescription: 'Structured outdoor physical routines designed to keep your dog physically lean, mentally sharp, and emotionally balanced.',
    priceHint: 'From ₹150 / session',
    benefits: ['Cardio & muscle building', 'Mental stimulation', 'Calms restlessness at home'],
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dog-walking',
    title: 'Dog Walking',
    icon: 'Footprints',
    category: 'walking',
    shortDescription: 'Safe, scenic, and enjoyable walks tailored to your dog’s natural pace.',
    fullDescription: 'Safe neighborhood and park strolling with loose-leash training discipline, social sniffing pauses, and full hydration.',
    priceHint: 'Included in riding & standard packs',
    benefits: ['Safe route planning', 'Sniff & explore breaks', 'Pacing suited for all breeds'],
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'play-activity',
    title: 'Play & Activity Time',
    icon: 'Sparkles',
    category: 'care',
    shortDescription: 'Fun interactive games, fetch, and sensory stimulation to keep dogs active.',
    fullDescription: 'Engaging playtime using safe toys, obstacle steps, tug-and-release fun, and rewarding games tailored to your pet’s personality.',
    priceHint: 'Complimentary in 2-Hr & Monthly plans',
    benefits: ['Interactive puzzle play', 'Reduces separation anxiety', 'Positive reinforcement'],
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'grooming-care',
    title: 'Basic Grooming Care',
    icon: 'Scissors',
    category: 'care',
    shortDescription: 'Simple cleanliness, post-outdoor paw sanitizing, and gentle coat brushing.',
    fullDescription: 'Non-medical basic coat brushing, post-ride paw wiping with pet-safe antiseptic wipes, tick checks, and fur freshening.',
    priceHint: 'Add-on from ₹99',
    benefits: ['Clean paws before entering home', 'De-shedding coat brushing', 'Non-medical hygiene check'],
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pet-sitting',
    title: 'Pet Sitting',
    icon: 'Home',
    category: 'care',
    shortDescription: 'Responsible, caring in-home supervision and companionship when owners are busy.',
    fullDescription: 'Attentive pet supervision in your home or designated zones. We feed on schedule, play, comfort, and provide companionship.',
    priceHint: 'Flexible hourly / day slots',
    benefits: ['Familiar home environment', 'Timely meal serving', 'Continuous companionship'],
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'regular-care-plans',
    title: 'Regular Care Plans',
    icon: 'CalendarCheck',
    category: 'plan',
    shortDescription: 'Flexible recurring schedules for dog parents who need reliable, frequent care.',
    fullDescription: 'Customizable weekly or monthly packages with dedicated handlers, flexible schedule rescheduling, and automated progress reports.',
    priceHint: 'Customized & Monthly ₹9,999',
    benefits: ['Fixed trusted handler', 'Priority weekend slots', 'Highest financial savings'],
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80'
  }
];

export const OUR_PROMISES: PromiseItem[] = [
  {
    id: 'p1',
    title: '5-Star Rated Service',
    icon: 'Star',
    description: 'Consistently praised by pet parents for utmost punctuality, boundless affection, and top safety.'
  },
  {
    id: 'p2',
    title: 'Full Care of Your Dog',
    icon: 'HeartHandshake',
    description: 'We treat your dog with genuine empathy, individual attention, and customized pacing for their unique spirit.'
  },
  {
    id: 'p3',
    title: 'Safe & Responsible Handling',
    icon: 'ShieldCheck',
    description: 'Certified gear, escape-proof double clip leashes, and rigorously trained handlers on every single outing.'
  },
  {
    id: 'p4',
    title: 'Friendly & Caring Staff',
    icon: 'Smile',
    description: 'Passionate dog lovers who hold deep canine empathy, behavioral training, and gentle patience.'
  },
  {
    id: 'p5',
    title: 'Fun Outdoor Activities',
    icon: 'Trees',
    description: 'Dynamic riding trails, green park visits, agility exercises, and fresh air sensory exploration.'
  },
  {
    id: 'p6',
    title: 'Reliable & Timely Service',
    icon: 'Clock',
    description: 'Exact doorstep pickups and drop-offs with zero delays so your work day stays perfectly smooth.'
  },
  {
    id: 'p7',
    title: 'Easy Booking',
    icon: 'PhoneCall',
    description: 'Instant booking via web or direct 1-tap call to 7387926046 with instant slot confirmation.'
  },
  {
    id: 'p8',
    title: 'Clean & Hygienic Care',
    icon: 'Sparkle',
    description: 'Thorough paw sanitizing, sanitized riding carriers, fresh clean water, and clean grooming support.'
  }
];

export const SAFETY_PILLARS: SafetyPillar[] = [
  {
    id: 'safety',
    title: 'Safety',
    icon: 'Shield',
    summary: 'Reinforced gear, escape-proof clips, and hazard-free route choices on every ride.',
    details: [
      'Ergonomic padded riding harnesses and reflective gear',
      'Pre-ride gear inspection and terrain safety audit',
      'Emergency first-response protocol and vet contact readiness'
    ]
  },
  {
    id: 'supervision',
    title: 'Supervision',
    icon: 'Eye',
    summary: '100% uninterrupted, vigilant 1-on-1 human supervision throughout the session.',
    details: [
      'Zero unmonitored moments during riding or play',
      'Constant observation of heart rate, breathing, and fatigue',
      'Controlled environmental exposure away from busy traffic'
    ]
  },
  {
    id: 'care',
    title: 'Care',
    icon: 'Heart',
    summary: 'Kindness, patience, and respecting every dog’s emotional temperament.',
    details: [
      'Positive reinforcement and gentle praise encouragement',
      'Hydration breaks every 15-20 minutes in shaded spots',
      'Individualized handling for shy, rescue, or senior dogs'
    ]
  },
  {
    id: 'exercise',
    title: 'Exercise',
    icon: 'Zap',
    summary: 'Scientifically balanced cardio to build stamina without overexertion.',
    details: [
      'Pace-matched riding and walking routines',
      'Agility and joint-friendly soft-ground paths',
      'Tailored energy burnout for high-drive and hyper breeds'
    ]
  },
  {
    id: 'communication',
    title: 'Communication',
    icon: 'MessageSquare',
    summary: 'Real-time peace of mind with WhatsApp photos, GPS trail maps, and updates.',
    details: [
      'Live WhatsApp arrival, mid-session, and drop-off updates',
      'High-resolution photos & video clips of your happy dog',
      'Direct emergency hotline & immediate response line'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Gokarna Jaishi',
    role: 'Founder & Lead Care Specialist',
    photo: gokarnaPhoto,
    experience: '8+ Years Experience',
    description: 'Founder and senior canine handler dedicated to safe outdoor riding, high-standard pet supervision, and personalized companion care.',
    specialties: ['Safety Protocol', 'Canine Behavior', 'Lead Handling']
  },
  {
    id: 'tm-2',
    name: 'Sagar',
    role: 'Dog Care & Companion Specialist',
    photo: sagarPhoto,
    experience: '4+ Years Experience',
    description: 'Passionate canine enthusiast specializing in gentle care, puppy bonding, patience training, and joyful daily companionship.',
    specialties: ['Gentle Handling', 'Puppy Care', 'Comfort & Affection']
  },
  {
    id: 'tm-3',
    name: 'Manoj Jaishi',
    role: 'Dog Riding & Activity Specialist',
    photo: manojPhoto,
    experience: '5+ Years Experience',
    description: 'Expert in high-energy canine cardio, trail dog riding pacing, interactive agility exercise, and stamina maintenance.',
    specialties: ['Outdoor Riding Trails', 'Agility Cardio', 'Pace Control']
  },
  {
    id: 'tm-4',
    name: 'Priya Nair',
    role: 'Dog Activity Specialist',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    experience: '4+ Years Experience',
    description: 'Designs interactive sensory games, fetch circuits, and socialization routines to keep canine minds enriched and stimulated.',
    specialties: ['Sensory Games', 'Social Play', 'Puppy Engagement']
  },
  {
    id: 'tm-5',
    name: 'Arjun Mehta',
    role: 'Customer Service Manager',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    experience: '7+ Years Experience',
    description: 'Ensures seamless booking, punctual pick-up logistics, dedicated parent support, and prompt photo dispatch for all DOG STAR parents.',
    specialties: ['Client Support', 'Booking Logistics', 'Parent Communication']
  }
];

export const DEMO_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    ownerName: 'Sunita & Rahul K.',
    dogName: 'Simba',
    dogBreed: 'Golden Retriever (2 yrs)',
    rating: 5,
    date: '2 days ago',
    serviceUsed: 'Monthly Standard Plan (₹9,999/mo)',
    comment: 'Subscribing to the DOG STAR Monthly Plan has been the best decision for Simba! He used to chew furniture out of boredom, but with 3 daily sessions of riding and exercise, he is calm, healthy, and ecstatic every morning when the handler arrives.',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-2',
    ownerName: 'Amitav Sen',
    dogName: 'Rocky',
    dogBreed: 'German Shepherd (3 yrs)',
    rating: 5,
    date: '1 week ago',
    serviceUsed: '2 Hours Dog Riding (₹300)',
    comment: 'Rocky is a powerhouse of energy. 1 hour normal walking was never enough. The 2-hour dog riding session gives him the full sprint and agility stimulation he craves. Safe handling, punctual team, and great video updates!',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-3',
    ownerName: 'Meera Deshmukh',
    dogName: 'Coco',
    dogBreed: 'Beagle (1.5 yrs)',
    rating: 5,
    date: '2 weeks ago',
    serviceUsed: '1 Hour Dog Riding (₹150)',
    comment: '₹150 for an entire hour of personalized riding and loving care is unbeatable value. Ananya and Rajesh are so gentle and patient. Coco literally jumps in joy when he hears their arrival. 100% recommended!',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-4',
    ownerName: 'Karthik Raman',
    dogName: 'Bruno',
    dogBreed: 'Labrador Retriever (4 yrs)',
    rating: 5,
    date: '3 weeks ago',
    serviceUsed: 'Monthly Standard Plan (₹9,999/mo)',
    comment: 'As dual IT professionals working long hours, we worried Bruno was missing out on exercise. DOG STAR handles his 3 daily outings seamlessly. The paw sanitizing and regular updates give us total peace of mind.',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQS = [
  {
    q: 'What is Dog Riding and how is it conducted safely?',
    a: 'Dog riding is an active, supervised outdoor workout where our trained handlers guide your dog alongside specialized, speed-regulated bicycles/carriers using secure, shock-absorbing dual leashes. This gives energetic dogs the brisk cardio they crave while ensuring 100% safe handling and zero strain.'
  },
  {
    q: 'How does the ₹9,999 Monthly Standard Plan work?',
    a: 'The Monthly Standard Plan gives your dog 3 dedicated sessions every day of the month (combining riding, exercise, and outdoor walks). You get a fixed trusted specialist, preferred scheduling, complimentary paw care, and direct VIP support.'
  },
  {
    q: 'Are your staff background-checked and trained?',
    a: 'Yes! Every member of the DOG STAR team undergoes rigorous background checks, canine behavioral training, first-response safety training, and gentle handling certifications.'
  },
  {
    q: 'Can I book a single trial 1-Hour session before taking a monthly plan?',
    a: 'Absolutely! You can book a single 1-Hour session for ₹150 or 2-Hour session for ₹300 to experience our high-end care first hand.'
  },
  {
    q: 'Do you offer medical or veterinary treatment?',
    a: 'We provide basic hygiene, coat brushing, and active care. For medical emergencies or clinical diagnostics, we maintain direct partnerships with accredited veterinary clinics and notify you immediately.'
  }
];
