"use client";
import Hero from "./components/Hero";
import CardGrid from "./components/HomeCards";
import HomeCarousel from "./components/HomeCarousel";
import HomeBestSellers from "./components/HomeBestSellers";
import LocationHours from "./components/LocationHours";
import FadeInUp from "./components/FadeInUp";

export default function Home() {
  return (
    <div className="bg-background m-2 lg:m-5 px-4 md:px-12">
      <FadeInUp>
        <Hero />
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
              <p className="text-2xl font-ortica leading-relaxed">
                We believe beauty is more than skin deep—it's about feeling
                confident in your own skin. That’s why we create cosmetics for
                the whole body, designed to nourish, protect, and enhance every
                part of you. From natural ingredients to sustainable practices,
                every product we craft reflects our passion for inclusivity and
                quality.
                <br />
                <br />
                Join us in celebrating beauty for everybody, every day.
              </p>

              <button className="mt-6 px-4 py-2 lg:px-6 lg:py-3 font-ortica bg-primary text-white text-base lg:text-lg font-medium rounded-full shadow-md transition-all duration-300 hover:bg-white hover:text-primary">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </FadeInUp>

      <div className="py-20 lg:py-36 lg:px-64">
        <h2 className="text-3xl font-ortica text-left text-primary mb-8">
          Real skin, real results
        </h2>
        <FadeInUp>
          <HomeCarousel />
        </FadeInUp>
      </div>

      <FadeInUp>
        <HomeBestSellers />
      </FadeInUp>

      <FadeInUp>
        <LocationHours />
      </FadeInUp>
    </div>
  );
}
