import React from 'react'
import aboutImg from "../../public/about.png"
import Image from 'next/image'
import ReuseTitle from '../reuse'
import Container from '../container'
import serviceImg1 from "../../public/Services (2).png"
import serviceImg2 from "../../public/Services (1).png"
import serviceImg3 from "../../public/Services.png"
import serviceImg4 from "../../public/Services4.png"

const About = () => {
  return (
  <div>
      <div className="max-w-[1545px]  mt-16 ml-auto">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-[30px] md:mb-[60px] lg:mb-[100px] ">
      <div className="md:order-last order-first">
        <Image className="object-cover rounded-[5px]" src={aboutImg} />
      </div>
      <div className="max-w-[850px] md:max-w-[400px] px-[10px] lg:px-[0px]">
     <h1 className='text-[54px] font-medium'>Our Story</h1>
     <ReuseTitle para1="Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region."/>
   
     <ReuseTitle para1="Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer."/>
      </div>
    </div>
  </div>
  <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[30px] px-[10px] lg:px-[0px]'>
          <div className='about'>
          <Image className='mx-auto' src={serviceImg1}/>
          <h5 className='lg:text-[32px] text-[26px] font-bold text-blackColor'>10.5k</h5>
            <ReuseTitle para2="Sellers active our site"/>
          </div>
          <div className='about bg-secondaryRed border-none'>
          <Image className='mx-auto' src={serviceImg2}/>
            <h5 className='lg:text-[32px] text-[26px] font-bold text-whiteColor pb-4'>33k</h5>
            <p className='text-[14px]  lg:text-[16px] text-whiteColor  font-medium tracking-wider'>Monthly Product Sale</p>
          </div>
          <div className='about'>
          <Image className='mx-auto' src={serviceImg3}/>
          <h5 className='lg:text-[32px] text-[26px] font-bold text-blackColor'>45.5k</h5>
            <ReuseTitle para2="Customer active in our site"/>
          </div>
          <div className='about '>
            <Image className='mx-auto' src={serviceImg4}/>
          <h5 className='lg:text-[32px] text-[26px] font-bold text-blackColor'>25k</h5>
            <ReuseTitle para2="Anual gross sale in our site"/>
          </div>
        </div>
    </Container>
  </div>
  )
}

export default About