"use client";
import HomeBanner from "./components/HomeBanner";
import CardGrid from "./components/HomeCards";
import HomeCarousel from "./components/HomeCarousel";
import HomeBestSellers from "./components/HomeBestSellers";
import LocationHours from "./components/LocationHours";
import FadeInUp from "./components/FadeInUp";

export default function Home() {
  return (
    <div className="bg-background m-2 lg:m-5 px-4 md:px-12">
      <FadeInUp>
        <HomeBanner />
      </FadeInUp>

      <FadeInUp>
        <CardGrid />
      </FadeInUp>

      <FadeInUp>
        <div className="text-primary flex items-center lg:px-3">
          <div className="mx-auto flex flex-col lg:flex-row justify-between w-full">
            {/* Left Column */}
            <div className="lg:w-2/5 w-full mb-6 lg:mb-0">
              <h2 className="text-3xl lg:text-5xl font-ortica">My mission</h2>
            </div>

            {/* Right Column */}
            <div className="lg:w-3/5 w-full">
              <p className="text-xl lg:text-2xl font-ortica leading-relaxed">
                We believe beauty is more than skin deep—it's about feeling
                confident in your own skin...
              </p>

              <button className="mt-6 px-4 py-2 lg:px-6 lg:py-3 font-ortica bg-primary text-white text-base lg:text-lg font-medium rounded-full shadow-md transition-all duration-300 hover:bg-white hover:text-primary">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </FadeInUp>

      <FadeInUp>
        <HomeCarousel />
      </FadeInUp>

      <FadeInUp>
        <HomeBestSellers />
      </FadeInUp>

      <FadeInUp>
        <LocationHours />
      </FadeInUp>
    </div>
  );
}
