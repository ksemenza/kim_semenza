import React from 'react'
import {NavLink} from 'react-router-dom'
import '../assests/css/Header.css'


const Header = () => {

    return (
        <div  className="header-container">
            <h1 className="page-title">Kim Semenza </h1>
            <div className="nav-menu-header-container">
                <div className="nav-link-menu-wrap">
                 <NavLink  className='nav-link' exact activeClassName='link-active' to='/'>Home</NavLink>  
                 <NavLink className='nav-link' exact activeClassName='link-active' to='/about'>About</NavLink>  
                 <NavLink className='nav-link' exact activeClassName='link-active' to='/projects'>Projects</NavLink>  
                 <NavLink className='nav-link' exact activeClassName='link-active' to='/resume' >Resume</NavLink>
                 <NavLink className='nav-link' exact to='/contact' activeClassName='link-active'> Contact </NavLink> 
                </div>
                </div>
        </div>
    )
}

export default Header