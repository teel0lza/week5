import { useState } from 'react';
import Products from './data.jsx';
import CardProducts from './components/Cartproduct.jsx';
import { Header } from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // กำหนดสิทธิ์ Admin

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

  const clearCart = (item) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id));
  };

  // ถ้ายังไม่ได้ล็อกอิน ให้แสดงหน้า Login
  if (!isAuthenticated) {
    return <Login setIsAuthenticated={setIsAuthenticated} />;
  }

  // ถ้าเป็น Admin ให้แสดงหน้า Dashboard
  if (isAdmin) {
    return <Dashboard products={Products} cart={cart} />;
  }

  return (
    <>
      <Header cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
      <div className="container">
        <h1 className="text-center my-4">NIGA</h1>

        <button className="btn btn-warning mb-4" onClick={() => setIsAdmin(true)}>🔧 แดชบอร์ด Admin</button>

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
