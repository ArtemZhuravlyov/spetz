'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mockProduct } from "@/app/shared/config/mocks/mock-product";
import MaxWidthWrapper from "@/app/shared/components/MaxWidthWrapper";
import { Product } from "@/app/shared/config/models/product";
import StarsComponent from "@/app/shared/components/stars/stars";
import ProductAccordion from "@/app/shared/components/product-info-accordion/product-accordion";


interface PageProps{
  params: {
    productId: string
  }
}

const ProductPage = ({params}: PageProps) => {

  // Assume this data is fetched from an API based on the product ID
  const product: Product = mockProduct;
  console.log(params)

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [pointedSize, setPointedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [pointedColor, setPointedColor ] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    // Handle add to cart logic
    console.log({
      productId: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
  };

  const handleShowMore = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (<MaxWidthWrapper>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="product-images">
          <div className="relative w-full h-[700px] mb-4">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.slice(1, 3).map((image, index) => (
              <div key={index} className="relative w-full h-[350px]">
                <Image src={image} alt={`Thumbnail ${index}`} fill objectFit="cover"/>
              </div>
            ))}
          </div>
          <div className="flex w-full align-middle justify-center">
            <button
              onClick={handleShowMore}
              className="underline mt-4 font-bold py-2 px-4 rounded-lg transition hover:scale-105 hover:text-yellow-500 hover:border-yellow-500"
            >
              Show More
            </button>
          </div>

        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          {/* Review Stars */}
          {product.reviews && (
            <StarsComponent
              rating={product.reviews.rating}
              reviews={product.reviews.reviewsCount}
              className="text-yellow-500"
            />
          )}

          <p className="text-xl font-semibold text-gray-800 mb-4 mt-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Sizes */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Select Size <span
              className="font-normal">{pointedSize ? pointedSize : selectedSize}</span></h3>
            <div className="flex space-x-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`border-2 border-black px-4 py-2 ${
                    selectedSize === size ? 'bg-black text-white' : 'bg-white'
                  }`}
                  onClick={() => setSelectedSize(size)}
                  onMouseEnter={() => setPointedSize(size)}
                  onMouseLeave={() => setPointedSize(null)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Select Color <span
              className="font-normal">{pointedColor ? pointedColor : selectedColor}</span></h3>
            <div className="flex space-x-4">
              {product.colors.map((color) => (
                <div className={`flex align-middle justify-center p-1 rounded-full hover:ring-1 hover:ring-black ${
                  selectedColor === color ? 'ring-2 ring-black' : ''
                }`}>
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border border-gray-400`}
                    style={{backgroundColor: color.toLowerCase()}}
                    onClick={() => setSelectedColor(color)}
                    onMouseEnter={() => setPointedColor(color)}
                    onMouseLeave={() => setPointedColor(null)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Quantity</h3>
            <div className="flex items-center space-x-4">
              <button
                className="border px-2 py-1"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="border px-2 py-1"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="w-full bg-black text-white py-5 hover:bg-gray-800"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>


      {/* Product descr */}
      {product.productDescription && (
        <div className="mt-12">
          {Object.entries(product.productDescription).map(([key, value]) => (
            <ProductAccordion key={key}
                              title={key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}>
              <p>{value}</p>
            </ProductAccordion>
          ))}
        </div>
      )}

    </div>
  </MaxWidthWrapper>)
};

export default ProductPage;
