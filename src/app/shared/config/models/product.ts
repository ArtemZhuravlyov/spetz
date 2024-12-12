export interface Product{
  id: number,
  name: string,
  price: number,
  productDescription: ProductDescription,
  images: string[],
  sizes: string[],
  colors:string[],
  reviews?: Reviews

}

export interface Reviews{
  rating: number,
  reviewsCount?: number,
  reviews?: Review[]
}

export interface Review{
  rating: number,
  header?: string,
  description?: string
}

export interface ProductDescription{
  description: string,
  fitInfo: string,
  productDetails: string,
  materials: string
}
