import React from "react";
import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";

/**
 * PropertyDetail component renders detailed information about a property
 * @param property - PropertyProps object containing the property details
 * @returns JSX elements for the PropertyDetail component
 */
export const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  // render the property details

  return (
    <div className="container mx-auto p-6">
      {/* render the property name */}
      <h1 className="text-4xl font-bold">{property.name}</h1>

      {/* render the property rating and address */}
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* render the property image */}
        <Image 
          src={property.image}
          alt={property.name}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {/* Add more images */}
      </div>

      {/* Description */}
      <div className="mt-4">
        {/* render the property description */}
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        {/* render the property amenities */}
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
