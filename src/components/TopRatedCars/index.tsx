import Link from "next/link";
import CarCard from "./CarCard";
import SectionHeaderV1 from "../common/SectionHeaderV1";
import { CarCardType } from "./types";

interface TopCarsComponentProps {
  title: string;
  description: string;
  cars: CarCardType[];
}

const TopRated = ({ title, description, cars }: TopCarsComponentProps) => {
  return (
    <section>
      <div className="w-full p-6 sm:p-12">
        <SectionHeaderV1 title={title} description={description} />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cars.map((car, index) => (
            <CarCard
              index={index}
              carEngine={car.carEngine}
              carModel={car.carModel}
              carName={car.carBrand}
              carPriceRange={car.priceRange}
            />
          ))}
        </section>

        <div className="mt-8 text-center">
          <Link
            href="/all-cars"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
          >
            View All Cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
