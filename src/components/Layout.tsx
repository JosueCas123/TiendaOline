import React from 'react'

export const Layout = ({children}:any) => {
  return (
   <div className=' flex flex-col items-center mt-20'>
    {children}
   </div>
  )
}
