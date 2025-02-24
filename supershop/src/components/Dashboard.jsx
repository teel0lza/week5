import React from 'react';
import './Dashboard.css';

const Dashboard = ({ products, cart }) => {
  // คำนวณจำนวนสินค้าทั้งหมด
  const totalProducts = products.length;
  
  // คำนวณยอดรวมของสินค้าที่ขายได้ (ในตะกร้า)
  const totalSales = cart.reduce((total, item) => total + item.Price * item.quantity, 0);

  return (
    <div className="dashboard-container">
      <h2>📊 แดชบอร์ดผู้ดูแลระบบ</h2>

      <div className="dashboard-stats">
        <div className="stat-box">
          <h3>📦 สินค้าทั้งหมด</h3>
          <p>{totalProducts} รายการ</p>
        </div>
        <div className="stat-box">
          <h3>💰 ยอดรวมสินค้าในตะกร้า</h3>
          <p>{totalSales.toLocaleString()} บาท</p>
        </div>
      </div>

      <h3>📋 รายการสินค้า</h3>
      <table className="product-table">
        <thead>
          <tr>
            <th>#</th>
            <th>ชื่อสินค้า</th>
            <th>ราคา</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.Name}</td>
              <td>{item.Price.toLocaleString()} บาท</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
