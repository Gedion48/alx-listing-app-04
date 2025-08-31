import { NextApiRequest, NextApiResponse } from "next";

const mockReviews = {
  1: [
    { id: 1, name: "Alice", comment: "Great place!", rating: 5 },
    { id: 2, name: "Bob", comment: "Very comfortable.", rating: 4 },
  ],
  2: [
    { id: 3, name: "Charlie", comment: "Amazing view!", rating: 5 },
  ],
  3: [],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (req.method === "GET") {
    const reviews = mockReviews[id as string] || [];
    return res.status(200).json(reviews);
  }
  res.status(405).json({ message: "Method not allowed" });
}
