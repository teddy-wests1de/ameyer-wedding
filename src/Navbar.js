import openBtn from './9035889_menu_sharp_icon.svg';
import  closeBtn from './9035757_close_sharp_icon.svg';

export function Navbar({onNavigation, openMenu, onOpen, loggedIn}) {

  return (
    <nav className='nav-bar'>
      <button className='btn nav-btn' onClick={openMenu}><img src={!onOpen ? openBtn : closeBtn} alt=""/></button>
      <ul className={!onOpen ? 'menu' : 'menu open'}>
        <li className='nav-item'>
          <a href="/home" className="nav-link" onClick={onNavigation}>HOME</a>
        </li>
        <li className='nav-item'>
          <a href="/wedding" className="nav-link" onClick={onNavigation}>WEDDING</a>
        </li>
        <li className='nav-item'>
          <a href="/gallery" className="nav-link" onClick={onNavigation}>GALLERY</a>
        </li>
        {loggedIn ?         <li className='nav-item'>
          <a href="/login" className="nav-link" onClick={onNavigation}>LIST</a>
        </li> : ""
        }
        <li className='nav-item'>
          <a href="/login" className="nav-link" onClick={onNavigation}>{!loggedIn ? 'LOGIN' : 'LOGOUT'}</a>
        </li>
        <li className='nav-item'>
          <a href="/rsvp" className="btn" onClick={onNavigation}>RSVP</a>
        </li>
      </ul>
    </nav>
  );
}
