import { CarCardType } from "./types";

interface CarCardProps {
  index: number;
  car: CarCardType;
  handleCheckboxChange: (carId: number) => void;
  selectedCars: number[];
}

const CarCard = ({
  index,
  car,
  handleCheckboxChange,
  selectedCars,
}: CarCardProps) => {
  const { make, engine, year, rating, fuelType, image, price, mileage, model } =
    car;
  return (
    <div
      key={index}
      className="w-full bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 relative"
      role="article"
      aria-labelledby={`car-${index + 1}`}
      onClick={() => handleCheckboxChange(car.id)}
    >
      <div className="absolute top-2 right-2 z-10">
        <input
          type="checkbox"
          id={`car-checkbox-${index}`}
          className="w-5 h-5"
          checked={selectedCars.includes(car.id)}
          aria-label={`Select ${car.make} for comparison`}
          onChange={() => handleCheckboxChange(car.id)}
        />
      </div>

      <div className="relative w-full h-48 bg-gray-200">
        <img
          src={image || "https://via.placeholder.com/400x250?text=Car+Image"}
          alt={`Car ${index + 1}`}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>

      <div className="p-4">
        <h2
          id={`car-${index + 1}`}
          className="text-xl font-semibold text-gray-800 mb-2"
        >
          {make} {model}
        </h2>
        <div className="text-gray-600 space-y-2">
          {engine && (
            <p>
              <strong>Engine:</strong> {engine}
            </p>
          )}
          {price && (
            <p>
              <strong>Price:</strong> {price}
            </p>
          )}
          {mileage && (
            <p>
              <strong>Mileage:</strong> {mileage}
            </p>
          )}
          {rating && (
            <p>
              <strong>Rating:</strong> {rating} / 5
            </p>
          )}
          {year && (
            <p>
              <strong>Year:</strong> {year}
            </p>
          )}
          {fuelType && (
            <p>
              <strong>Fuel Type:</strong> {fuelType}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
