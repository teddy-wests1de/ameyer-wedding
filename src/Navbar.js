import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='nav-bar'>
      <button className='btn nav-btn' onClick={openMenu}>{isOpen ? 'x' : '='}</button>
      <ul className='menu'>
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
