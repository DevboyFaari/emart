import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </>

  );
}

export default App;
