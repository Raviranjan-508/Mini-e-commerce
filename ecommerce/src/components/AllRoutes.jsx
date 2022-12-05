import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart';
import Order from '../pages/Order';
import Products from '../pages/Products'
import ProductDetails from './../pages/ProductDetails';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
