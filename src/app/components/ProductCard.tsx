import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div>
      <div className="rounded-lg max-w-xs mb-4 overflow-hidden w-full h-96 relative">
        <Link href="/">
          <Image
            src="/corthe.png"
            alt="Ultra-Gentle foaming facial cleanser"
            layout="fill"
            objectFit="cover"
          />
        </Link>
      </div>

      {/* Pricing */}
      <div className="text-lg font-semibold text-gray-900">
        $79.00 USD{" "}
        {/* <span className="text-gray-400 line-through text-sm">$99.00 USD</span> */}
      </div>

      {/* Product Name */}
      <p className="text-gray-700 text-md mt-1">
        Ultra-Gentle foaming facial cleanser
      </p>
    </div>
  );
};

export default ProductCard;
