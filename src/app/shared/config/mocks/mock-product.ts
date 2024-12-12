import { Product } from "@/app/shared/config/models/product";

export const mockProduct: Product = {
  id: 1,
  name: "Relaxed Fit Work Shirt",
  price: 1199.99,
  productDescription: {
    description: 'A durable and stylish workwear jacket made for tough conditions.',
    fitInfo: 'Relaxed fit. Size down for a slimmer fit.',
    productDetails: '100% cotton canvas, Triple-stitched seams, Multiple utility pockets.',
    materials: 'Outer: 100% Cotton. Lining: 100% Polyester.',
  },
  images: [
    "/assets/temporary-images/mock-product/mock-product-picture-1.jpg",
    "/assets/temporary-images/mock-product/mock-product-picture-2.jpg",
    "/assets/temporary-images/mock-product/mock-product-picture-3.jpg"
  ],
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "White", "Navy"],
  reviews: {
    rating: 4.5,
    reviewsCount: 120
  }

};
