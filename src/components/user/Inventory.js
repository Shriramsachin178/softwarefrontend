import React from "react";
import "./Inventory.css"; // Make sure to create this CSS file for styling

const Inventory = () => (
  <>
    <section className='hero'>
      <h1></h1>
    </section>
    <div className="inventory-containers">
      <div className="inventory-container">
        <h2>Add Item</h2>
        <button className="btn-add-item">Add Item</button>
      </div>
      <div className="inventory-container">
        <h2>Add Group</h2>
        <button className="btn-add-group">Add New Item Group</button>
      </div>
      <div className="inventory-container">
        <h2>Price List</h2>
        <button className="btn-price-list">New Price List</button>
      </div>
    </div>
  </>
);

export default Inventory;