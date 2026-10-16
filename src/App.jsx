import React, { useState } from "react";

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

import products from "./Data/Products";


function App() {

  const [cart, setCart] = useState([]);

  const [wishlist, setWishlist] = useState([]);


  // adding to the cart

  const addToCart = (product) => {

    const existingProduct = cart.find(
      item => item.id === product.id
    );


    if (existingProduct) {

      setCart(
        cart.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }

  };


  // increase

  const increaseQuantity = (id) => {

    setCart(
      cart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };


  // decrease

  const decreaseQuantity = (id) => {
    setCart(

      cart
        .map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)

    );

  };


  // removing

  const removeFromCart = (id) => {

    setCart(
      cart.filter(item => item.id !== id)
    );

  };


  // adding to the wishlist

  const addToWishlist = (product) => {

    const exists = wishlist.some(
      item => item.id === product.id
    );


    if (exists) {

      setWishlist(
        wishlist.filter(
          item => item.id !== product.id
        )
      );

    } else {

      setWishlist([
        ...wishlist,
        product
      ]);

    }

  };


  //removing form the wishlist
  const removeFromWishlist = (id) => {

    setWishlist(
      wishlist.filter(
        item => item.id !== id
      )
    );

  };


  // counting cart

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  return (

    <BrowserRouter>

      <Navbar cartCount={cartCount} />


      <Routes>

        <Route
          path="/"
          element={
            <Home
              products={products}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              wishlist={wishlist}
            />
          }
        />


        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              wishlist={wishlist}
            />
          }
        />


        <Route
          path="/product/:id"
          element={
            <ProductDetails
              products={products}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              wishlist={wishlist}
            />
          }
        />


        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />


        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              addToCart={addToCart}
              removeFromWishlist={
                removeFromWishlist
              }
            />
          }
        />

      </Routes>


      <Footer />

    </BrowserRouter>

  );
}

export default App;