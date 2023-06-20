import React from 'react'
import styles from './Input.module.css'

    
function Input({placeholder, type, name, style,  pattern, phoneInp, ...otherProps}) {
    return (
    
            // { <input  className={`${styles[discount_input]} ${styles[price_search_form]} ${styles[order_input]}`}  type={type} placeholder={placeholder} name={name}/> 

            //  pattern - это образец, по которому должен быть введен телефон }

            <input  className={`${styles.input} ${styles[style]}`} type={type} placeholder={placeholder} name={name}  pattern={pattern} {...phoneInp} {...otherProps}/>
    
    )
}

export default Input