import Container from '@/pages/container'
import ReuseTitle from '@/pages/reuse'
import React from 'react'
import SalesCard from './SalesCard'

const FlashSales = () => {

    const productItems = [
        {
            id:"1",
            image:"https://i.ibb.co/NLLLdjK/Frame-613.png",
            name:"IPS LCD Gaming Monitor",
            price:"$370",
            discount:"-30%",
            category:"computer",
            sell:"$400",
            review:'(99)',
            retting:4,
        },
        {
            id:"2",
            image:"https://i.ibb.co/z6phQZf/ideapad-gaming-3i-01-500x500-1.png",
            name:"IPS LCD Gaming Monitor",
            price:"$370",
            discount:"-30%",
            category:"computer",
            sell:"$400",
            review:'(99)',
            retting:5,
        },
        {
            id:"3",
            image:"https://i.ibb.co/n7BzVRH/Frame-608-1.png",
            name:"IPS LCD Gaming Monitor",
            price:"$370",
            discount:"-30%",
            category:"computer",
            sell:"$400",
            review:'(99)',
            retting:4.5,
        },
        {
            id:"4",
            image:"https://i.ibb.co/RpCbRPr/Frame-608.png",
            name:"IPS LCD Gaming Monitor",
            price:"$370",
            discount:"-30%",
            category:"computer",
            sell:"$400",
            review:'(99)',
            retting:4,
        },
        {
            id:"5",
            image:"https://i.ibb.co/z6phQZf/ideapad-gaming-3i-01-500x500-1.png",
            name:"IPS LCD Gaming Monitor",
            price:"$370",
            discount:"-30%",
            category:"computer",
            sell:"$400",
            review:'(99)',
            retting:4.5,
        },
        {
            id:"5",
            image:"https://i.ibb.co/RpCbRPr/Frame-608.png",
            name:"IPS LCD Gaming Monitor",
            price:"$370",
            discount:"-30%",
            category:"computer",
            sell:"$400",
            review:'(99)',
            retting:4.5,
        },
        {
            id:"5",
            image:"https://i.ibb.co/NLLLdjK/Frame-613.png",
            name:"IPS LCD Gaming Monitor",
            price:"$370",
            discount:"-30%",
            category:"computer",
            sell:"$400",
            review:'(99)',
            retting:4.5,
        },
        {
            id:"5",
            image:"https://i.ibb.co/z6phQZf/ideapad-gaming-3i-01-500x500-1.png",
            name:"IPS LCD Gaming Monitor",
            price:"$370",
            discount:"-30%",
            category:"computer",
            sell:"$400",
            review:'(99)',
            retting:4.5,
        }
    ]
  return (
    <Container>
         <div className='mt-[60px] md:mt-[80px] lg:mt-[120px] '>
         <ReuseTitle heading5="Today’s" />
        <ReuseTitle heading3="Flash Sales" />
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-[12px] rounded-[5px]">
              {productItems.map((item, index) => (
               <SalesCard 
               key={index.id}
               item={item}
               />
              ))}
            </div>
         </div>
    </Container>
  )
}

export default FlashSales