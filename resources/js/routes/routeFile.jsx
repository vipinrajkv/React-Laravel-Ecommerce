import React from 'react';
import { Route, Routes } from 'react-router-dom';
import List from '../components/list';
import DefaultHeader from "../components/header";
import CartItemsList from '../components/cart/CartItemsList';
import Login from '../components/login';
import CheckOut from '../components/cart/Checkout';
import Register from '../components/register';
import UserHeader from '../components/userHeader';

export default function RouterLayout() {
  return (
    <Routes>
      {/* <Route path="/"  element={<DefaultHeader />}>
        <Route index element={<List />} />
      </Route>
      <Route path="/cart"  element={<DefaultHeader  key={location.key}/>}>
        <Route index element={<CartItemsList/>} />
      </Route>
      <Route path="/login"  element={<DefaultHeader/>}>
      <Route index element={<Login/>} />
      </Route>
      <Route path="/Register"  element={<DefaultHeader/>}>
      <Route index element={<Register/>} />
      </Route> */}

      {/* <Route path="/checkOut"  element={<DefaultHeader/>}>
      <Route index element={<CheckOut/>} />
      </Route> */}

      <Route element={<UserHeader />}>
      <Route path="/checkOut" element={<CheckOut />} />
      </Route>

      <Route element={<DefaultHeader />}>
        <Route path="/" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cart" element={<CartItemsList/>} />
      </Route>


    </Routes>
  );
}
