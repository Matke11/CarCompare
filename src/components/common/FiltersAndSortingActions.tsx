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
        <label className="block mb-1 text-sm text-gray-800">Brands</label>
        <Select
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
        <label className="block mb-1 text-sm text-gray-800">Fuel Type</label>
        <Select
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
        <label className="block mb-1 text-sm text-gray-800">
          Construction Year
        </label>
        <Select
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
        <label className="block mb-1 text-sm text-gray-800">Sort by</label>
        <Select
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
