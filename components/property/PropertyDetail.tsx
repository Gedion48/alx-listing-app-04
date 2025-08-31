interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: number;
    image: string;
    description: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-96 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-500">{property.location}</p>
      <p className="text-green-600 font-semibold mt-2">
        ${property.price} / night
      </p>
      <p className="mt-4">{property.description}</p>
    </div>
  );
}
