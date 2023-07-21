import React, { useContext, useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'
import { Products } from '../interface/products'
import { ProductDetail } from '../components/ProductDetail'
import { ShppoingCarContext } from '../context/Contex'


export const HomePages = () => {
    
    const {items, setSearchByTitle, searchByTitle, filteredItems} = useContext(ShppoingCarContext)
    const renderView = () => {
            
                if(filteredItems?.length){
                    return(
                        filteredItems?.map(item => (
                            <Card
                                key={item.id}
                                data={item}
                            />
                         ))
                    )
                }else{
                    return(
                        <div>Busqueda no encontrada</div>
                    )
                }

    }

  return (
   <Layout>
    <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className=' font-medium text-xl'>Exclusive Products</h1>
    </div>
    <input 
        className=' rounded-lg border border-black p- mb-4 w-80 focus:outline-none' 
        type="text" 
        placeholder='Ingrese un producto'
        onChange={(e) => setSearchByTitle(e.target.value)}
    />
        
        <div className=' grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {renderView()}
        </div>
        <ProductDetail/>
   </Layout>
  )
}
