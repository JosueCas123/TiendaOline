import { useContext } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import {NavLink} from 'react-router-dom';
import { ShppoingCarContext } from '../context/Contex';

export const NabVar = () => {
    const activeStyle = "underline"
    const {carProducts, setSearchByCategory} = useContext(ShppoingCarContext)
   
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
        <ul className='flex items-center gap-3'>
            <li className=' font-semibold text-lg'>
                <NavLink 
                    to="/"
                >
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/"
                    onClick={() => setSearchByCategory('')}
                    className={({isActive}) => 
                    isActive ? activeStyle : undefined
                }
                >
                    All
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/clothes"
                    onClick={() => setSearchByCategory('clothes')}
                    className={({isActive}) => 
                    isActive ? activeStyle : undefined
                }
                >
                    CLothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/electronics"
                    onClick={() => setSearchByCategory('Electronicss')}
                    className={({isActive}) => 
                    isActive ? activeStyle : undefined
                }
                >
                    Electronic
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/furniture"
                    onClick={() => setSearchByCategory('Furniture')}
                    className={({isActive}) => 
                    isActive ? activeStyle : undefined
                }
                >
                    Fornitures
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/toys"
                    onClick={() => setSearchByCategory('Shoes')}
                    className={({isActive}) => 
                    isActive ? activeStyle : undefined
                }
                >
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/othes"
                    onClick={() => setSearchByCategory('Others')}
                    className={({isActive}) => 
                    isActive ? activeStyle : undefined
                }
                >
                    Others
                </NavLink>
            </li>
        </ul>

        <ul className='flex items-center gap-3'>
            <li className=' text-black/60'>
                tefl@platzi.com
            </li>
            <li>
                <NavLink 
                    to="/my-orders"
                    className={({isActive}) => 
                    isActive ? activeStyle : undefined
                }   
                >
                    MyOrders
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/my-account"
                    className={({isActive}) => 
                    isActive ? activeStyle : undefined
                }   
                >
                    MyAccount
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/sing-in"
                    className={({isActive}) => 
                    isActive ? activeStyle : undefined
                }    
                >
                    Sign In
                </NavLink>
            </li>
            <li className='flex items-center'>
                <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon> <div>{carProducts.length}</div>
            </li>
          
        </ul>
    </nav>
  )
}
