import React from 'react'

const ReuseTitle = ({heading2,heading6}) => {
  return (
    <div>
        <h2 className='text-[22px] md:text-[30px] lg:text-[36px] text-blackColor font-medium'>{heading2}</h2>
        <h6 className='text-[16px] text-blackColor font-normal mt-[12px] md:mt-[20px] mb-[12px] md:mb-[26px]'>{heading6}</h6>

    </div>
  )
}

export default ReuseTitle