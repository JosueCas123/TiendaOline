import { XMarkIcon } from '@heroicons/react/24/solid'
import '../components/style.css';
import { useContext, useState } from 'react';
import { ShppoingCarContext } from '../context/Contex';

export const ProductDetail = () => {
    const {isProductDetail, closeProductDetail, productToShow} = useContext(ShppoingCarContext)
   // console.log(productToShow?.image)
    
  
  return (
    <aside 
        className={`${isProductDetail ? 'flex' : 'hidden'} produt-detail flex flex-col fixed bg-white right-0 border  border-black rounded-sm `}
    >

        <div className=' flex  justify-between items-center p-6'>
            <h2 className=' font-medium text-xl'>
                Detail
            </h2>
            <div 
                className=' cursor-pointer'
                onClick={closeProductDetail}
            >
                <XMarkIcon className='h-6 w-6 text-black-500'></XMarkIcon>
            </div>
        </div>
            <figure className=' px-6'>
                <img 
                    className=' w-full h-full rounded-lg object-cover bg-cover bg-center'
                    src={ productToShow?.images[0]}
                    alt={productToShow?.title}
                />
            </figure>
            <p className=' flex flex-col p-6'>
                <span className=' font-medium text-2xl'>${productToShow?.price}</span>
                <span className=' font-medium text-md' >{productToShow?.title}</span>
                <span className=' font-light text-sm'>{productToShow?.description}</span>
            </p>
        

    </aside>
  )
}
