import TopRated from "@/components/TopRatedCars";
import BannerSection from "@/components/common/BannerSection";
import { mockCarsData } from "@/data/cars";

export default async function Home() {
  const topRatedCars = mockCarsData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  const cheapestCars = mockCarsData
    .sort((a, b) => a.price - b.price)
    .slice(0, 5);
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
          cars={topRatedCars}
          description="Check out the best-rated cars based on user reviews. Discover which models are leading the market!"
        />
        <TopRated
          title="Most Cheapest Cars"
          cars={cheapestCars}
          description="Check out the cheapest cars!"
        />
      </main>
    </div>
  );
}
