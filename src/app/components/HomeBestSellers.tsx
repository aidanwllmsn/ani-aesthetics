"use client";

import { useEffect, useState } from "react";

const HomeBestSellers = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Cleanup function to destroy the carousel on unmount
    return () => {
      const carouselElement = document.querySelector("[data-hs-carousel]");
      if (carouselElement) {
        // Cast the result to HTMLElement
        const carouselInstance = window.HSCarousel.getInstance(
          carouselElement as HTMLElement
        );
        if (carouselInstance) {
          carouselInstance.destroy(); // Destroy the carousel instance
        }
      }
    };
  }, []);

  useEffect(() => {
    if (isMounted && window.HSCarousel) {
      window.HSCarousel.autoInit("[data-hs-carousel]"); // Reinitialize the carousel
    }
  }, [isMounted]);

  return (
    <div className="lg:px-3">
      <div className="flex items-center justify-between w-full mb-8 lg:mb-16">
        <h2 className="text-3xl font-ortica text-primary">Top Sellers</h2>
        <button className="text-primary text-xl font-ortica underline hover:no-underline">
          Shop all
        </button>
      </div>
      <div
        data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
  "slidesQty": {
    "xs": 1,
    "lg": 3
  },
  "isDraggable": true
}'
        className="relative"
      >
        <div className="hs-carousel w-full overflow-hidden bg-transparent rounded-lg">
          <div className="relative min-h-[24rem] lg:min-h-[32rem] -mx-1">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
              <div className="hs-carousel-slide px-3">
                <div className="flex justify-center h-full bg-gray-100 p-6 rounded-lg">
                  <span className="self-center text-sm text-gray-800 transition duration-700">
                    First slide
                  </span>
                </div>
              </div>
              <div className="hs-carousel-slide px-3">
                <div className="flex justify-center h-full bg-gray-200 p-6 rounded-lg">
                  <span className="self-center text-sm text-gray-800 transition duration-700">
                    Second slide
                  </span>
                </div>
              </div>
              <div className="hs-carousel-slide px-3">
                <div className="flex justify-center h-full bg-gray-300 p-6 rounded-lg">
                  <span className="self-center text-sm text-gray-800 transition duration-700">
                    Third slide
                  </span>
                </div>
              </div>
              <div className="hs-carousel-slide px-3">
                <div className="flex justify-center h-full bg-gray-100 p-6 rounded-lg">
                  <span className="self-center text-sm text-gray-800 transition duration-700">
                    Fourth slide
                  </span>
                </div>
              </div>
              <div className="hs-carousel-slide px-3">
                <div className="flex justify-center h-full bg-gray-200 p-6 rounded-lg">
                  <span className="self-center text-sm text-gray-800 transition duration-700">
                    Fifth slide
                  </span>
                </div>
              </div>
              <div className="hs-carousel-slide px-3">
                <div className="flex justify-center h-full bg-gray-300 p-6 rounded-lg">
                  <span className="self-center text-sm text-gray-800 transition duration-700">
                    Sixth slide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
      </div>
    </div>
  );
};

export default HomeBestSellers;
