'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import MaxWidthWrapper from "@/app/shared/components/MaxWidthWrapper";
import { ProductCarouselModel } from "@/app/shared/config/models/carousel-model";

const ProductCarousel = ({ banner, title, subtitle, items } : ProductCarouselModel ) => {

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
      {banner && (
        <h1>hui</h1>
        // <div className="relative w-full h-[400px] mb-8">
        //   <Image
        //     src={banner}
        //     alt={title || 'Banner'}
        //     layout="fill"
        //     objectFit="cover"
        //     className="rounded-lg"
        //   />
        //   {/* Title and Subtitle */}
        //   {title && (
        //     <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        //       <h1 className="text-4xl font-bold">{title}</h1>
        //       {subtitle && <p className="text-xl mt-2">{subtitle}</p>}
        //     </div>
        //   )}
        // </div>
      )}

      {!banner && (
        <MaxWidthWrapper>
          <div>
            <h1>HUIIIIIIII</h1>
            {title && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-4xl font-bold">{title}</h1>
                {subtitle && <p className="text-xl mt-2">{subtitle}</p>}
              </div>
            )}
          </div>
        </MaxWidthWrapper>

      )}

      <MaxWidthWrapper>
        {showProduct && (
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.id} className="p-4">
                <a href={item.link} className="group block">
                  <div className="relative w-full h-[300px] mb-4">
                    <Image
                      src={item.image}
                      alt={item.title || 'Product'}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-500 transition-colors">
                    {item.title}
                  </h3>
                  {item.subtitle && <p className="text-lg text-gray-600">{item.subtitle}</p>}
                </a>
              </div>
            ))}
          </Slider>
        )}

        {showCategory && (
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.id} className="p-4">
                <a href={item.link} className="group block">
                  <div className="relative w-full h-[200px] mb-4">
                    <Image
                      src={item.image}
                      alt={item.title || 'Category'}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-500 transition-colors">
                    {item.title}
                  </h3>
                </a>
              </div>
            ))}
          </Slider>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default ProductCarousel;
