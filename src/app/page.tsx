import AllCars from "@/components/AllCars/AllCars";
import BannerSection from "@/components/common/BannerSection";
import { mockCarsData } from "@/data/cars";

export default async function Home() {
  return (
    <div className=" items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <BannerSection
          bannerTitle="Compare Your Favorite Cars"
          bannerMessage="Find the best car for your needs with just a few clicks."
        />
        <AllCars
          title="All Cars"
          cars={mockCarsData}
          description="Check out all cars"
        />
      </main>
    </div>
  );
}
