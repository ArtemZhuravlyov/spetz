import MaxWidthWrapper from "@/app/shared/components/MaxWidthWrapper";

const Footer = () => {
  return <div className="bg-gray-800 absolute z-50 bottom-0 inset-x-0 h-60">
    <footer className='relative bg-gray-800'>
      <MaxWidthWrapper>
        <div className='flex p-10 text-white'>
          <div className='flex-grow-2 flex flex-col px-10 gap-1'>
            {/*// TODO POPULATE WITH LOGO AND SOCIAL MEDIA LINKS*/}
            <h1 className='text-4xl font-bold'>SPRAVA</h1>
            <h2 className='text-3xl'>Якісний робочий одяк</h2>
          </div>

          <div className='flex-grow-3 flex justify-between px-10'>
            <div className='flex flex-col px-10'>
              <h2 className='text-lg font-bold'>Company Info</h2>
              <a href='/about-us'>About SPRAVA</a>
              <a href='/careers'>Careers</a>
            </div>

            <div className='flex flex-col px-10'>
              <h2 className='text-lg font-bold'>Custome support</h2>
              <a href='/faq'>FAQ</a>
              <a href='/returns'>Returns</a>
              <a href='/contacts'>Contacts</a>
              <a href='/shipping-and-delivery'>Shipping & Delivery</a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  </div>
}

export default Footer
