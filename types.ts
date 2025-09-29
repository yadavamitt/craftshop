
export interface Product {
  id: number;
  name: string;
  vendor: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  imageUrl: string;
  description: string;
  images: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface TimelineEvent {
    date: string;
    title: string;
    description: string;
}
