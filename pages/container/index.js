import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1170px] mx-auto border-2'>
        {children}
    </div>
  )
}

export default Container