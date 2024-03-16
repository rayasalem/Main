import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li className='middlePlace'><a href="#">Landing</a></li>
                <li className='endP'><button><a href="#">BuyNow</a></button></li>


            </ul>
        </nav>
    );
}

export default Navbar;
