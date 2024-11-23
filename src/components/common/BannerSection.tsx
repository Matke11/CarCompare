import Link from "next/link";
import { CtaType } from "./common";

interface BannerSectionProps {
  bannerTitle: string;
  bannerMessage: string;
  bannerCTAInformation?: CtaType;
}

const BannerSection = ({
  bannerTitle,
  bannerMessage,
  bannerCTAInformation,
}: BannerSectionProps) => {
  return (
    <section
      className="relative w-full h-[600px] sm:h-[800px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1519389950473-47a6c29d6b7c")', // High-quality car image URL
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      <div className="absolute inset-0 flex justify-center items-center text-center text-white p-4">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            {bannerTitle && bannerTitle}
          </h1>
          <p className="text-base sm:text-lg mb-6">
            {bannerMessage && bannerMessage}
          </p>
          {bannerCTAInformation && (
            <Link
              href={bannerCTAInformation.linkTo}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
            >
              {bannerCTAInformation.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
