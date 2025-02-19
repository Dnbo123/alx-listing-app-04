import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import { PropertyProps } from "@/interfaces/index";
import PropertyDetail from "@/components/property/PropertyDetail";
import { BookingSection } from "@/components/property/BookingSection";
import { ReviewSection } from "@/components/property/ReviewSection";
export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProperty = async () => {
    if(!id) return;
    try {
      const response = await axios.get(`/api/properties/${id}`);
      setProperty(response.data as PropertyProps | null);
    } catch (error) {
      console.error("Error: fetching property detils:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProperty();
}, [id]);

if (loading) {
  return <p>Loading...</p>;
}

if (!property) {
  return <p>  Property not found</p>;
}

  return (
    <div>
      <PropertyDetail property={property} />
      <BookingSection property={property} />
      <ReviewSection property={property} />
    </div>
  )
}