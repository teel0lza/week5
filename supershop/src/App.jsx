import { useState } from 'react';
import Products from './data.jsx';
import CardProducts from './components/Cartproduct.jsx';
import { Header } from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  // ฟังก์ชันเพิ่มสินค้าลงตะกร้า
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // ฟังก์ชันลบสินค้าออกทีละ 1
  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem.quantity > 1) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
      } else {
        return prevCart.filter(cartItem => cartItem.id !== item.id);
      }
    });
  };

  // ฟังก์ชันลบสินค้าทั้งหมดออกจากตะกร้า
  const clearCart = (item) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id));
  };

  return (
    <>
      <Header cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
      <div className="container">
        <h1 className="text-center my-4">NIGA</h1>

        <h2 className="text-primary mt-4">👟 รองเท้าผู้ชาย</h2>
        <div className="row">
          {Products.filter(item => item.tag === "men").map(item => (
            <div key={item.id} className="col-md-4 mb-3">
              <CardProducts item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
            </div>
          ))}
        </div>

        <h2 className="text-danger mt-4">👠 รองเท้าผู้หญิง</h2>
        <div className="row">
          {Products.filter(item => item.tag === "women").map(item => (
            <div key={item.id} className="col-md-4 mb-3">
              <CardProducts item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
