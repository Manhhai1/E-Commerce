import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu, setMenu] = useState('')
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu('shop') }}><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Shop</Link> {menu === 'shop' ? <hr></hr> : <></>}</li>
                <li onClick={() => { setMenu('men') }}><Link to='/men' style={{ textDecoration: 'none', color: 'black' }}>Men</Link>{menu === 'men' ? <hr></hr> : <></>}</li>
                <li onClick={() => { setMenu('women') }}><Link to='/women' style={{ textDecoration: 'none', color: 'black' }}>Women</Link>{menu === 'women' ? <hr></hr> : <></>}</li>
                <li onClick={() => { setMenu('kids') }}><Link to='kids' style={{ textDecoration: 'none', color: 'black' }}>Kids</Link>{menu === 'kids' ? <hr></hr> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button><Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Login</Link></button>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
