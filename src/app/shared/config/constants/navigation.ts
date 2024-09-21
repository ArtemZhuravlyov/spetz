import { NavigationModel } from "@/app/shared/config/models/navigation-model";

export const NAVIGATION_MENU: NavigationModel[] = [
  {
    label: 'New',
    value: 'new' as const,
    link: 'new',
    featured: [
      {
        label: 'Show all',
        value: 'show_all',
        link: 'show-all'
      },
      {
        label: 'Men',
        value: 'men',
        link: 'men-clothing'
      },
      {
        label: 'Women',
        value: 'women',
        link: 'women-clothing'
      },
      {
        label: 'Accessories',
        value: 'accessories',
        link: 'accessories'
      }
    ]
  },
  {
    label: 'Men',
    value: 'men',
    link: 'men-clothing',
    featured: [
      {
        label: 'Featured',
        value: 'featured',
        link: 'featured',
        items: [
          {
            label: 'New',
            value: 'new',
            link: 'men-clothing/new'
          },
          {
            label: 'Best Sellers',
            value: 'best-sellers',
            link: 'men-clothing/best-sellers'
          },
        ]
      },
      {
        label: 'Show all',
        value: 'show_all',
        link: 'men-clothing/show_all'
      },
      {
        label: 'Pants',
        value: 'pants',
        link: 'men-clothing/pants'
      },
      {
        label: 'Hoodies',
        value: 'hoodies',
        link: 'men-clothing/hoodies'
      },
      {
        label: 'T-Shirts',
        value: 't_shirts',
        link: 'men-clothing/t-shirts'
      },
      {
        label: 'Accessories',
        value: 'accessories',
        link: 'men-clothing/accessories'
      }
    ]
  },
  {
    label: 'Women',
    value: 'women',
    link: 'women-clothing',
    featured: [
      {
        label: 'Show all',
        value: 'show_all',
        link: 'women-clothing/show-all'
      },
      {
        label: 'New',
        value: 'new' as const,
        link: 'women-clothing/new'
      },
      {
        label: 'Pants',
        value: 'pants',
        link: 'women-clothing/pants'
      },
      {
        label: 'Hoodies',
        value: 'hoodies',
        link: 'women-clothing/hoodies'
      },
      {
        label: 'T-Shirts',
        value: 't_shirts',
        link: 'women-clothing/t-shirts'
      },
      {
        label: 'Accessories',
        value: 'accessories',
        link: 'women-clothing/accessories'
      }
    ]
  }
]
