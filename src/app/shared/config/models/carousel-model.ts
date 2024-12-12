import { ProductCardItem } from "@/app/shared/config/models/product-card-item-model";
import { BannerImages } from "@/app/shared/components/banner-component/banner";

export interface ProductCarouselModel{
  title: string;
  banner?: BannerImages;
  subtitle?: string;
  items: ProductCardItem[];
  shopAllLink: string;
}

export interface CategoryCarouselModel{
  items: { image: string, title: string, link: string }[]
  title: string,
  shopAllLink: string
}
