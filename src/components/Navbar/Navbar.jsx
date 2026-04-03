import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { useState } from 'react';

const Menu = () => (
  <>
  <p><a href='#header'>Home</a></p>
  <p><a href='#whatgpt'>What is GPT</a></p>
  <p><a href='#possibility'>Open AI</a></p>
  <p><a href='#attributes'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar_links'>
        <div className='navbar_logo'>
          <img src={logo} alt='Logo' />
        </div>
        <div className='navbar_links_container'>
          <Menu />
        </div>
      </div>
      <div className='navbar_sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='navbar_menu'>
        {toggleMenu ? <RiCloseLine color="#fff" onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="#fff" onClick={() => setToggleMenu(true)} />}
        {toggleMenu && 
          <div className='navbar_menu_container scale-up-center'>
            <div className='navbar_menu_links'>
              <Menu />
              <div className='navbar_menu_sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
