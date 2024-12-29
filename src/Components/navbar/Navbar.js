import React, { useEffect, useState } from 'react';
import logo from '../../images/grad-cap.svg';

// import { Button } from 'react-scroll';
import { Link } from 'react-scroll';
import menu_icon from '../../images/menu-icon.png';
import './Navbar.css';
const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
      <img src={logo} alt="" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
      <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
      <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
      <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
      <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
      <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )

}

export default Navbar
