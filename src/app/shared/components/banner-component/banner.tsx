'use client';

import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from "@/app/shared/hooks/mediaQueryHook";

interface Banner {
  heading: string,
  subheading?: string,
  buttons?: BasicButton[],
  images: BannerImages
}

export interface BannerImages {
  desktop: string,
  tablet: string,
  mobile: string
}

export interface BasicButton {
  label: string,
  href: string
}


const Banner = ({ heading, subheading, buttons, images }: Banner) => {
  const isMobile = useMediaQuery(767);
  const isTablet = useMediaQuery(1024);

  let bannerImageSrc = images.desktop;
  if (isMobile) {
    bannerImageSrc = images.mobile;
  } else if (isTablet) {
    bannerImageSrc = images.tablet;
  }

  return (
    <div className="relative h-[600px] w-full">
      <Image
        src={bannerImageSrc}
        alt={heading}
        fill
        quality={100}
        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 100vw, 1920px"
        style={{objectFit: 'cover'}}
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center text-center px-32 lg:px-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
          {heading}
        </h1>
        <p className="text-lg lg:text-xl text-gray-100 mb-6">{subheading}</p>

        <div className="space-x-4">
          {buttons?.map((button, index) => (
            <Link key={index} href={button.href} legacyBehavior>
              <a className="inline-block bg-white hover:bg-gray-400 text-black font-bold py-3 px-8">
                {button.label}
              </a>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Banner;
