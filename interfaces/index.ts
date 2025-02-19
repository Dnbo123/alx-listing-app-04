import React, { ReactNode } from "react";

export interface CardProps {
    
  }
  
  export interface ButtonProps {
    
  }
  export interface LayoutProps {
    children: ReactNode;
  }
export interface AddressProps {
  state: string,
  city: string,
  country: string
}

export interface OffersProps {
  bed: string,
  shower: string,
  occupants: string
}

export interface ReviewProps {
  id: string,
  propertyId: string,
  userId: string,
  rating: number,
  userName: string,
  avatar: string,
  comment?: string,
  createdAt: string
  }
  export interface PropertyProps {
    id: string,
    name : string,
    address: AddressProps,
    rating: number,
    category: string[],
    price: number,
    offers: OffersProps,
    image: string,
    discount: string,
    description: string,
    reviews: ReviewProps[]
  }