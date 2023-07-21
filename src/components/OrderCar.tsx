

import { XMarkIcon } from '@heroicons/react/24/solid';


interface Props{
    id?: number;
    title: string;
    price: number;
    imageUrl: string[];
    handleDelete?: ((id: number | undefined) => void) | undefined
}

export const OrderCar = ({id, title, imageUrl, price, handleDelete }:Props) => {

    let renderXMakIcon;

    if (handleDelete) {
        renderXMakIcon =  <XMarkIcon 
        onClick={() => handleDelete(id)}
        className='h-6 w-6 text-black-500 cursor-pointer'></XMarkIcon>
        
    }
  return (
    <div className=' flex justify-between items-center'>
        <div className=' flex items-center gap-2'>
            <figure className=' w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={imageUrl[0]} alt={title} />
            </figure>
            <p className=' text-sm font-light'>{title}</p>
        </div>
            <div 
                className='flex items-center gap-2'
            >
                <p className='text-lg font-medium'>${price}</p>
                {renderXMakIcon}
            </div>
    </div>
  )
}
