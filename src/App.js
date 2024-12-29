import React from 'react';
import About from './Components/About/About.js';
import Campus from './Components/Campus/Campus.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';
import Hero from './Components/Hero/Hero.js';
import Navbar from './Components/navbar/Navbar.js';
import Programs from './Components/Programs/Programs.js';
import Testimonials from './Components/Testimonials/Testimonials.js';
import Title from './Components/Title/Title.js';
console.log(Hero);
const App = () => {
  return (
    <>
      <Navbar/>   
      <Hero/>  
      <div className='container'>
      <Title subTitle='Our Program' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App

