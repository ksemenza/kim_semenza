import React from 'react'
import {NavLink} from 'react-router-dom'
import '../assests/css/Header.css'
import LinkedInLogo from '../assests/img/linkedin.png'
import GithubLogo from '../assests/img/github.png'
import EmailLogo from '../assests/img/send-email.png'
import KsLogo from '../assests/img/ksLogo.png'



const Header = () => {

    return (
        <div  className="header-container">
      
            <div className="nav-menu-header-container">
            <img className='ks-logo' src={KsLogo}/>

                <div className="nav-link-menu-wrap">
                 <NavLink  className='nav-link' exact activeClassName='link-active' to='/'>Home</NavLink>  
                 <NavLink className='nav-link' exact activeClassName='link-active' to='/about'>About</NavLink>  
                 <NavLink className='nav-link' exact activeClassName='link-active' to='/projects'>Projects</NavLink>  
                 <NavLink className='nav-link' exact to='/contact' activeClassName='link-active'> Contact </NavLink>
                

                </div>
     
                <div className='header-logo-wrap'>

                 <img className='linkedIn logo' src={LinkedInLogo} />
                <img className='github logo' src={GithubLogo} />
                <img className='email logo' src={EmailLogo} />

           </div>
                </div>
        </div>
    )
}

export default Header