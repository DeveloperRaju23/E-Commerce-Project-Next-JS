import React, { useEffect, useState } from 'react'
import Container from '../container'

const index = () => {

  
const [products, setProduct] = useState([])

useEffect(() =>{
    fetch("allProducts.json")
    .then(res => res.json())
    .then(data => setProduct(data))
},[])
const productsFilter = products?.filter(items => items.category === "woman")

  return (
    <Container>
  <div className="grid mt-[40px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-[12px] rounded-[5px]">
    
    {productsFilter?.map((item) => (
      <div className='bg-grayColor rounded pb-[23px] pt-[24px]' key={item.id}>
        <img className='max-w-[200px] max-h-[150px] mx-auto' src={item.image} alt="" />
        <h3>{item.name}</h3>
        <p>Category: {item.category}</p>
   
      </div>
    ))}
  </div>
    </Container>
  )
}

export default index