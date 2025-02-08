import React, { useState } from 'react';


export const Header = ({ cart, addToCart, removeFromCart, clearCart }) => {
  const [showCart, setShowCart] = useState(false);

  // คำนวณราคารวมของสินค้าทั้งหมดในตะกร้า
  const totalPrice = cart.reduce((total, item) => total + item.Price * item.quantity, 0);

  return (
    <>
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center py-3 px-4 bg-light">
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        </ul>
        {/* ปุ่มตะกร้า */}
        <button className="btn btn-outline-dark" onClick={() => setShowCart(true)}>
          🛒 ตะกร้า <span className="badge bg-danger">{cart.length}</span>
        </button>
      </header>

      {/* Modal ตะกร้าสินค้า */}
      {showCart && (
        <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">🛒 ตะกร้าสินค้า</h5>
                <button type="button" className="btn-close" onClick={() => setShowCart(false)}></button>
              </div>
              <div className="modal-body">
                {cart.length === 0 ? (
                  <p>ตะกร้าว่างเปล่า</p>
                ) : (
                  <ul className="list-group">
                    {cart.map((item) => (
                      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.Name} - {item.quantity} คู่
                        <div>
                          <button className="btn btn-sm btn-success me-2" onClick={() => addToCart(item)}>➕</button>
                          <button className="btn btn-sm btn-warning" onClick={() => removeFromCart(item)}>➖</button>
                          <button className="btn btn-sm btn-danger ms-2" onClick={() => clearCart(item)}>❌</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="modal-footer d-flex justify-content-between">
                {/* แสดงราคารวมทั้งหมด */}
                <h5 className="text-success">💰 ราคารวม: {totalPrice.toLocaleString()} บาท</h5>
                <button className="btn btn-secondary" onClick={() => setShowCart(false)}>ปิด</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
