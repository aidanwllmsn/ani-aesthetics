"use client";
import FadeInUp from "../components/FadeInUp";
import Image from "next/image";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <div className="bg-background m-2 lg:m-5 px-4 md:px-12">
      <FadeInUp>
        <ProductCard />
      </FadeInUp>
    </div>
  );
}
