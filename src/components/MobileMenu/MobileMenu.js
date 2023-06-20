import React from 'react'
import styles from './MobileMenu.module.css'
import { NavLink } from 'react-router-dom'

function MobileMenu({activeMenu, setActiveMenu}) {
  return (
    <div className={activeMenu ? styles.active_mobile_menu : styles.mobile_menu}>
      <ul className={styles.mobile_menu_list}>
        <NavLink to='/'><li onClick={() => setActiveMenu(!activeMenu)}>MainPage</li></NavLink>
        <NavLink to='/products'><li onClick={() => setActiveMenu(!activeMenu)}>All products</li></NavLink>
        <NavLink to='/sales'><li onClick={() => setActiveMenu(!activeMenu)}>All sales</li></NavLink>
      </ul>
    </div>  
  )
}

export default MobileMenu
