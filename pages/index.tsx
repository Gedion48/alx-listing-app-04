import Layout from "@/components/layout/Layout";
import { properties } from "@/constants/properties";

export default function Home() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-6">Featured Listings</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-sm text-gray-500">{property.location}</p>
              <p className="text-md font-bold">${property.price}/mo</p>
              <div className="text-sm text-gray-600">
                🛏 {property.beds} | 🛁 {property.baths} | 📐 {property.size}{" "}
                sqft
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
