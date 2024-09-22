'use client'

import { NavigationModel } from "@/app/shared/config/models/navigation-model";

interface NavItemProps {
  category: NavigationModel;
  handleOpen: () => void;
  handleClose: () => void;
  isOpen: boolean;
}

const HeaderNavDropDownMenu = ({
                                 category,
                                 handleOpen,
                                 handleClose,
                                 isOpen,
                               }: NavItemProps) => {
  return (
    <div className='p-1 h-20 flex items-center justify-center'
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <a href={category.link} className="gap-1.5 font-bold text-base cursor-pointer hover:text-yellow-500">
        {category?.label}
        <div
          className={`h-[4px] w-full mt-1 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'bg-[#ffc93c] opacity-100' : 'bg-transparent opacity-0'
          }`}
        />
      </a>


      {isOpen && (
        <div
          className="absolute left-0 right-0 top-full w-screen bg-white shadow-lg text-sm z-10"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <div className="relative max-w-7xl mx-auto px-8 py-8">
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-3 grid grid-cols-3 gap-6">
                {category.featured?.map((subcategory) => (
                  <div key={subcategory.label}>
                    <a href={subcategory.link} className="font-bold text-base mb-4 text-black-700 hover:text-yellow-500">
                      {subcategory.label}
                    </a>
                    { subcategory.items && subcategory.items?.length > 0 && (
                      <ul>
                        {subcategory.items.map((subItem) => (
                          <li key={subItem.label} className='mb-1'>
                            <a href={subItem.href} className="hover:text-yellow-500">
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/*// TODO ADD IMAGES FOR CATEGORIES*/}
              <div className="col-span-1">
                {/*<Image*/}
                {/*  src={category.imageSrc}*/}
                {/*  alt={category.label}*/}
                {/*  width={300}*/}
                {/*  height={300}*/}
                {/*  className="rounded-lg shadow-md"*/}
                {/*/>*/}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default HeaderNavDropDownMenu
