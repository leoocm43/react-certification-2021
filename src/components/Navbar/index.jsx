import React from 'react';
import { Nav, Bars, NavMenu, NavBtn, NavLink, NavBtnLink } from './NavbarElements';
import circle from '../../assets/img/redcircle.png';
//import Searchbar from '../Searchbar/Searchbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <img src={circle} alt="wizeline_img" />
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="">User</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
