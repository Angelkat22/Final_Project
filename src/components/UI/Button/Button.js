import React from 'react'
import styles from './Button.module.css'

function Button({ text, style, ...otherProps }) {
    return (
        <button className={`${styles[style]}`} {...otherProps}>{text}</button>
    )
}

export default Button