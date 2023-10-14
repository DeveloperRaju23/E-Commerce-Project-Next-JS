
import aboutImg from "../../public/about.png"
import Image from 'next/image'
import ReuseTitle from '../reuse'
import Container from '../container'
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import serviceImg1 from "../../public/Services (2).png"
import serviceImg2 from "../../public/Services (1).png"
import serviceImg3 from "../../public/Services.png"
import serviceImg4 from "../../public/Services4.png"

import delivery1 from "../../public/delivery.png"
import delivery2 from "../../public/contact.png"
import delivery3 from "../../public/secourity.png"
const About = () => {
  const sliderInfo = [
    {
        id:'1',
        name:'Tom Cruise',
        img:'https://i.ibb.co/pKxprGX/Frame-874.png',
        title:'Founder & Chairman'

    },
    {
      id:'1',
      name:'Emma Watson',
      ceo:'CEO , Nextgen',
      img:'https://i.ibb.co/mJr69yr/Frame-875.png',
      title:'Managing Director'  

  },
  {
    id:'1',
    name:'Will Smith',
    ceo:'CEO , Nextgen',
    img:'https://i.ibb.co/ftGycMx/Frame-876.png',
    title:'Product Designer'

},
{
  id:'1',
  name:'John hed',
  ceo:'CEO , Nextgen',
  img:'https://i.ibb.co/pKxprGX/Frame-874.png',
  title:'Founder & Chairman'

},
{
  id:'1',
  name:'John Jey',
  ceo:'CEO , Nextgen',
  img:'https://i.ibb.co/ftGycMx/Frame-876.png',
  title:'Founder & Chairman'
}
  ]
  return (
  <div>
      <div className="max-w-[1545px]  mt-16 ml-auto">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8  ">
      <div className="md:order-last order-first">
        <Image className="object-cover rounded-[5px]" src={aboutImg} />
      </div>
      <div className="lg:max-w-[850px] md:max-w-[400px] px-[10px] lg:px-[0px]">
     <h1 className='text-[54px] font-medium'>Our Story</h1>
     <ReuseTitle para1="Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region."/>
   
     <ReuseTitle para1="Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer."/>
      </div>
    </div>
  </div>
  {/* about service section start  */}
  <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[30px] px-[10px] lg:px-[0px] my-[40px] md:my-[60px] lg:my-[100px] '>
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
  {/* about service section start end */}

        {/* Team Member section start */}
        <div>
        <Swiper
          modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
            }}
          
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {sliderInfo?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className=" cursor-pointer  mb-[50px] px-[10px] lg:px-[0px]">
                 <div className='flex justify-center'>
                 <img src={item.img} alt="" />
                 </div>
                   <h3 className="text-[26px] lg:text-[32px] text-blackColor font-medium mt-[8px]">{item?.name}</h3>
                    <p className='text-[16px] text-blackColor tracking-wider mb-[10px]'>{item.title}</p>
                    <p className='text-[18px] lg:px-[35px] px-[10px] tracking-widest font-[400] leading-[25px] text-[#aaa1a1cc]'>{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
         {/* Team Member section ends */}

         {/* FREE AND FAST DELIVERY section start  */}
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
         {/* FREE AND FAST DELIVERY section end  */}
    </Container>
  </div>
  )
}

export default About