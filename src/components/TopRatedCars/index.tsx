import Link from "next/link";
import CarCard from "./CarCard";
import SectionHeaderV1 from "../common/SectionHeaderV1";
import { CarCardType } from "./types";
import { CtaType } from "../common/common";

interface TopCarsComponentProps {
  title: string;
  description: string;
  cars: CarCardType[];
  actionButtonsInformation?: CtaType;
}

const TopRated = ({
  title,
  description,
  cars,
  actionButtonsInformation,
}: TopCarsComponentProps) => {
  return (
    <section>
      <div className="w-full p-6 sm:p-12">
        <SectionHeaderV1 title={title} description={description} />

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cars.map((car, index) => (
            <CarCard
              key={car.id}
              index={index}
              carEngine={car.engine}
              carModel={car.model}
              carName={car.make}
              carPrice={car.price}
              carImage={car.image}
            />
          ))}
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

export default TopRated;
