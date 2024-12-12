import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { ProductCardItem } from "@/app/shared/config/models/product-card-item-model";

const ProductCard: React.FC<ProductCardItem> = ({ id, name, price, image1, image2, rating }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-4 min-w-[200px] md:min-w-[300px] flex-shrink-0 rounded-lg relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Section */}
      <Link href={`/product/${id}`}>
        <div className="relative w-full h-72 mb-4 overflow-hidden">
          <Image
            src={hovered ? image2 : image1}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-500 ease-in-out transform group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Info Section */}
      <div className="text-start">
        <Link href={`/product/${id}`}>
          <h3 className="text-lg font-semibold hover:text-yellow-500">{name}</h3>
        </Link>
        <p className="text-gray-700 text-xl pt-1">${price.toFixed(2)}</p>

        {/*  TODO Rating Section (if available) */}
        {/*{rating && (*/}
        {/*  <div className="flex justify-center mt-2">*/}
        {/*    {Array.from({ length: 5 }, (_, i) => (*/}
        {/*      <span key={i}>*/}
        {/*        {i < rating ? '⭐' : '☆'}*/}
        {/*      </span>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default ProductCard;
