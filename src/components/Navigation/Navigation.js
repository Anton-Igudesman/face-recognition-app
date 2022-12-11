import React from 'react';
import './Navigation.css'
import Logo from '../Logo/Logo.js'

export default function Navigation(props) {
    if (props.isSignedIn) {
      return (
        <nav className='navbar shadow-5'>
            <p 
            onClick = {() => props.handleRouteChange('signin')}
            className='navelement f3 link shadow-5 black pa3 pointer'
            >
                Sign Out
            </p>
        </nav>
    )  
    } else {
        return (
            <nav className='navbar shadow-5'>
                <Logo />
            </nav>
        )
    }
}