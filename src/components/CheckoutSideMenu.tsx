import { useContext, useState } from 'react';
import { ShppoingCarContext } from '../context/Contex';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { OrderCar } from './OrderCar';
import { totalPrice } from './helpers/totalPrice';
import '../components/style.css';
import { Link } from 'react-router-dom';

export const CheckoutSideMenu = () => {
    const {closeCheckouSideMenu, isCheckouSideMenu, carProducts, setCarProducts, orden, setOrden, setSearchByTitle} = useContext(ShppoingCarContext)
    console.log(carProducts)
   // console.log(productToShow?.image)
    
   const handleDelete = (id:number) => {
    const filterProduct = carProducts.filter(product => product.id != id)
    setCarProducts(filterProduct)
   }

   const handleCheckout = () => {
    const orderAdd = {
        date:'01.02.23',
        products: carProducts,
        totalProducts: carProducts.length,
        totalPrice: totalPrice(carProducts)
    }
    console.log(orderAdd)
    setOrden([...orden, orderAdd])
    setCarProducts([])
    setSearchByTitle('')
   }
  
  return (
    <aside 
        className={`${isCheckouSideMenu ? 'flex' : 'hidden'} produt-detail flex flex-col fixed bg-white right-0 border  border-black rounded-sm `}
    >

        <div className=' flex  justify-between items-center p-6'>
            <h2 className=' font-medium text-xl'>
                My Order
            </h2>
            <div 
                className=' cursor-pointer'
                onClick={closeCheckouSideMenu}
            >
                <XMarkIcon className='h-6 w-6 text-black-500'></XMarkIcon>
            </div>
        </div>
        <div className='px-5 space-y-2 overflow-y-scroll flex-1'>
            {
                carProducts.map(product => (
                    <OrderCar
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete={() => handleDelete(product.id)}
                    />
                ))
            }
        </div>
        <div className='p-5 '>
            <p className='flex justify-between items-center'>
                <span className='font-light text-lg'>Total:</span>
                <span className='font-medium text-2xl '>${totalPrice(carProducts)}</span>
            </p>
            <Link
                to='/my-orders/last'
            >
                <button
                    onClick={handleCheckout}
                    className='w-full bg-black text-white py-2 rounded-lg '
                >
                    Guradar
                </button>
            </Link>
        </div>

      
    </aside>
  )
}
