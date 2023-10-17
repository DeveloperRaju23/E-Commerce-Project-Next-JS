import React from 'react'
import Container from '../container'
import Image from 'next/image'
import callImg from "../../public/icons-phone.png"
import emailImg from "../../public/icons-mail.png"

const Contact = () => {
  return (
    <Container>
        <div className='flex flex-col md:flex-row justify-between gap-[10px] mt-[30px] mb-[20px]' >
          <div className='lg:w-[400px]  w-full shadow-md rounded-md px-[40px] py-[40px]'>
             <div className='flex items-center gap-[10px]'>
             <Image src={callImg}/>
              <h6 className='text-[16px] text-blackColor font-medium '>Call To Us</h6>
             </div>
             <p className='mt-[10px] text-[14px] text-blackColor font-normal tracking-wide'>We are available 24/7, 7 days a week.</p>
              <p className='mt-[10px] text-[14px] text-blackColor font-normal tracking-wide'>Phone: +8801611112222</p>
              <p className='border rounded mt-[20px] mb-[20px] w-full '></p>
          
              <div className='flex items-center gap-[10px]'>
             <Image src={emailImg}/>
              <h6 className='text-[16px] text-blackColor font-medium '>Write To US</h6>
             </div>
             <p className='mt-[10px] text-[14px] text-blackColor font-normal tracking-wide'>Fill out our form and we will contact you within 24 hours.</p>
              <p className='mt-[10px] text-[14px] text-blackColor font-normal tracking-wide'>Emails: customer@exclusive.com</p>
              <p className='mt-[10px] text-[14px] text-blackColor font-normal tracking-wide'>Emails: support@exclusive.com</p>
             
          </div>
          <div className="lg::w-[750px] w-full  shadow-md rounded-md px-[30px] py-[30px]">
          <div className="flex flex-col sm:flex-row gap-[10px] justify-between">
            <input
              className="bg-grayColor w-full outline-none py-[14px] rounded-[5px] ps-[15px]"
              type="text"
              placeholder="Your Name "
            />
            <input
              className="bg-grayColor w-full outline-none py-[14px] rounded-[5px] ps-[15px]"
              type="text"
              placeholder="Your Email * "
            />
            <input
              className="bg-grayColor w-full outline-none py-[14px] rounded-[5px] ps-[15px]"
              type="text"
              placeholder="Your Phone * "
            />
          </div>
          <textarea
            className="bg-grayColor outline-none w-full mt-[20px] rounded-[5px] ps-[15px] pt-[10px]"
            placeholder="Your Massage"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

         <button className="btnLogin mt-[15px]">Send Massage</button>
        </div>
        </div>

    </Container>
  )
}

export default Contact;
