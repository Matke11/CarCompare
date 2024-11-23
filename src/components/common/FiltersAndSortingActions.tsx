import React from "react";

interface FiltersAndSortingProps {
  selectedMake: string;
  setSelectedMake: React.Dispatch<React.SetStateAction<string>>;
  selectedFuelType: string;
  setSelectedFuelType: React.Dispatch<React.SetStateAction<string>>;
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  makes: string[];
  fuelTypes: string[];
  years: number[];
}

const FiltersAndSorting: React.FC<FiltersAndSortingProps> = ({
  selectedMake,
  setSelectedMake,
  selectedFuelType,
  setSelectedFuelType,
  selectedYear,
  setSelectedYear,
  sortBy,
  setSortBy,
  makes,
  fuelTypes,
  years,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8 px-4">
      <div>
        {/* <label
          htmlFor="Brands"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Brands
        </label> */}
        <select
          id="Brands"
          aria-label="Car Brands"
          className="p-2 border rounded w-full sm:w-auto text-lg"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
        >
          <option value="">All Brands</option>
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      <div>
        {/* <label
          htmlFor="FuelTypes"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Fuel Types
        </label> */}
        <select
          id="FuelTypes"
          aria-label="Car Brands"
          className="p-3 border rounded w-full sm:w-auto text-lg"
          value={selectedFuelType}
          onChange={(e) => setSelectedFuelType(e.target.value)}
        >
          <option value="">All Fuel Types</option>
          {fuelTypes.map((fuelType) => (
            <option key={fuelType} value={fuelType}>
              {fuelType}
            </option>
          ))}
        </select>
      </div>

      <div>
        {/* <label
          htmlFor="Years"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Years
        </label> */}
        <select
          id="Years"
          aria-label="Year"
          className="p-3 border rounded w-full sm:w-auto text-lg"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        {/* <label
          htmlFor="Sort"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Sort
        </label> */}
        <select
          id="Sort"
          aria-label="Sort"
          className="p-3 border rounded w-full sm:w-auto text-lg"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price">Price (Low to High)</option>
          <option value="rating">Rating (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersAndSorting;
