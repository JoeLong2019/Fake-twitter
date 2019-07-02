import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom'

function Nav(){

    const navStyle = {
        color: 'white'
    };

  return(
    <nav>
        <h3>Chirper</h3>
        <ul className="nav-links">
        <Link style={navStyle} to="/Feed">
            <li>Feed</li>
        </Link>
        <Link to="/Login" style={navStyle}>
            <li >Login</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;