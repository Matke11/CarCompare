import BannerSection from "@/components/common/BannerSection";

const CarsPage = () => {
  return (
    <div className=" items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <BannerSection
          bannerTitle="Compare Your Favorite Cars"
          bannerMessage="Find the best car for your needs with just a few clicks."
        />
        {/* <TopRated
          title="Top Rated Cars"
          cars={mockCarsData}
          description="Check out the best-rated cars based on user reviews. Discover which models are leading the market!"
        />
        <TopRated
          title="Top Searched Cars"
          cars={mockCarsData}
          description="Check out top searched cars based on user searches"
        /> */}
      </main>
    </div>
  );
};

export default CarsPage;
