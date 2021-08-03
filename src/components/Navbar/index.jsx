import React from 'react';
import { Nav, Bars, NavMenu, NavBtn, MenuItem } from './NavbarElements';
import circle from '../../assets/img/redcircle.png';
import Searchbar from '../Searchbar/Searchbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <img src={circle} alt="wizeline_img" />
        <Bars />
        <Searchbar />
        <NavMenu>
          {/* <NavLink  to="/" >
                        Home
                        </NavLink> */}
          <MenuItem>Home</MenuItem>
        </NavMenu>
        <NavBtn>
          <MenuItem>User</MenuItem>
          {/* <NavBtnLink to="">User</NavBtnLink> */}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
