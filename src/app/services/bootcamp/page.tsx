"use client";
import FadeInUp from "../../components/FadeInUp";
import HomeCarousel from "../../components/HomeCarousel";

export default function Bootcamp() {
  return (
    <div className="bg-background m-2 lg:m-5 px-4 md:px-12">
      <div className="py-10 lg:px-64">
        <FadeInUp>
          <HomeCarousel />
        </FadeInUp>
      </div>
      <div className="py-10 lg:px-12">
        <FadeInUp>
          <div className="text-primary flex items-center justify-center lg:px-64">
            <div className="mx-auto flex flex-col content-center justify-between w-full">
              <div className="w-full">
                <h2 className="text-4xl lg:text-5xl font-ortica">
                  What is Acne Bootcamp?
                </h2>
                <p className="text-2xl mt-4 font-ortica leading-relaxed">
                  This program helps treat all types of acne through bi-weekly
                  in person treatments for a minimum of 4-6 months depending on
                  the severity of acne.
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
      <div className="py-10 lg:px-12">
        <FadeInUp>
          <div className="text-primary flex items-center justify-center lg:px-64">
            <div className="mx-auto flex flex-col content-center justify-between w-full">
              <div className="w-full">
                <h2 className="text-4xl lg:text-5xl font-ortica">
                  What do these sessions consist of?
                </h2>
                <p className="text-2xl mt-4 font-ortica leading-relaxed">
                  A series of chemical peels, professional extractions, high
                  frequency, LED light therapy, spot treatments, and anything
                  else your skin may need during your time in the treatment room
                  are all done during your session.
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
      <div className="py-10 lg:px-12">
        <FadeInUp>
          <div className="text-primary flex items-center justify-center lg:px-64">
            <div className="mx-auto flex flex-col content-center justify-between w-full">
              <div className="w-full">
                <h2 className="text-4xl lg:text-5xl font-ortica">
                  Will I have to buy products?
                </h2>
                <p className="text-2xl mt-4 font-ortica leading-relaxed">
                  Yes. In order to be successful in this program, using the
                  recommended home care products are required.
                  <br />
                  <br />
                  Products are purchased separately from the cost of the
                  treatment and will range between $160-$200 depeding on which
                  products are needed.
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
      <div className="py-10 lg:px-12">
        <FadeInUp>
          <div className="text-primary flex items-center justify-center lg:px-64">
            <div className="mx-auto flex flex-col content-center justify-between w-full">
              <div className="w-full">
                <h2 className="text-4xl lg:text-5xl font-ortica">
                  How do I get started?
                </h2>
                <p className="text-2xl mt-4 font-ortica leading-relaxed">
                  New clients must book a Consult & Treatment to see if Acne
                  Bootcamp is best fit for them and their acne concerns. You can
                  find the link to book here.
                </p>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
