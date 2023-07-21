import React, { useContext } from 'react'
import { Layout } from '../components/Layout'
import { OrdersCar } from '../components/OrdersCar'
import { ShppoingCarContext } from '../context/Contex'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

export const MyOrdersPages = () => {
  const { orden, setCarProducts } = useContext(ShppoingCarContext)
  console.log(orden)
  return (
    <Layout>
      <div className='flex justify-center items-center w-80 relative'>
        <h1>
          MyOrders
        </h1>
      </div>
        {
          orden.map((order:any, index:number) => (
            <Link
              key={index} 
              to={`/my-orders/${index}`}
            >
              <OrdersCar
                totalPrice={order.totalPrice}
                totalProductus={order.totalProducts}
              />
            </Link>

          ))
        }

        
    </Layout>
  )
}
