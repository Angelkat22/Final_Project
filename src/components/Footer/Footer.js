import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import Contacts from '../Contacts/Contacts'

function Footer() {
    return (
        <div className={styles.footer_section}>
            <Contacts />
            <div style={{width: '100%'}}><iframe title='googleMaps' src="https://maps.google.com/maps?width=100%25&amp;height=525&amp;hl=en&amp;q=Tel-Ran.de%20GmbH+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>

    
        </div>
        

    )
}

export default Footer
