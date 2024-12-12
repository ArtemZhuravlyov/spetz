import { ProductCardItem } from "@/app/shared/config/models/product-card-item-model";
import { ProductCarouselModel } from "@/app/shared/config/models/carousel-model";


const MOCK_ITEMS: ProductCardItem[] = [
  {
    id: "1",
    name: "Classic T-Shirt",
    price: 19.99,
    image1: "/assets/temporary-images/mock-product-carousel/card-image-1.jpg",
    image2: "/assets/temporary-images/mock-product-carousel/card-image-2.jpg",
    rating: 4,
  },
  {
    id: "2",
    name: "Worker Pants",
    price: 39.99,
    image1: "/assets/temporary-images/mock-product-carousel/card-image-1.jpg",
    image2: "/assets/temporary-images/mock-product-carousel/card-image-2.jpg",
    rating: 5,
  },
  {
    id: "3",
    name: "Classic T-Shirt",
    price: 19.99,
    image1: "/assets/temporary-images/mock-product-carousel/card-image-1.jpg",
    image2: "/assets/temporary-images/mock-product-carousel/card-image-2.jpg",
    rating: 4,
  },
  {
    id: "4",
    name: "Worker Pants",
    price: 39.99,
    image1: "/assets/temporary-images/mock-product-carousel/card-image-1.jpg",
    image2: "/assets/temporary-images/mock-product-carousel/card-image-2.jpg",
    rating: 5,
  },
  {
    id: "5",
    name: "Classic T-Shirt",
    price: 19.99,
    image1: "/assets/temporary-images/mock-product-carousel/card-image-1.jpg",
    image2: "/assets/temporary-images/mock-product-carousel/card-image-2.jpg",
    rating: 4,
  },
  {
    id: "6",
    name: "Worker Pants",
    price: 39.99,
    image1: "/assets/temporary-images/mock-product-carousel/card-image-1.jpg",
    image2: "/assets/temporary-images/mock-product-carousel/card-image-2.jpg",
    rating: 5,
  },
]

export const MOCK_PRODUCT_CAROUSEL:  ProductCarouselModel = {
  title: 'ЯКІСЬ ФАЙНІ ШМОТКИ',
  banner: {
    desktop: '/assets/temporary-images/mock-product-carousel/outdoor-carousel-banner.jpg',
    tablet: '/assets/temporary-images/mock-product-carousel/outdoor-carousel-banner.jpg',
    mobile: '/assets/temporary-images/mock-product-carousel/outdoor-carousel-banner.jpg',
  },
  subtitle: 'НЕ ДЛЯ РУСНІ',
  items: MOCK_ITEMS,
  shopAllLink: '/all-fiyni-shmotki'
}

export const MOCK_PRODUCT_CAROUSEL_NO_BANNER:  ProductCarouselModel = {
  title: 'ЩЕ ФАЙНИХ ШМОТОК',
  subtitle: 'ТЕЖ НЕ ДЛЯ РУСНІ',
  items: MOCK_ITEMS,
  shopAllLink: '/all-dobri-shmotki'
}
