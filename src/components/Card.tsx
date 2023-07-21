import React, { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { Products } from '../interface/products'
import { ShppoingCarContext } from '../context/Contex';



export const Card = ({data}: {data:Products}) => {

  const {setCount, count, openProductDetail, setProductToShow,carProducts, setCarProducts,openCheckouSideMenu} = useContext(ShppoingCarContext)
  //console.log(count)
  //console.log(data.id)

  const showProduct = (productDetail:Products) => {
    openProductDetail()
    setProductToShow(productDetail)
  }

  const addProductCar = (e:React.MouseEvent<HTMLDivElement, MouseEvent>, productDetail:Products) =>{
    e.stopPropagation()
    setCount(count + 1)
    setCarProducts([...carProducts,  productDetail])
    openCheckouSideMenu()

  }

  const rendericon = (id:number) => {

    const isCarCheck = carProducts.filter(product => product.id === id).length > 0;

    //Condicion para cambiar el check
    if (isCarCheck) {
      return (
        <div className=' absolute top-0 right-0 flex justify-center items-center bg-black rounded-full m-2 p-1 w-6 h-6 font-bold'
        onClick={(e) => addProductCar(e, data)} >
          <CheckIcon className=' h-6 w-6 text-white/90'></CheckIcon>
        </div>
      )
      
    }else{
      return (
        <div className=' absolute top-0 right-0 flex justify-center items-center bg-white rounded-full m-2 p-1 w-6 h-6 font-bold'
        onClick={(e) => addProductCar(e, data)} >
          <PlusIcon className=' h-6 w-6 text-black'></PlusIcon>
        </div>
      )

    }
  }
  
  return (
    <div 
      className=' bg-white cursor-pointer w-50 h-60 rounded-lg'
      onClick={() => showProduct(data)}
    >
        <figure className=' relative mb-2 w-full h-4/5 '>
            <span className='p-1 absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-base m-2 px-3 py-0.5 '>{data.category.name}</span>
            <img className='w-full h-full object-cover rounded-lg' src={data.images[0]} alt={data.title} />
            {
              rendericon(data.id)
            }
        </figure>
        <p className=' flex justify-between '>
            <span className=' text-base text-black font-light'>{data.title}</span>
            <span className=' text-lg font-bold'>${data.price}</span>
        </p>
    </div>
  )
}
