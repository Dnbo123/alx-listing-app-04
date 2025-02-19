import React from 'react';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { Star, Bed, Users } from 'lucide-react';

const filterCategories = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Beach Access",
  "Mountain View",
  "Private Pool",
  "City Center",
  "Free Wifi"
];

const Pill: React.FC<{ label: string }> = ({ label }) => (
  <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors text-sm whitespace-nowrap">
    {label}
  </button>
);

const PropertyCard: React.FC<{ property: typeof PROPERTYLISTINGSAMPLE[0] }> = ({ property }) => (
  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
    <div className="relative">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      {property.discount && (
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
          {property.discount}% OFF
        </div>
      )}
    </div>
    
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg">{property.name}</h3>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="ml-1 text-sm">{property.rating}</span>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-2">
        {property.address.city}, {property.address.country}
      </p>
      
      <div className="flex space-x-4 mb-3">
        <div className="flex items-center text-gray-600">
          <Bed className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.offers.bed}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="text-sm">{property.offers.shower}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.offers.occupants}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">${property.price.toLocaleString()}</p>
        <button className="px-4 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary/90">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundBlendMode: 'multiply'
          }}
        />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {filterCategories.map((category) => (
            <Pill key={category} label={category} />
          ))}
        </div>
      </section>

      {/* Listings Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}