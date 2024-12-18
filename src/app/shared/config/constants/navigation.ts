import { NavigationModel } from "@/app/shared/config/models/navigation-model";

export const NAVIGATION_MENU: NavigationModel[] = [
  // {
  //   label: 'New',
  //   value: 'new' as const,
  //   link: 'new',
  //   featured: [
  //     {
  //       label: 'Show all',
  //       value: 'show_all',
  //       link: 'show-all'
  //     },
  //     {
  //       label: 'Men',
  //       value: 'men',
  //       link: 'men-clothing'
  //     },
  //     {
  //       label: 'Women',
  //       value: 'women',
  //       link: 'women-clothing'
  //     },
  //     {
  //       label: 'Accessories',
  //       value: 'accessories',
  //       link: 'accessories'
  //     }
  //   ]
  // },
  {
    label: 'Men',
    value: 'men',
    link: 'men',
    featured: [
      {
        label: "New",
        value: 'new',
        link: 'men/new'
      },
      {
        label: 'Clothing',
        value: 'clothing',
        link: 'men/clothing',
        items: [
          {
            label: 'Pants',
            value: 'pants',
            link: 'men/clothing/pants'
          },
          {
            label: 'Hoodies',
            value: 'hoodies',
            link: 'men/clothing/hoodies'
          },
          {
            label: 'Shirts',
            value: 'shirts',
            link: 'men/clothing/shirts'
          },
          {
            label: 'T-Shirts',
            value: 't_shirts',
            link: 'men/clothing/t-shirts'
          },
        ]
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
    value: 'Women',
    link: 'Women',
    featured: [
      {
        label: "New",
        value: 'new',
        link: 'women/new'
      },
      {
        label: 'Clothing',
        value: 'clothing',
        link: 'women/clothing',
        items: [
          {
            label: 'Pants',
            value: 'pants',
            link: 'women/clothing/pants'
          },
          {
            label: 'Hoodies',
            value: 'hoodies',
            link: 'women/clothing/hoodies'
          },
          {
            label: 'Shirts',
            value: 'shirts',
            link: 'women/clothing/shirts'
          },
          {
            label: 'T-Shirts',
            value: 't_shirts',
            link: 'women/clothing/t-shirts'
          },
        ]
      },
      {
        label: 'Accessories',
        value: 'accessories',
        link: 'men-clothing/accessories'
      }
    ]
  },
]
