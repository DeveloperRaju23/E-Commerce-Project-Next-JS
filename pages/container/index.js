import React from "react";

const Container = ({children}) => {
  return (
    <div className='max-w-[1170px] w-full mx-auto px-[10px] md:px-[0px]'>
        {children}
    </div>
  )
}

export default Container;
