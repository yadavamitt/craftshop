import type { Product, TeamMember, TimelineEvent } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'The Ultimate Unwinding Kit',
    vendor: 'craftshop',
    originalPrice: 2499,
    discountedPrice: 1999,
    discountPercentage: 20,
    imageUrl: 'https://placehold.co/400x500/FFF7F0/3A3A3A?text=Unwinding+Kit',
    description: 'A curated collection of our finest products to help you find balance and productivity. Includes our signature planner, a guided journal, and exclusive pre-launch offers.',
    images: ['https://placehold.co/800x600/FFF7F0/3A3A3A?text=Kit+View+1', 'https://placehold.co/800x600/FFF7F0/3A3A3A?text=Kit+View+2', 'https://placehold.co/800x600/FFF7F0/3A3A3A?text=Kit+View+3'],
  },
  {
    id: 2,
    name: 'The Productivity Planner',
    vendor: 'craftshop',
    originalPrice: 1299,
    discountedPrice: 999,
    discountPercentage: 23,
    imageUrl: 'https://placehold.co/400x500/FFF7F0/3A3A3A?text=Productivity+Planner',
    description: 'Structure your day, achieve your goals, and maintain a healthy work-life balance with our best-selling productivity planner. Designed for the modern hustler.',
    images: ['https://placehold.co/800x600/FFF7F0/3A3A3A?text=Planner+Interior', 'https://placehold.co/800x600/FFF7F0/3A3A3A?text=Planner+Cover', 'https://placehold.co/800x600/FFF7F0/3A3A3A?text=Planner+Lifestyle'],
  },
  {
    id: 3,
    name: 'Self-Care Guided Journal',
    vendor: 'craftshop',
    originalPrice: 899,
    discountedPrice: 749,
    discountPercentage: 17,
    imageUrl: 'https://placehold.co/400x500/FFF7F0/3A3A3A?text=Self-Care+Journal',
    description: 'Embark on a journey of self-discovery with prompts and exercises designed to promote mindfulness, gratitude, and well-being.',
    images: ['https://placehold.co/800x600/FFF7F0/3A3A3A?text=Journal+Prompts', 'https://placehold.co/800x600/FFF7F0/3A3A3A?text=Journal+Detail', 'https://placehold.co/800x600/FFF7F0/3A3A3A?text=Journal+with+Pen'],
  },
  {
    id: 4,
    name: 'Minimalist Weekly Deskpad',
    vendor: 'craftshop',
    originalPrice: 599,
    discountedPrice: 499,
    discountPercentage: 17,
    imageUrl: 'https://placehold.co/400x500/FFF7F0/3A3A3A?text=Weekly+Deskpad',
    description: 'Organize your week at a glance with this clean, minimalist deskpad. Perfect for tracking tasks, appointments, and notes.',
    images: ['https://placehold.co/800x600/FFF7F0/3A3A3A?text=Deskpad+Layout', 'https://placehold.co/800x600/FFF7F0/3A3A3A?text=Deskpad+on+Desk', 'https://placehold.co/800x600/FFF7F0/3A3A3A?text=Deskpad+Close-up'],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
    { name: 'Mitali Sharma', role: 'Founder & CEO', imageUrl: 'https://placehold.co/400x400/FFF7F0/3A3A3A?text=Mitali' },
    { name: 'Aarav Patel', role: 'Operations Manager', imageUrl: 'https://placehold.co/400x400/FFF7F0/3A3A3A?text=Aarav' },
    { name: 'Priya Singh', role: 'Creative Manager', imageUrl: 'https://placehold.co/400x400/FFF7F0/3A3A3A?text=Priya' },
    { name: 'Rohan Gupta', role: 'Marketing Lead', imageUrl: 'https://placehold.co/400x400/FFF7F0/3A3A3A?text=Rohan' },
    { name: 'Anika Reddy', role: 'Customer Support', imageUrl: 'https://placehold.co/400x400/FFF7F0/3A3A3A?text=Anika' },
    { name: 'Vikram Joshi', role: 'Product Development', imageUrl: 'https://placehold.co/400x400/FFF7F0/3A3A3A?text=Vikram' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
    {
        date: "2023",
        title: "The Hostel Room Start",
        description: "It all began with a dream, an iPad, and a lot of determination. Our first planner was designed and created right here, fueled by late-night coffee and a passion for balanced living."
    },
    {
        date: "October 2023",
        title: "A Good Start",
        description: "We fulfilled over 500 orders! It was a whirlwind of learning, making mistakes, and celebrating small victories. Every single order packed was worth the effort."
    },
    {
        date: "November 2023",
        title: "Out of Stock!",
        description: "We completely sold out! It was a moment of panic and pride. For a second, we thought it was the last time, but your incredible support showed us it was just the beginning."
    },
    {
        date: "December 2023",
        title: "The Journey Continued",
        description: "With renewed energy, we restocked and started planning for the future. The community we built became our biggest motivation to keep creating authentic, useful products."
    }
];