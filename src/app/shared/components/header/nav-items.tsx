'use client'

import { NAVIGATION_MENU } from "@/app/shared/config/constants/navigation";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  const activeCategory = NAVIGATION_MENU.find((category) =>
    pathname.startsWith(`/${category.link}`)
  )?.link;

  return (
    <div className="flex h-full gap-4">
      {NAVIGATION_MENU.map((category) => {
        const isSelected = activeCategory === category.link;

        return (
          <div className='p-1 h-20 flex items-center justify-center'>
            <a href={category.link} className={`gap-1.5 font-bold text-base cursor-pointer hover:text-black ${
                  isSelected ? 'text-black' : 'text-gray-700'
                }`}>
              {category?.label}
              <div
                className={`h-[4px] w-full mt-1 transition-opacity duration-300 ease-in-out ${
                  isSelected ? 'bg-black opacity-100' : 'bg-transparent opacity-0'
                }`}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default NavItems
