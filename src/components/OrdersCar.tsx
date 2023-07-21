
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid';


interface Props{
   totalPrice:number,
   totalProductus:[]
}

export const OrdersCar = ({totalPrice, totalProductus }:Props) => {

   

  return (
    <div className=' flex justify-between items-center mb-3 border border-black rounded-lg div-4 w-80 p-3'>
        <div className='flex justify-between w-full'>
          <p className='flex flex-col'>
            <span className='font-light'>01.02.23</span>
            <span className='font-light'>{totalProductus} article</span>
          </p>
          <p className='flex items-center'>
            <span className='font-medium  text-2xl'>${totalPrice}</span>
            <ChevronRightIcon className='h-6 w-6 text-black  cursor-pointer' />
          </p>
        </div>
    </div>
  )
}
