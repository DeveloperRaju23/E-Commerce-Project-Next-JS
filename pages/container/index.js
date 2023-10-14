import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1170px] w-full mx-auto '>
        {children}
    </div>
  )
}

export default Container