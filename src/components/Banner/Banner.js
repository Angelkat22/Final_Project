import React from 'react'
import styles from './Banner.module.css'
import Button from '../UI/Button/Button'

function Banner({scrollToSaleList}) {
    return (
        <div className={styles.banner_section}>
            <div className={styles.banner_wrapper}>
                <div className={styles.banner_title}>
                    <p className={styles.title_main}>Sale</p>
                    <p className={styles.title_sub}>New season</p>
                    <Button text ={'Sale'} style={'sale_btn'} onClick={scrollToSaleList}/>
                </div>
                <div className={styles.banner_image}>
                    <img src='/images/sale_img1.png' alt='garden'></img>
                </div>
            </div>
            
        </div>
            

)
}

export default Banner