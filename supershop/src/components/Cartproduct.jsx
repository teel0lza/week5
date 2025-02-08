import React from 'react';

function CardProducts({ item, addToCart, removeFromCart }) {
  return (
    <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
      <img 
        src={item.image} 
        className="card-img-top" 
        alt={item.Name} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <div className="card-body">
        <h5 className="card-title">{item.Name}</h5>
        <p className="card-text">{item.Description}</p>
        <h6 className="fw-bold text-primary">{item.Price} บาท</h6>
        
        <button className="btn btn-dark w-100 mb-2" onClick={() => addToCart(item)}>➕ เพิ่มลงตะกร้า</button>
      </div>
    </div>
  );
}

export default CardProducts;
