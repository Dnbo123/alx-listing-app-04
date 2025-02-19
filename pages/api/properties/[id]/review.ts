import { ReviewProps } from "@/interfaces";
import type { NextApiRequest, NextApiResponse } from 'next';

const reviews: ReviewProps[] = [
    {
      id: "1",
      propertyId: "1",
      userId: "user1",
      rating: 4.5,
      comment: "Beautiful property with amazing views! The host was very accommodating and responsive.",
      userName: "John Doe",
      avatar: "/images/avatars/user1.jpg",
      createdAt: "2024-02-15T10:00:00Z"
    },
    {
      id: "2",
      propertyId: "1",
      userId: "user2",
      rating: 5,
      comment: "Perfect stay! The villa exceeded our expectations. Very clean and well-maintained.",
      userName: "Jane Smith",
      avatar: "/images/avatars/user2.jpg",
      createdAt: "2024-02-10T15:30:00Z"
    }
  ];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;

    if(req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed'});
    }

    try {
        const reviewsApi = reviews.filter(reviewProps => reviewProps.propertyId === id);

        if (!reviewsApi.length) {
            return res.status(404).json({ message: 'No reviews for this property'});
        }

          // Add response headers for caching if needed
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

        return res.status(200).json({
            reviews: reviewsApi,
            total: reviewsApi.length,
            averageRating: reviewsApi.reduce((acc, reviewProps) => acc + reviewProps.rating, 0)
        });

    } catch (error) {
        console.error('Error fetching reviews:', error);
        return res.status(500).json({ message: 'Internal server error'});
    }
}
