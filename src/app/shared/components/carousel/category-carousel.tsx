'use client';

import React from 'react';
import Image from 'next/image';
import { CategoryCarouselModel } from "@/app/shared/config/models/carousel-model";
import MaxWidthWrapper from "@/app/shared/components/MaxWidthWrapper";
import ShopAllButton from "@/app/shared/utilities/shop-all-button";


const CategoryCarousel: React.FC<{ carouselData: CategoryCarouselModel }> = ({ carouselData }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="py-10 bg-gray-100">
      <MaxWidthWrapper>
        <div className="flex justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{carouselData.title}</h1>
          <ShopAllButton href={carouselData.shopAllLink}></ShopAllButton>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <div className="relative">
          <div
            className="flex space-x-4 overflow-x-scroll scrollbar scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            style={{ scrollBehavior: 'smooth' }}
          >
            {carouselData.items.map((item, index) => (
              <div key={index} className="min-w-[200px] md:min-w-[300px] flex-shrink-0">
                <a href={item.link} className="group block">
                  <div className="relative w-full h-[300px] mb-4">
                    <Image
                      src={item.image}
                      alt={item.title || 'Category'}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-500 transition-colors">
                    {item.title}
                  </h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CategoryCarousel;
