import TopRated from "@/components/TopRatedCars";
import { CarCardType } from "@/components/TopRatedCars/types";
import BannerSection from "@/components/common/BannerSection";
import { mockCarsData } from "@/data/cars";
import axios from "axios";

export default async function Home() {
  // const response = await axios.get("https://freetestapi.com/api/v1/cars");
  // const cars: CarCardType[] = response.data;
  const limitedCars = mockCarsData.slice(0, 5);
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
          cars={limitedCars}
          description="Check out the best-rated cars based on user reviews. Discover which models are leading the market!"
        />
        <TopRated
          title="Top Searched Cars"
          cars={limitedCars}
          description="Check out top searched cars based on user searches"
        />
      </main>
    </div>
  );
}
