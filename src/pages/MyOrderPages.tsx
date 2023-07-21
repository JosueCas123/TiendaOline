import React, { useContext } from 'react'
import { Layout } from '../components/Layout'
import { ShppoingCarContext } from '../context/Contex'
import { OrderCar } from '../components/OrderCar'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

export const MyOrderPages = () => {

  const { orden, setCarProducts } = useContext(ShppoingCarContext)

  console.log(orden)
  const  currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  console.log(index)
  if (index === 'last') index = orden?.length - 1

  return (
   <Layout>
        <div className='flex relative justify-center items-center w-80 mb-7'>
            <Link 
            className='absolute left-0'
              to='/my-orders'
            >
              <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
            </Link>

            <h1>
              My Order
            </h1>
        </div>
        <div className=' space-y-4'>
            {
                orden?.[index]?.products.map( (product:any) => (
                
                    <OrderCar
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                  
                    />
                ))
            }
        </div>
       
   </Layout>
  )
}
