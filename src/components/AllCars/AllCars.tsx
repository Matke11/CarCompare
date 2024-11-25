"use client";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
import SectionHeaderV1 from "../common/SectionHeaderV1";
import { SelectType } from "../common/common.types";
import CarCard from "../common/CarCard";
import FiltersAndSorting from "../common/FiltersAndSortingActions";
import SidePanel from "../common/sidepanel/SidePanel";
import { CarCardType } from "../global.types";

interface TopCarsComponentProps {
  title: string;
  description: string;
  cars: CarCardType[];
}

const AllCars = ({ title, description, cars }: TopCarsComponentProps) => {
  const [selectedMake, setSelectedMake] = useState({
    value: "",
    label: "All Makes",
  });
  const [selectedFuelType, setSelectedFuelType] = useState({
    value: "",
    label: "All Fuel Types",
  });
  const [selectedYear, setSelectedYear] = useState({
    value: "",
    label: "All Years",
  });
  const [sortBy, setSortBy] = useState({
    value: "",
    label: "No sort",
  });
  const [sidePanelState, setSidePanelState] = useState(false);
  const [selectedCars, setSelectedCars] = useState<CarCardType[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarCardType[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);

  const sortingOptions = [
    {
      value: "",
      label: "No sort",
    },
    {
      value: "price",
      label: "Price Low to High",
    },
    {
      value: "rating",
      label: "Rating High to Low",
    },
  ];

  const handleSelectUnselectCar = (selectedCar: CarCardType) => {
    setSelectedCars((prevSelectedCars) =>
      prevSelectedCars.includes(selectedCar)
        ? prevSelectedCars.filter((car) => car.id !== selectedCar.id)
        : [...prevSelectedCars, selectedCar]
    );
  };

  const makes: SelectType[] = [
    { value: "", label: "All Makes" },
    ...[...new Set(cars.map((car) => car.make))].map((make) => ({
      value: make,
      label: make,
    })),
  ];

  const fuelTypes: SelectType[] = [
    { value: "", label: "All Fuel Types" },
    ...[...new Set(cars.map((car) => car.fuelType))].map((fuelType) => ({
      value: fuelType,
      label: fuelType,
    })),
  ];

  const years: SelectType[] = [
    { value: "", label: "All Years" },
    ...[...new Set(cars.map((car) => car.year))].map((year) => ({
      value: year.toString(),
      label: year.toString(),
    })),
  ];

  useEffect(() => {
    let newFilteredCars = cars.filter(
      (car) =>
        (!selectedMake.value || car.make === selectedMake.value) &&
        (!selectedFuelType.value || car.fuelType === selectedFuelType.value) &&
        (!selectedYear.value || car.year.toString() === selectedYear.value)
    );

    if (sortBy.value === "price") {
      newFilteredCars = newFilteredCars.sort((a, b) => a.price - b.price);
    } else if (sortBy.value === "rating") {
      newFilteredCars = newFilteredCars.sort((a, b) => b.rating - a.rating);
    }

    setFilteredCars([...newFilteredCars]);
  }, [selectedMake, selectedFuelType, selectedYear, sortBy, cars]);

  return (
    <>
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
            sortingOptions={sortingOptions}
            makes={makes}
            fuelTypes={fuelTypes}
            years={years}
          />

          <section
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            // [data-testid="all-cars"]
            data-testid="all-cars"
          >
            {filteredCars.length > 0 ? (
              filteredCars
                .slice(0, visibleCount)
                .map((car, index) => (
                  <CarCard
                    key={car.id}
                    index={index}
                    car={car}
                    selectedCars={selectedCars}
                    handleCheckboxChange={handleSelectUnselectCar}
                  />
                ))
            ) : (
              <div className="col-span-full flex justify-center items-center p-6 bg-gray-100 rounded-md shadow-md">
                <p className="text-lg font-semibold text-gray-600">
                  🚗 No cars found for the selected filters. Please try
                  adjusting your search criteria.
                </p>
              </div>
            )}
          </section>
          {filteredCars.length > visibleCount && (
            <div className="flex justify-center mt-6">
              <button
                disabled={cars.length <= visibleCount}
                onClick={() => setVisibleCount((prevCount) => prevCount + 10)}
                className={`px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700`}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      <div>
        {!sidePanelState && (
          <div
            className={`floating-compare-button ${
              selectedCars.length <= 1 && "disabled-wrapper"
            }`}
          >
            <button
              disabled={selectedCars.length <= 1}
              onClick={() => setSidePanelState(true)}
            >
              Compare ({selectedCars.length})
            </button>
          </div>
        )}
        <SidePanel
          isOpen={sidePanelState}
          onClose={() => setSidePanelState(!sidePanelState)}
          selectedCars={selectedCars}
          handleRemoveCar={handleSelectUnselectCar}
        />
      </div>
    </>
  );
};

export default AllCars;
