import Link from "next/link";
import SectionHeaderV1 from "../common/SectionHeaderV1";
import { CtaType } from "../common/common";
import { CarCardType } from "../TopRatedCars/types";
import CarCard from "../TopRatedCars/CarCard";
import { useState } from "react";
import FiltersAndSorting from "../common/FiltersAndSortingActions";

interface TopCarsComponentProps {
  title: string;
  description: string;
  cars: CarCardType[];
  actionButtonsInformation?: CtaType;
}

const AllCars = ({
  title,
  description,
  cars,
  actionButtonsInformation,
}: TopCarsComponentProps) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedCars, setSelectedCars] = useState<number[]>([]);

  const handleCheckboxChange = (carId: number) => {
    setSelectedCars((prevSelectedCars) =>
      prevSelectedCars.includes(carId)
        ? prevSelectedCars.filter((id) => id !== carId)
        : [...prevSelectedCars, carId]
    );
  };

  // Get unique filter options
  const makes = [...new Set(cars.map((car) => car.make))];
  const fuelTypes = [...new Set(cars.map((car) => car.fuelType))];
  const years = [...new Set(cars.map((car) => car.year))];

  // Filter cars based on selected filters
  let filteredCars = cars.filter(
    (car) =>
      (!selectedMake || car.make === selectedMake) &&
      (!selectedFuelType || car.fuelType === selectedFuelType) &&
      (!selectedYear || car.year.toString() === selectedYear)
  );

  if (sortBy === "price") {
    filteredCars = filteredCars.sort((a, b) => a.price - b.price);
  } else if (sortBy === "rating") {
    filteredCars = filteredCars.sort((a, b) => b.rating - a.rating); // Higher rating first
  }

  return (
    <section className="flex w-full justify-center gap-4 mb-8">
      <div className="w-full p-6 sm:p-12">
        <SectionHeaderV1 title={title} description={description} />
        <FiltersAndSorting
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
          selectedFuelType={selectedFuelType}
          setSelectedFuelType={setSelectedFuelType}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          sortBy={sortBy}
          setSortBy={setSortBy}
          makes={makes}
          fuelTypes={fuelTypes}
          years={years}
        />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <CarCard
                key={car.id}
                index={index}
                car={car}
                selectedCars={selectedCars}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center p-6 bg-gray-100 rounded-md shadow-md">
              <p className="text-lg font-semibold text-gray-600">
                🚗 No cars found for the selected filters. Please try adjusting
                your search criteria.
              </p>
            </div>
          )}
        </section>

        {actionButtonsInformation && (
          <div className="mt-8 text-center">
            <Link
              href={actionButtonsInformation.linkTo}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
            >
              {actionButtonsInformation.text}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCars;
