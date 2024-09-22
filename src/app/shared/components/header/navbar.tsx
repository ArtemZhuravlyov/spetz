import MaxWidthWrapper from "@/app/shared/components/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/app/shared/components/header/nav-items";
import { HeartIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-20">
      <header className='relative bg-white'>
        <MaxWidthWrapper>
          <div className='border-d border-gray-200'>
            <div className="flex h-20 items-center">
              {/*// TODO MOBILE NAV*/}
              <div className='ml-4 flex lg:ml-0 h-20 align-middle justify-between w-full'>
                <Link href='/public'>
                  <Image
                    width='40'
                    height='40'
                    src='/assets/icons/spetz-logo.png'
                    alt='logo'/>
                </Link>

                <div className='hideen z-50 lg:ml-8 lg:block lg:self-stretch'>
                  <NavItems/>
                </div>

                <div className='w-1/3 flex items-center justify-end space-x-6'>
                  <div className="relative w-full max-w-xs">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-yellow-500"
                    />
                    <SearchIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-500"/>
                  </div>

                  <Link href="wishlist" className="relative">
                    <HeartIcon className="w-8 h-8 text-gray-600 hover:text-yellow-500"/>
                    {/*// TODO wishlist items number*/}
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">3</span>
                  </Link>


                  <Link href="cart" className="relative">
                    <ShoppingCartIcon className="w-8 h-8 text-gray-600 hover:text-yellow-500"/>
                    {/*// TODO cart items number*/}
                     <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">3</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar
