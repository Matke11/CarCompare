import React from "react";
import dynamic from "next/dynamic";
import { SelectType } from "./common";
import { CSSObjectWithLabel } from "react-select";

const Select = dynamic(() => import("react-select"), { ssr: false });

interface FiltersAndSortingProps {
  selectedMake: SelectType;
  setSelectedMake: (value: SelectType) => void;
  selectedFuelType: SelectType;
  setSelectedFuelType: (value: SelectType) => void;
  selectedYear: SelectType;
  setSelectedYear: (value: SelectType) => void;
  sortBy: SelectType;
  setSortBy: (value: SelectType) => void;
  makes: SelectType[];
  fuelTypes: SelectType[];
  years: SelectType[];
  sortingOptions: SelectType[];
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
  sortingOptions,
  makes,
  fuelTypes,
  years,
}) => {
  const customStyles = {
    menu: (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
      ...provided,
      zIndex: 99,
    }),
  };
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8 px-4">
      <div className="w-full max-w-sm">
        <label className="block mb-1 text-sm text-gray-800" htmlFor="brands">
          Brands
        </label>
        <Select
          id="brands"
          name="brands"
          aria-labelledby="brands"
          aria-describedby="brands-help"
          options={makes}
          value={selectedMake}
          onChange={(selectedOption) =>
            setSelectedMake(selectedOption as SelectType)
          }
          placeholder="Select an option"
          styles={customStyles}
        />
      </div>
      <div className="w-full max-w-sm">
        <label className="block mb-1 text-sm text-gray-800" htmlFor="fuel-type">
          Fuel Type
        </label>
        <Select
          id="fuel-type"
          name="fuel-type"
          aria-labelledby="fuel-type"
          aria-describedby="fuel-type-help"
          options={fuelTypes}
          value={selectedFuelType}
          styles={customStyles}
          onChange={(selectedOption) =>
            setSelectedFuelType(selectedOption as SelectType)
          }
          placeholder="Select an option"
        />
      </div>
      <div className="w-full max-w-sm">
        <label className="block mb-1 text-sm text-gray-800" htmlFor="year">
          Construction Year
        </label>
        <Select
          id="year"
          name="year"
          aria-labelledby="year"
          aria-describedby="year-help"
          options={years}
          value={selectedYear}
          styles={customStyles}
          onChange={(selectedOption) =>
            setSelectedYear(selectedOption as SelectType)
          }
          placeholder="Select an option"
        />
      </div>
      <div className="w-full max-w-sm">
        <label className="block mb-1 text-sm text-gray-800" htmlFor="sort">
          Sort by
        </label>
        <Select
          id="sort"
          name="sort"
          aria-labelledby="sort"
          aria-describedby="sort-help"
          options={sortingOptions}
          value={sortBy}
          styles={customStyles}
          onChange={(selectedOption) => setSortBy(selectedOption as SelectType)}
          placeholder="Select an option"
        />
      </div>
    </div>
  );
};

export default FiltersAndSorting;
