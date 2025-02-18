"use client";

import { useEffect, useState } from "react";

const HomeCarousel = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const openFullscreen = (imageSrc: string) => {
    setFullscreenImage(imageSrc);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

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
    <div className="py-24 lg:py-36 lg:px-64">
      <h2 className="text-3xl font-ortica text-left text-primary mb-8">
        Real skin, real results
      </h2>
      <div
        data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
        "isAutoPlay": true
      }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-[32rem] lg:min-h-[42rem] bg-transparent rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {[
              "/slide1.png",
              "/slide2.png",
              "/slide3.png",
              "/slide4.png",
              "/slide5.png",
            ].map((src, index) => (
              <div key={index} className="hs-carousel-slide">
                <div className="flex justify-center items-center h-full bg-gray-100">
                  <img
                    src={src}
                    alt="Image"
                    className="w-full h-[32rem] lg:h-[42rem] rounded-xl z-0 object-cover transition duration-700 cursor-pointer"
                    onClick={() => openFullscreen(src)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full bg-gradient-to-l from-transparent to-background/50 rounded-e-lg text-white hover:bg-background hover:opacity-50"
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
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full bg-gradient-to-r from-transparent to-background/50 rounded-e-lg text-white hover:bg-background hover:opacity-50"
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
      {fullscreenImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={closeFullscreen}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-full max-h-full rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
        </div>
      )}
    </div>
  );
};

export default HomeCarousel;
