import React from 'react'
import styles from './MobileIcon.module.css'

function MobileIcon({activeMenu, setActiveMenu}) {
  
    return (
        <div className={activeMenu ? styles.active_mobile_menu : styles.mobile_menu}        onClick={() => setActiveMenu(!activeMenu)}>
        <span className={styles.mobile_line}></span>
        <span className={styles.mobile_line}></span>
        <span className={styles.mobile_line}></span>
        </div>

    )
    }

export default MobileIcon