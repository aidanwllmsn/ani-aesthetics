"use client";
import FadeInUp from "../components/FadeInUp";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background m-2 lg:m-5 px-4 md:px-12">
      <FadeInUp>
        <div className="text-primary flex items-center lg:px-3">
          <div className="mx-auto flex flex-col lg:flex-row justify-between w-full">
            {/* Left Column - Centering Image */}
            <div className="lg:w-1/2 w-full flex justify-center items-center">
              <Image
                src="/me.JPEG"
                alt="Portrait"
                width={500}
                height={500}
                quality={100}
                className="my-8 rounded-xl overflow-hidden object-cover w-[500px] h-[500px]"
              />
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 w-full">
              <p className="text-xl md:text-2xl font-ortica leading-relaxed">
                Welcome to Ani Aesthetics, your trusted acne specialist in the
                Inland Empire! With over 2 years of experience as an
                esthetician, I have developed a deep passion for helping people
                overcome their skin concerns after conquering my own acne
                concerns. My journey in the world of skincare has equipped me
                with the knowledge and expertise to provide personalized
                solutions tailored to your unique skin needs.
                <br />
                <br />
                At Ani Aesthetics I understand the impact that acne can have on
                your confidence and overall well-being. That's why I am
                dedicated to offering effective treatments and skincare regimens
                to help you achieve clear, radiant skin. Whether you're dealing
                with stubborn breakouts, acne scars, or other skin issues, I am
                here to guide you every step of the way. <br />
                <br />
                My approach focuses on a combination of professional treatments,
                education, and at-home skincare routines to ensure long-lasting
                results. I believe in empowering my clients with the tools and
                knowledge they need to maintain healthy, beautiful skin beyond
                our sessions.
                <br />
                <br />
                Book your appointment today and take the first step towards a
                healthier, happier complexion. Together, we'll work towards
                achieving your skincare goals and unlocking your skin's natural
                beauty.
              </p>
            </div>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}
