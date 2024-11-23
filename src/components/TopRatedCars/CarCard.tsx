interface CarCardProps {
  index: number;
  carName: string;
  carModel: string;
  carEngine: string;
  carPriceRange: string;
}

const CarCard = ({
  index,
  carName,
  carModel,
  carEngine,
  carPriceRange,
}: CarCardProps) => {
  return (
    <div
      key={index}
      className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
      role="article"
      aria-labelledby={`car-${index + 1}`}
    >
      <div className="relative w-full h-48 bg-gray-200">
        <img
          src="https://via.placeholder.com/400x250?text=Car+Image"
          alt={`Car ${index + 1}`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h2
          id={`car-${index + 1}`}
          className="text-xl font-semibold text-gray-800"
        >
          {carName} {carModel}
        </h2>
        <p className="text-gray-600">Brand: {carName}</p>
        <p className="text-gray-600">Model: {carModel}</p>
        <p className="text-gray-600">Engine: {carEngine}</p>
        <p className="text-gray-600">Price: {carPriceRange}</p>
      </div>
    </div>
  );
};

export default CarCard;
