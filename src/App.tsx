import { useState } from 'react'
import {useRoutes, BrowserRouter} from 'react-router-dom';
import './App.css'
import { HomePages } from './pages/HomePages'
import { MyAccountPages } from './pages/MyAccountPages';
import { MyOrderPages } from './pages/MyOrderPages';
import { MyOrdersPages } from './pages/MyOrdersPages';
import { SignInPages } from './pages/SignInPages';
import { NotFoundPages } from './pages/NotFoundPages';
import { NabVar } from './components/NabVar';
import { ShoppingCarProvider } from './context/Contex';
import { CheckoutSideMenu } from './components/CheckoutSideMenu';

// creacion de la Routes

const AppRoutes: React.FC = ()  => {
  // uso de hooks para crear las rutas
  let routes = useRoutes([
    {path:'/', element:<HomePages/>},
    {path:'/clothes', element:<HomePages/>},
    {path:'/electronics', element:<HomePages/>},
    {path:'/furniture', element:<HomePages/>},
    {path:'/toys', element:<HomePages/>},
    {path:'/othes', element:<HomePages/>},
    {path:'/my-account', element:<MyAccountPages/>},
    {path:'/my-order', element:<MyOrderPages/>},
    {path:'/my-orders', element:<MyOrdersPages/>},
    {path:'/my-orders/last', element:<MyOrderPages/>},
    {path:'/my-orders/:id', element:<MyOrderPages/>},
    {path:'/*', element:<NotFoundPages/>},
    {path:'/sing-in', element:<SignInPages/>},

  ])

  return routes;
}



const App = () => {
  return (
      <ShoppingCarProvider>
        <BrowserRouter>
          <AppRoutes/>
          <NabVar/>
          <CheckoutSideMenu/>
        </BrowserRouter>
      </ShoppingCarProvider>
  )
}

export default App
