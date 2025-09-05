import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products.jsx'
import Login from "./components/Login.jsx";
import Home from './Home.jsx';
import Categories from './components/Categories.jsx';
import Signup from './Signup.jsx';

export default function App() {
  return (
    <>
      <Navbar cartCount={2} />
      <div className="container py-4">
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<h2><Products/></h2>} />
          <Route path="/categories" element={<h2><Categories /></h2>} />
          <Route path="/cart" element={<h2>Cart</h2>} />
          <Route path="/orders" element={<h2>Orders</h2>} />
          <Route path="/profile" element={<h2>Profile</h2>} />
          <Route path="/login" element={<h2><Login/></h2>} />
          <Route path="/signup" element={<h2><Signup/></h2>} />
        </Routes>
      </div>
      {/* <Products/> */}
    </>
  )
}
