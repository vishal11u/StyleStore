import React from 'react';
import Footer from './component/footer/Footer';
import ShoppingCart from './shopping/ShoppingCart';
import { Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import NavBar from './component/navbar/NavBar';
import MenuBar from './component/menuBar/MenuBar';
import Login from './component/login/Login';
import SignUp from './component/login/SignUp/SignUp';
import Payment from './component/login/Payment/Payment';
import Reset from './component/login/ForgotPassword/Reset';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Track from './component/trackOrder/Track';
import UPI from './component/login/Payment/UPI';
import Privacy from './component/pages/PrivacyPolicy';
import Quentions from './component/pages/Quentions';
import TermsCondition from './component/pages/TermsCondition';
import Cart from './component/infoCart/Cart';
import ScrollToTop from './scrollUp/ScrollUp';
import ProductListing from './component/productList/ProductListing';

function App() {
  return (
    <div>
      <NavBar />
      <MenuBar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/track' element={<Track />} />
        <Route path='/upi' element={<UPI />} />
        <Route path='/privacy' element={< Privacy />} />
        <Route path='/terms' element={< TermsCondition />} />
        <Route path='/f&q' element={< Quentions />} />
        <Route path='/infocart' element={< Cart />} />
        <Route path='/productlisting' element={< ProductListing />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;