import { Heading } from './Heading';
import { Navbar } from "./Navbar";

export function Header({onNavigation, openMenu, onOpen, loggedIn}) {

  return (<header className="header">
    <Heading />
    <Navbar onNavigation={onNavigation} openMenu={openMenu} onOpen={onOpen} loggedIn={loggedIn}/>
  </header>
  );
}
