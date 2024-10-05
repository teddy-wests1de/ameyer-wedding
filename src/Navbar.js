import { useState } from "react";
import openBtn from './9035889_menu_sharp_icon.svg';
import  closeBtn from './9035757_close_sharp_icon.svg';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='nav-bar'>
      <button className='btn nav-btn' onClick={openMenu}><img src={!isOpen ? openBtn : closeBtn} alt=""/></button>
      <ul className={!isOpen ? 'menu' : 'menu open'}>
        <li className='nav-item'>
          <a href="/" className="nav-link">WEDDING</a>
        </li>
        <li className='nav-item'>
          <a href="/" className="nav-link">TRAVEL</a>
        </li>
        <li className='nav-item'>
          <a href="/" className="nav-link">REGISTRY</a>
        </li>
        <button className='btn'>RSVP</button>
      </ul>
    </nav>
  );
}
