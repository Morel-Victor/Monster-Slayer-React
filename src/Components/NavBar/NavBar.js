import React, { Component } from 'react'
import { menuItems } from './MenuItems'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <nav className="navBarItems">
                <h1 className="navBarLogo"><i className="fas fa-bars"></i>Monster Slayer</h1>
                <div className="menuIcon">
                    
                </div>
                <ul>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}> 
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar;