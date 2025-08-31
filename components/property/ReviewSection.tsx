import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

interface ReviewSectionProps {
  propertyId: number;
}

export default function ReviewSection({ propertyId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="text-gray-500">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border p-4 rounded shadow-sm bg-white">
          <p className="font-semibold">{review.name}</p>
          <p className="text-gray-700">{review.comment}</p>
          <p className="text-yellow-500">⭐ {review.rating}</p>
        </div>
      ))}
    </div>
  );
}
