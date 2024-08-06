import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SalesOrders.css";

const SalesOrders = () => {
const [searchTerm, setSearchTerm] = useState("");

const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implement the search logic here
    console.log("Searching for:", e.target.value);
};

return (
    <div className="sales-orders-container">
    <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
        type="text"
        placeholder="Search in Sales orders"
        value={searchTerm}
        onChange={handleSearch}
        />
    </div>
      {/* The rest of your sales orders component */}
    </div>
);
};

export default SalesOrders;