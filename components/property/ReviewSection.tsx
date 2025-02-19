import axios from "axios";
import {useState, useEffect} from "react";
import { ReviewsResponse } from "@/interfaces";
import { ReviewProps } from "@/interfaces";
import Image from "next/image";

const ReviewSection: React.FC<{ propertyId: string}> = ({ propertyId }) => {
  const[reviewsData, setReviewsData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get<ReviewsResponse>(`/api/properties/${propertyId}/reviews`);
        setReviewsData(response.data);
      } catch (error) {
        console.error(error instanceof Error ? error.message : "Error fetching reviews:", error);
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [propertyId]);
  
  if (loading) {
    return <p className="text-gray-600">Loading reviews...</p>;
  }

  if(error) {
    return (
      <p className="mt-6 p-4 text-red-500 rounded-lg">{error}</p>
    );
  }

  if(!reviewsData || reviewsData.reviews.length === 0) {
    return(
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p>No reviews yet for this Property</p>
      </div>
    )
  }

    return(
      <div className="mt-6">
        <div className="flex items-center justify-between mb-6">
       <h2 className="text-2xl font semibold">
           Reviews ({reviewsData.total})
       </h2>
       <div className="flex items-center">
        <span className="text-yellow-500 font-bold mr-2">
          {reviewsData.averageRating.toFixed(1)}
        </span>
        <span className="text-gray-600">
          average Rating
        </span>
       </div>
        </div>


        <div className="space-y-6">
        {reviewsData.reviews.map((ReviewProps) => (
          <div key={ReviewProps.id} className="border-b pb-6">
            <div className="flex items-start space-x-4">
              <div className="relative w-12 h-12">
                {ReviewProps.avatar ? (
                  <Image
                    src={ReviewProps.avatar}
                    alt={ReviewProps.userName}
                    fill
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-lg">
                      {ReviewProps.userName.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{ReviewProps.userName}</h3>
                  <span className="text-gray-500 text-sm">
                    {new Date(ReviewProps.createdAt).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center mt-1 mb-2">
                  <span className="text-yellow-500">{ReviewProps.rating} ★</span>
                </div>  

                <p className="text-gray-700">{ReviewProps.comment}</p>
            </div>
         </div>
        </div>
        ))}
        </div>
      </div>
    );
};

export default ReviewSection;