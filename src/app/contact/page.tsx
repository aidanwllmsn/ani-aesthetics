"use client";
import FadeInUp from "../components/FadeInUp";
import LocationHours from "../components/LocationHours";

export default function Contact() {
  return (
    <div className="bg-background m-2 lg:m-5 px-4 md:px-12">
      <FadeInUp>
        <LocationHours />
      </FadeInUp>
    </div>
  );
}
