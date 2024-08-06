import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/user/Navbar';
import Home from './components/user/Home';
import Inventory from './components/user/Inventory';
import Sales from './components/user/Sales';
import Purchases from './components/user/Purchases';
import Signup from './components/user/Signup';
import AdminLogin from './components/user/AdminLogin';
import UserLogin from './components/user/UserLogin';
import AdminLayout from './components/admin/AdminLayout';
import Footer from './components/user/Footer';
import SalesOrders from './components/user/SalesOrders';

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      {role !== 'admin' && <Navbar setRole={setRole} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-login" element={<UserLogin setRole={setRole} />} />
        <Route path="/admin-login" element={<AdminLogin setRole={setRole} />} />
        <Route path="/sales-order" element={<SalesOrders />} />

        {role === 'admin' && <Route path="*" element={<AdminLayout setRole={setRole} />} />}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
