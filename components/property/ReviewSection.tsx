import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/interfaces/index";

export const ReviewSection: React.FC<{ property: PropertyProps }> = ({ property }) => {
  /**
   * This component renders a section of reviews for a given property.
   * It takes a property object as a prop which contains an array of reviews.
   * Each review is rendered as a div with a class of "border-b pb-4 mb-4".
   * Inside each div, there is an image, a name, a rating, and a comment.
   * The image is a placeholder avatar and the name, rating, and comment are taken from the review object.
   */
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      <div className="flex items-center mb-4">
        {/* The rating is displayed as a number of yellow stars */}
        <span className="text-yellow-500 mr-2">{property.rating} stars</span>
      </div>
      {/* Loop through each review in the property's reviews array */}
      {property.reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex items-center">
            {/* The avatar is a placeholder image */}
            <Image
              src="/placeholder-avatar.jpg"
              alt="Review Avatar"
              fill
              className="rounded-full object-cover"
            />
            <div>
              {/* The name is displayed in bold font */}
              <p className="font-bold">{review.name}</p>
              {/* The rating is displayed as a number of yellow stars */}
              <p className="text-yellow-500">{review.rating} stars</p>
              {/* The comment is displayed in a paragraph */}
              <p className="text-gray-700">{review.comment}</p>
            </div>
          </div>
          {/* The comment is also displayed as a paragraph below the avatar and name */}
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
