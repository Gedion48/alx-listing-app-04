interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  beds: number;
  baths: number;
  size: number;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
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
          🛏 {property.beds} | 🛁 {property.baths} | 📐 {property.size} sqft
        </div>
      </div>
    </div>
  );
}
