import React from "react";
import {Link} from "react-router-dom";
import "./navBar.css";

const NavBar = (props) => {
    return (
        <nav>
            <div className='pageTitle'>Pet Clothing Store</div>
            <ul className='nav'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/contactUs'><li>Contact</li></Link>
                <button className='cart' onClick={() => {
                    let temp = document.querySelector('.cartScreen');
                    let temp2 = document.querySelector('.cartBackground');
                    temp.classList.remove('cartScreenClosed');
                    temp2.classList.remove('cartBackgroundClosed');
                    temp2.classList.add('cartOpenBackground');
                    temp.classList.add('cartOpen');
                }}>
                    <svg className='cartButton' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z" />
                    </svg>
                    <div className='numberCartItems'>{props.number()}</div>
                </button>
            </ul>
        </nav>
    )
}

export default NavBar;