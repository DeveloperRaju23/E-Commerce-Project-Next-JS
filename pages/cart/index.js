import React from 'react'
import Container from '../container'

const index = () => {
  return (
    <Container>
   <div className='flex flex-col md:flex-row gap-3 mt-[40px]'>
   <div className='md:w-8/12 w-full  border h-56'>
       <div>
       <div className='flex justify-between bg-grayColor py-6 px-2 font-medium'>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Subtotal</span>
        <span>Remove</span>
        </div>
       </div>
       <div className='flex justify-between bg-grayColor py-6 px-2 mt-2 font-medium'>
       <span>computer</span>
        <span>$45</span>
        <span>+</span>
        <span>$45</span>
        <span>Remove</span>
       </div>
    </div>
    <div className='md:w-4/12	w-full	border h-56'>

   </div>
   </div>
   
</Container>
  )
}

export default index