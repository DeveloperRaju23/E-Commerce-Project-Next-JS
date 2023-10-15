import Container from '@/pages/container'
import React from 'react'

import delivery1 from "../../../public/delivery.png"
import delivery2 from "../../../public/contact.png"
import delivery3 from "../../../public/secourity.png"
import Image from 'next/image'

const Delivery = () => {
  return (
    <Container>
             <div className='grid grid-cols-1 max-w-[950px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[30px] px-[10px] lg:px-[0px] my-[40px] md:my-[60px] lg:my-[100px] mx-auto'>
                  <div className="flex flex-col justify-center mx-auto text-center">
                  <Image className="mx-auto" src={delivery1}/>
                  <h3 className="lg:text-[20px] text-[16px] text-blackColor font-semibold mt-[5px] mb-[5px]">FREE AND FAST DELIVERY</h3>
                  <p className="text-[14px] text-primaryBlack">Free delivery for all orders over $140</p>
                  </div>
                  <div className="flex flex-col justify-center mx-auto text-center">
                  <Image className="mx-auto" src={delivery2}/>
                  <h3 className="lg:text-[20px] text-[16px] text-blackColor font-semibold mt-[5px] mb-[5px]">24/7 CUSTOMER SERVICE</h3>
                  <p className="text-[14px] text-primaryBlack">Friendly 24/7 customer support</p>
                  </div>
                  <div className="flex flex-col justify-center mx-auto text-center">
                  <Image className="mx-auto" src={delivery3}/>
                  <h3 className="lg:text-[20px] text-[16px] text-blackColor font-semibold mt-[5px] mb-[5px]">MONEY BACK GUARANTEE</h3>
                  <p className="text-[14px] text-primaryBlack">We reurn money within 30 days</p>
                  </div>
            </div>
    </Container>
  )
}

export default Delivery