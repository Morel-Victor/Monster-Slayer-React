import React, { Component } from 'react'
import { menuItems } from './MenuItems'
import './NavBar.css';

class NavBar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="navBarItems">
                <h1 className="navBarTitle">
                    <img className="hydreLeft" src='../../Assets/Hydre2.png' alt=""/>
                    <p>Monster Slayer</p>
                    <img className="hydreRight" src='../../Assets/Hydre.png' alt=""/>
                </h1>
                <div className="menuIcon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'navLinks active' : 'navLinks'}>
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