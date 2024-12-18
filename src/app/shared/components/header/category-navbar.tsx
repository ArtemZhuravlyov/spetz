'use client';

import Link from 'next/link';
import { NavigationModel } from "@/app/shared/config/models/navigation-model";
import { useState } from "react";

const CategoryNavbar = ({ subcategories }: { subcategories: NavigationModel[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="w-full bg-gray-100 border-b border-gray-300">
      <div className="container mx-auto flex gap-4 px-4 relative">
        {subcategories.map((subcategory, index) => (
          <div
            key={subcategory.label}
            className="relative group p-2 hover:bg-white hover:border-b-2 hover:border-black"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={`/${subcategory.link}`}>
              <span className="text-gray-700 hover:text-black font-medium cursor-pointer">
                {subcategory.label}
              </span>
            </Link>

            {/* Dropdown menu */}
            {subcategory.items && subcategory.items.length > 0 && (
              <div
                className={`absolute left-0 top-full mt-2 bg-white border border-gray-300 shadow-lg rounded-md w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
              >
                <ul className="py-2">
                  {subcategory.items.map((item) => (
                    <li key={item.label} className="px-4 p-2 hover:bg-gray-100">
                      <Link href={`/${item.link}`}>
                        <span className="text-gray-700 hover:text-black cursor-pointer">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavbar;
