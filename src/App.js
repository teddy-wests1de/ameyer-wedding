import { useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import './index.css';
import { Home } from './Home';
import { Wedding } from './Wedding';
import {Registry} from './Registry'
import { Travel } from './Travel';
import { RSVP } from './RSVP.js';
import { Music } from './Music.js';

function App() {

  const [currentPage, setCurrentPage] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  function handleNavigation(e) {
    e.preventDefault();
    setCurrentPage(e.target.textContent.toLowerCase());
    console.log(currentPage);
    setIsOpen(false);
  }
  return (
    <div className="app">
      {/* <Music /> */}
      <Header onNavigation={handleNavigation} onOpen={isOpen} openMenu={openMenu}/>
      {currentPage === 'home' && <Home />}
      {currentPage === 'wedding' && <Wedding />}
      {currentPage === 'registry' && <Registry />}
      {currentPage === 'rsvp' && <RSVP />}

      <Footer />
    </div>
  );
}

export default App;