import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces/index";

export const ReviewSection: React.FC<{ property: PropertyProps}> = ({ property }) => {
    return (
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Reviews</h3>
        <div className="flex items-center mb-4">
        <span className="text-yellow-500 mr-2">{property.rating} stars</span>
      </div>
        {property.reviews.map((review, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <div className="flex items-center">
          <Image 
          src="/placeholder-avatar.jpg"
          alt="Review Avatar"
          fill
          className="rounded-full object-cover"
          />
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-yellow-500">{review.rating} stars</p>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ReviewSection;