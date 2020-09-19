import React from 'react';
import {Navbar,Nav,NavLink, NavItem, NavbarBrand} from 'reactstrap';
import {Link} from "react-router-dom";

import '../css/navbar.css';

/* Need to create a title bar*/
/* Home and Possibly a profile page listing out the current score board*/

const NavBar = ()=>(
    <div>        
        <Navbar className='navBar' >
            <NavbarBrand className='brandTag navBarHover'>Quizz em all</NavbarBrand>
            <div className='navigationTitles'>
                <Link className='navBarHover' to ="/Home">Home</Link>
                <Link to className='navBarHover' to ="/Profile">Profile</Link>
            </div>
        </Navbar>       
    </div>
);

export default NavBar;