import React, { useState }  from "react";
import logo from '../mobile/logo.svg';
// import Navbar from './components/navbar.js'
import { Link } from "react-router-dom";



export function Header () {

  const [navOpen, setNavOpen] = useState(false);

  function handleNavbar() {
    setNavOpen(prev => !prev);
  }
  function closeNav() {
    setNavOpen(false);
  }

  const nvClassName = !navOpen ? 'nav__bar' : 'nav__bar__open'

  return (
    <React.Fragment>
    <nav className={nvClassName}>
          <ul className="nav__links">
            <li>
              <Link onClick={closeNav} to="/maritalStatus">maritalStatus</Link>
            </li>
            <li>
              <Link onClick={closeNav} to="/contacts">contacts</Link>
            </li>
            <li>
              <Link onClick={closeNav} to="/name">name</Link>
            </li>
            <li>
              <Link onClick={closeNav} to="/incomeType">incomeType</Link>
            </li>
            <li>
              <Link onClick={closeNav} to="/salary">salary</Link>
            </li>
          </ul>
        </nav>
    <div className='header-top'>
        <button type="button" className='menu' onClick={handleNavbar} aria-label="Меню">
          <div className='menu-line'></div>
          <div className='menu-line'></div>
          <div className='menu-line'></div>
        </button>
        <a className='logoOne' href='https://cian.ru/'>
          <img src={logo} />
        </a>
      <button type="button" className='heart'>
      </button>
    </div>
    </React.Fragment>
  )
}
