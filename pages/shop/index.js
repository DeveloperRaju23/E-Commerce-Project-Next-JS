
import UseFetchData from '@/hooks/UseFetchData'
import Container from '@/pages/container'
import ReuseTitle from '@/pages/reuse'
import Link from 'next/link'
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'


const index = () => {
  const [product] = UseFetchData()

// const productsFilter = product?.filter(items => items.category === "woman")
  return (
    <Container>
 <ReuseTitle heading5="This Month" />
        <ReuseTitle heading3="Best Selling Products" />
        <div className="grid mt-[40px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-[12px] rounded-[5px]">
    
    {product?.map((item) => (

      <div className="mb-3">
      <div className="relative cursor-pointer">
        <div className="bg-grayColor pb-[23px] pt-[24px]">
          <img src={item.image} alt="Item 1" className="mx-auto object-cover " />
          <Link href="/buynow">
          <button className="bg-blackColor text-white py-2 px-4 w-full transition-opacity opacity-0 hover:opacity-100 hover:shadow-md absolute top-7/12 rounded-[2px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Add to Cart
          </button>
          </Link>
          <AiOutlineHeart className="w-[30px] h-[30px] absolute top-3 right-3" />
          <span className="absolute top-3 left-3 bg-secondaryRed text-whiteColor font-normal px-2 rounded">{item.discount}</span>
        </div>
        <h2 className="text-lg font-semibold mt-3">{item.name}</h2>
        <span className="font-bold text-secondaryRed">{item.price}</span>
        <del>
          <span className="text-grayBlack font-medium ms-3">{item.sell}</span>
        </del>
        <p className="text-gray-500 mb-4"></p>
        <div className="flex items-center">
        <AiFillStar className="text-[#FFAD33] h-5 w-5"/>
        <AiFillStar className="text-[#FFAD33] h-5 w-5"/>
        <AiFillStar className="text-[#FFAD33] h-5 w-5"/>
        <AiFillStar className="text-[#FFAD33] h-5 w-5"/>
        <AiOutlineStar className="text-[#BFBFBF] h-5 w-5"/>
        <span className="ps-2">{item.review}</span>
          {/*                
             <AiOutlineShoppingCart className="w-[30px] h-[30px] " /> */}
        </div>
      </div>
    </div>
    ))}
  </div>
    </Container>
  )
}

export default index