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
  rating?: number,
  id?: string,
  text: string
  avatar: string,
  name: string,
  comment?: string
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