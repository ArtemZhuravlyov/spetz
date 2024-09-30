import { ItemModel } from "@/app/shared/config/models/item-model";

export interface ProductCarouselModel{
  title: string;
  banner?: string;
  subtitle?: string;
  item: ItemModel[]
}

export interface CategoryCarouselModel{
  items: { image: string, title: string, link: string }[]
  title: string,
  shopAllLink: string
}
