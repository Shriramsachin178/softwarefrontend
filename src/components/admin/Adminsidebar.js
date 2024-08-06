import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const AdminSidebar = ({ setRole }) => {
  const navigate = useNavigate();
  const [isRetracted, setIsRetracted] = useState(false);

  const handleLogout = () => {
    setRole(null);
    navigate("/admin-login");
  };

  const toggleSidebar = () => {
    setIsRetracted(!isRetracted);
  };

  return (
    <>
      <div className={`sidebar ${isRetracted ? "retracted" : ""}`}>
        <div className="logo">
          <img src="/textally-high-resolution-logo-transparent.png" alt="Logo" />
        </div>
        <ul>
          <li><Link to="/admin-dashboard">Dashboard</Link></li>
          <li><Link to="/admin-inventory">Inventory</Link></li>
          <li><Link to="/admin-sales">Sales</Link></li>
          <li><Link to="/admin-purchases">Purchases</Link></li>
          <li><Link to="/admin-settings">Settings</Link></li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>
      <div className={`main-content ${isRetracted ? "retracted" : ""}`}>
        {/* Your main content here */}
      </div>
    </>
  );
};

export default AdminSidebar;
