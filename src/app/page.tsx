import AllCars from "@/components/AllCars/AllCars";
import { mockCarsData } from "@/data/cars";

export default async function Home() {
  return (
    <div className=" items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <AllCars
          title="Compare Your Favorite Cars"
          cars={mockCarsData}
          description="Find the best car for your needs with just a few clicks."
        />
      </main>
    </div>
  );
}
