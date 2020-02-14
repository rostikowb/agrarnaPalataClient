import React from 'react';
import Nav from './nav/nav'
import Logo from './logo/logo'
import './header.css';
export default function Header() {
    return (
        <header>
            <div className="wrapper">
                <Logo/>
                <Nav/>
            </div>
        </header>
    )
}