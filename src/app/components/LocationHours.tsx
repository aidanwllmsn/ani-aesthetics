import React from "react";

const LocationHours = () => {
  return (
    <div className="bg-primary text-white my-20 lg:my-36 rounded-3xl 2xl:mx-48 3xl:mx-96 p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Map Section */}
        <div className="w-full lg:w-1/2">
          <iframe
            className="w-full h-72 lg:h-[25rem] rounded-lg border-0 outline-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8609139248315!2d-117.717209424396!3d33.9961061206925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c332b59ac0c4f5%3A0x96c4b618e8ff2077!2s14139%20Pipeline%20Ave%2C%20Chino%2C%20CA%2091710!5e0!3m2!1sen!2sus!4v1739843573761!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Location & Hours */}
        <div className="w-full lg:w-1/2 font-ortica">
          <h2 className="text-3xl font-ortica mb-4">Location & Hours</h2>
          <p className="text-lg">Ani Aesthetics</p>
          <p className="text-lg">14139 Pipeline Ave</p>
          <p className="text-lg">Chino, California 91710</p>
          <p className="text-lg">
            <a
              href="tel:+19092248664"
              className="text-blue-400 hover:underline"
            >
              (909) 224-8664
            </a>
          </p>
          <p className="text-lg">
            <a
              href="mailto:esthetickiana@gmail.com"
              className="text-blue-400 hover:underline"
            >
              esthetickiana@gmail.com
            </a>
          </p>

          {/* Hours */}
          <div className="mt-4 font-ortica">
            <p className="flex justify-between text-lg">
              <span>Monday</span> <span>Closed</span>
            </p>
            <p className="flex justify-between text-lg">
              <span>Tuesday</span> <span>9:00 am - 6:00 pm</span>
            </p>
            <p className="flex justify-between text-lg">
              <span>Wednesday</span> <span>11:00 am - 7:00 pm</span>
            </p>
            <p className="flex justify-between text-lg">
              <span>Thursday</span> <span>11:00 am - 7:00 pm</span>
            </p>
            <p className="flex justify-between text-lg">
              <span>Friday</span> <span>9:00 am - 6:00 pm</span>
            </p>
            <p className="flex justify-between text-lg">
              <span>Saturday</span> <span>8:00 am - 5:00 pm</span>
            </p>
            <p className="flex justify-between text-lg">
              <span>Sunday</span> <span>Closed</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHours;
