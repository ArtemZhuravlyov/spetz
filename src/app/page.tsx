import Banner from "@/app/shared/components/banner-component/banner";

import { carouselData } from "@/app/shared/config/mocks/bestsellers-carousel";
import CategoryCarousel from "@/app/shared/components/carousel/category-carousel";


export default function Home() {
  return (
    <>
      <Banner
        heading="Outdour workwear"
        subheading="Weather Your Workda"
        images={{
          mobile: '/assets/temporary-images/banner-767.jpg',
          tablet: '/assets/temporary-images/banner-1024.jpg',
          desktop: '/assets/temporary-images/banner-1920.jpg'
        }}
        buttons={[
          { label: 'Shop Now', href: '/products/bestsellers' },
          { label: 'Learn More', href: '/about-us' },
        ]}
      />

      <CategoryCarousel carouselData = {carouselData}/>
     </>
  );
}
