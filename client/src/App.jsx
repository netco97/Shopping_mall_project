import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <TopNavigationBar cart={cart}/>
      <Routes></Routes>
        <Route path="/" element={<Home products={products} setProducts={setProducts}/>} />
        <Route path="/product/:id" element={<Product cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<Basket cart={cart} setCart={setCart}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
