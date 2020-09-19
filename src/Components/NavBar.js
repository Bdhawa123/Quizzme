import React from 'react';
import {Navbar,Nav,NavLink, NavItem, NavbarBrand} from 'reactstrap';
import {Link} from "react-router-dom";
import Home from './Home';

/* Need to create a title bar*/
/* Home and Possibly a profile page listing out the current score board*/

const NavBar = ()=>(
    <div>        
        <Navbar color='light'>
            <NavbarBrand>Quizz em all</NavbarBrand>
            
            <Link to ="/Home">Home</Link>
            <Link to ="/Profile">Profile</Link>
        </Navbar>       
    </div>
);

export default NavBar;