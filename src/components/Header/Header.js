import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import Button from '../UI/Button/Button'
import {SlHandbag} from 'react-icons/sl'
import CounterCart from '../CounterCart/CounterCart'
import { useState } from 'react'

import { useEffect } from 'react'

import Mobile from '../MobileMenu/MobileMenu'
import MobileIcon from '../MobileIcon/MobileIcon'


function Header({activeMenu, setActiveMenu}) {


    return (
            <div className={styles.header_wrapper}>
                <div className={styles.header_logo}>
                    <img src='/images/logo.png' alt='logo'></img>
                    <NavLink to='/categories'>
                        <Button text ={'Catalog'} style={'header_btn'}/>
                    </NavLink>
                </div>
                <div className={styles.nav_menu}> 
                    <NavLink to='/'>Main Page</NavLink>
                    <NavLink to='/products'>All Products</NavLink>
                    <NavLink to='/sales'>All sales</NavLink>
                </div>
                <div className={styles.nav_cart}>
                    <NavLink to='/cart'><SlHandbag className={styles.cart_icon} /></NavLink>
                    <CounterCart />
                </div>
                <MobileIcon activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                {/* <Mobile activeMenu={activeMenu} setActiveMenu={setActiveMenu} />  */}
                </div>
            
    
    )
}

export default Header

