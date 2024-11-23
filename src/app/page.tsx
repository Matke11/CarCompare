import TopRated from "@/components/TopRatedCars";
import { CarCardType } from "@/components/TopRatedCars/types";
import BannerSection from "@/components/common/BannerSection";

const mockCarsData: CarCardType[] = [
  {
    carBrand: "Skoda",
    carEngine: "1.6 TDI",
    carModel: "SuperB",
    priceRange: "22000 - 23000 EURO",
  },
  {
    carBrand: "Audi",
    carEngine: "1.6 TDI",
    carModel: "A3",
    priceRange: "22000 - 23000 EURO",
  },
  {
    carBrand: "Mazda",
    carEngine: "2.0",
    carModel: "Mazda 6",
    priceRange: "22000 - 23000 EURO",
  },
  {
    carBrand: "Geely",
    carEngine: "1.5 Hybrid",
    carModel: "Atlas Pro",
    priceRange: "22000 - 23000 EURO",
  },
  {
    carBrand: "Volkswagen",
    carEngine: "1.6 TDI",
    carModel: "Golf 5",
    priceRange: "22000 - 23000 EURO",
  },
];

export default function Home() {
  return (
    <div className=" items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <BannerSection
          bannerTitle="Compare Your Favorite Cars"
          bannerMessage="Find the best car for your needs with just a few clicks."
          bannerCTAInformation={{ linkTo: "/compare", text: "Start Comparing" }}
        />
        <TopRated
          title="Top Rated Cars"
          cars={mockCarsData}
          description="Check out the best-rated cars based on user reviews. Discover which models are leading the market!"
        />
        <TopRated
          title="Top Searched Cars"
          cars={mockCarsData}
          description="Check out top searched cars based on user searches"
        />
      </main>
    </div>
  );
}
