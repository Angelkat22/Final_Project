import React from 'react'
import styles from './Offer.module.css'
import OfferForm from '../OfferForm/OfferForm'

function Offer() {
    return (
        <div className={styles.offer_section}> 
            <div className={styles.offer_wrapper}>
                <div className={styles.offer_image}>
                    <img src='/images/gnom.png'></img>
                </div>
                <div className={styles.offer_conditions}>
                <OfferForm />  
                </div>
            </div>
        </div>
    )
}

export default Offer