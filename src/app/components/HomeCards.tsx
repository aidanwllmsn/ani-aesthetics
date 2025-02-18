import React from "react";

type CardProps = {
  image: string;
  title: string;
};

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <button className="relative w-full lg:w-1/3 h-96 flex items-center justify-center rounded-xl shadow-md overflow-hidden group">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>

      {/* Centered Text */}
      <span className="relative text-white text-2xl font-bold">{title}</span>
    </button>
  );
};

const CardGrid: React.FC = () => {
  const cards = [
    { image: "/products.png", title: "Products" },
    { image: "/treatments.jpg", title: "Treatments" },
    { image: "/me.JPEG", title: "About Me" },
  ];

  return (
    <div className="w-full lg:px-3">
      <h2 className="text-3xl font-ortica text-left text-primary mb-8">
        Discover more for your skin
      </h2>

      {/* Responsive Grid */}
      <div className="flex flex-col lg:flex-row gap-6 font-ortica">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
