import { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import './index.css';
import { Home } from './Home';
import { Wedding } from './Wedding';
import {Gallery} from './Gallery.js'
import { Travel } from './Travel';
import { RSVP } from './RSVP.js';
import { Music } from './Music.js';

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";



function App() {

  const [currentPage, setCurrentPage] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }
  function handleLogout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      setIsLoggedIn(false);
    }).catch((error) => {
      // An error happened.
    });
  }
  function handleNavigation(e) {
    e.preventDefault();
    setCurrentPage(e.target.textContent.toLowerCase());
    setIsOpen(false);
    // setCurrentPage(e.target.textContent.toLowerCase());
    console.log(currentPage);


  }

  useEffect(() => {
    // Logs the updated currentPage whenever it changes
    setCurrentPage(currentPage);
    if (currentPage === 'logout') {
      setIsLoggedIn(false);
    }
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div className="app">
      {/* <Music /> */}
      <Header onNavigation={handleNavigation} onOpen={isOpen} openMenu={openMenu} loggedIn={isLoggedIn} />
        {currentPage === 'home' && <Home />}
        {currentPage === 'wedding' && <Wedding />}
        {currentPage === 'gallery' && <Gallery />}
        {currentPage === 'rsvp' && <RSVP />}
        {currentPage === 'list' && <List />}
        {currentPage === 'login' && (
        isLoggedIn ? <WelcomeScreen onCurrentPage={setCurrentPage}/> : <MemberArea onLoggedIn={setIsLoggedIn} />
        )}
        {currentPage === 'logout' && <Home />}
      <Footer />
    </div>
  );
}

function MemberArea({onLoggedIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();


  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log(user);
      onLoggedIn(true);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      <ErrorScreen message={errorMessage} />
    });
  }
  return <>
    <p>This is the private member area.</p>
    <form name='auth-form' onSubmit={handleSubmit}>
      <label>Enter your email and password to login.</label>
      <input type='email' placeholder='Email' name='email' value={email} onChange={e=>setEmail(e.target.value)}></input>  
      <input type='password' placeholder='Password' name='password' value={password} onChange={e=>setPassword(e.target.value)}></input>
      <button type="submit" className="btn">Login</button>
    </form>    
  </>
}

function List() {
  return <div><h2>List of RSVP's</h2>

  </div>
}
function WelcomeScreen({onCurrentPage}) {

  return <div className='welcome'><h2>Welcome</h2>
    <button  className="btn" onClick={()=>onCurrentPage('list')}>View List</button>
  </div>
}

function ErrorScreen() {

  return <div>Error Logging In...!</div>
}
export default App;