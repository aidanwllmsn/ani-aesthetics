"use client";
import FadeInUp from "../components/FadeInUp";
import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-background m-2 lg:m-5 px-4 md:px-12">
      <FadeInUp>
        <div className="pt-10 lg:px-12">
          <h2 className="font-bold text-5xl lg:text-6xl text-center text-primary font-ortica">
            All Services
          </h2>
        </div>
      </FadeInUp>
      <div className="py-10 lg:py-20 lg:px-12">
        <FadeInUp>
          <div className="text-primary flex items-center lg:px-3">
            <div className="mx-auto flex flex-col lg:flex-row justify-between w-full">
              {/* Left Column */}
              <div className="lg:w-2/5 w-full mb-6 lg:mb-0">
                <h2 className="text-4xl lg:text-5xl font-ortica">
                  Skin Consultation & Treatment
                </h2>
              </div>

              {/* Right Column */}
              <div className="lg:w-3/5 w-full">
                <p className="text-2xl font-ortica leading-relaxed">
                  New "in person" clients MUST schedule a Consultation and
                  Treatment appointment. This consist of a full skin analysis,
                  full consultation, customized full facial, future treatment
                  plan, and full skin care and product recommendation
                </p>

                <button className="mt-6 px-4 py-2 lg:px-6 lg:py-3 font-ortica bg-primary text-white text-base lg:text-lg font-medium rounded-full shadow-md transition-all duration-300 hover:bg-white hover:text-primary">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
      <div className="py-10 lg:py-20 lg:px-12">
        <FadeInUp>
          <div className="text-primary flex items-center lg:px-3">
            <div className="mx-auto flex flex-col lg:flex-row justify-between w-full">
              {/* Left Column */}
              <div className="lg:w-2/5 w-full mb-6 lg:mb-0">
                <h2 className="text-4xl lg:text-5xl font-ortica">
                  Virtual Skin Consultation
                </h2>
              </div>

              {/* Right Column */}
              <div className="lg:w-3/5 w-full">
                <p className="text-2xl font-ortica leading-relaxed">
                  Become a virtual client and recive your customized virtual
                  plan that will help treat your skin concerns from home!
                  <br />
                  <br />
                  This service includes an email with a full skin analysis,
                  recommended products, and step by step home care. You will be
                  doing virutal check ins and stay in touch with Kiana through
                  your virtual journey!
                  <br />
                  <br />
                  $40 one-time fee
                  <br />
                  *does not include price of products
                </p>

                <button className="mt-6 px-4 py-2 lg:px-6 lg:py-3 font-ortica bg-primary text-white text-base lg:text-lg font-medium rounded-full shadow-md transition-all duration-300 hover:bg-white hover:text-primary">
                  View Products
                </button>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
      <div className="py-10 lg:py-20 lg:px-12">
        <FadeInUp>
          <div className="text-primary flex items-center lg:px-3">
            <div className="mx-auto flex flex-col lg:flex-row justify-between w-full">
              {/* Left Column */}
              <div className="lg:w-2/5 w-full mb-6 lg:mb-0">
                <h2 className="text-4xl lg:text-5xl font-ortica">
                  Acne Bootcamp
                </h2>
              </div>

              {/* Right Column */}
              <div className="lg:w-3/5 w-full">
                <p className="text-2xl font-ortica leading-relaxed mb-6">
                  This program helps treat all types of acne through bi-weekly
                  in person treatments for a minimum of 4-6 months depending on
                  the severity of acne.
                </p>

                <Link
                  href="/services/bootcamp"
                  className="mt-6 px-4 py-2 lg:px-6 lg:py-3 font-ortica bg-primary text-white text-base lg:text-lg font-medium rounded-full shadow-md transition-all duration-300 hover:bg-white hover:text-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
