'use client'

import { useState } from "react";
import { NAVIGATION_MENU } from "@/app/shared/config/constants/navigation";
import HeaderNavDropDownMenu from "@/app/shared/components/header/header-nav-dropdown-menu";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setActiveIndex(null);
  };

  return (
    <div className="flex h-full gap-4">
      {NAVIGATION_MENU.map((category, i) => {
        const isOpen = i === activeIndex;

        return (
          <HeaderNavDropDownMenu
            key={category.value}
            category={category}
            isOpen={isOpen}
            handleOpen={() => handleOpen(i)}
            handleClose={handleClose}
          />
        );
      })}
    </div>
  );
};

export default NavItems
