import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
function Header() {

  return(<header className="header">
      <Heading />
      <Navbar />
    </header>
  )
}

function Main() {

  return(
    <main className='main'>
      <p className='lead-text'>Celebrate our Big day...!</p>
      <h2 className='title'>Amaldene Meyer - and - Leighton Jansen</h2>
      <p className='event-date'>10 March 2025</p>
      <p className='invitation'>Amaldene and Leighton joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends.</p>
      <button className='btn'>RSVP</button>
    </main>
  )
}

function Footer() {

  return(
    <footer className='footer'>
      <p className='owners'>
        A & L - 2024
      </p>
      <p className='author'>
        Developed By Elrico Landrew
      </p>
    </footer>
  )
}

function Heading() {

  return(
    <h1 className='heading'>
      Amaldene & Leighton
    </h1>
  )
}
function Navbar() {

  return(
    <nav className='nav-bar'>
      <button className='btn nav-btn'>= x</button>
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
  )
}