import React from 'react';
import Hero from '../../component/hero/Hero';
import Card from '../../redux/Card';
import Services from '../../component/Services';
import Logo from '../../component/logoCloud/Logo';
import Discount from '../../component/discount/Discount';
import BrandSale from '../../component/BrandSale'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Card />
      <BrandSale/>
      <Logo/>
      <Discount />
    </div>
  )
}

export default Home