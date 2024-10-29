import { useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import './index.css';
import { Home } from './Home';
import { Wedding } from './Wedding';
import {Gallery} from './Gallery.js'
import { Travel } from './Travel';
import { RSVP } from './RSVP.js';
import { Music } from './Music.js';

function App() {

  const [currentPage, setCurrentPage] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  function handleNavigation(e) {
    e.preventDefault();
    setCurrentPage(e.target.textContent.toLowerCase());
    console.log(currentPage);
    setIsOpen(false);

    if(currentPage === 'login') {
      console.log('Test');
    };
  }
  return (
    <div className="app">
      {/* <Music /> */}
      <Header onNavigation={handleNavigation} onOpen={isOpen} openMenu={openMenu} loggedIn={isLoggedIn} />
        {currentPage === 'home' && <Home />}
        {currentPage === 'wedding' && <Wedding />}
        {currentPage === 'registry' && <Gallery />}
        {currentPage === 'rsvp' && <RSVP />}
        {isLoggedIn ? <MemberArea /> : ""}
      <Footer />
    </div>
  );
}

function MemberArea() {

  return <>
    <p>This is the private member area.</p>
    <form name='auth-form'>
      <label>Enter your email and password to login.</label>
      <input type='email' placeholder='Email' name='email'></input>  
      <input type='password' placeholder='Password' name='password'></input>
      <button type="submit" className="btn">Login</button>
    </form>    
  </>
}
export default App;