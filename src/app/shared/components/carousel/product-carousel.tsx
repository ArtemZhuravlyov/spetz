'use client';

import React from 'react';

import MaxWidthWrapper from "@/app/shared/components/MaxWidthWrapper";
import { ProductCarouselModel } from "@/app/shared/config/models/carousel-model";
import Banner from "@/app/shared/components/banner-component/banner";
import ShopAllButton from "@/app/shared/utilities/shop-all-button";
import ProductCard from "@/app/shared/components/product-card/product-card";

const ProductCarousel: React.FC<{ productData: ProductCarouselModel }> = ({ productData }) => {

  // TODO - fetch
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Change this based on your design (can be 1 or more)
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Show the banner if provided */}
      {productData.banner && (
        <Banner heading={productData.title} images={productData.banner} subheading={productData.subtitle}/>
      )}

      {!productData.banner && (
        <MaxWidthWrapper>
          <div>
            {productData.title.length && (
              <div className="">
                <h1 className="text-3xl font-bold text-gray-800">{productData.title}</h1>
                {productData.subtitle && <p className="text-2-xl mt-2 font-bold">{productData.subtitle}</p>}
              </div>
            )}
          </div>
        </MaxWidthWrapper>

      )}

      <div className="py-10 bg-white">
        <MaxWidthWrapper>
          <div className="relative">
            <div
              className="flex space-x-4 overflow-x-scroll scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
              style={{scrollBehavior: 'smooth'}}
            >
              {productData.items.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </MaxWidthWrapper>

        <MaxWidthWrapper>
          <div className="flex justify-end mb-8">
            <ShopAllButton href={productData.shopAllLink}></ShopAllButton>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default ProductCarousel;
