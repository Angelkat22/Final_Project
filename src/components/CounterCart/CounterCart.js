import React from 'react'
import { useSelector } from 'react-redux'
import styles from './CounterCart.module.css'

function CounterCart() {

    const cart = useSelector(store => store.cart)

    const total = cart.reduce((accum, elem) => accum + elem.count, 0)

    return (
        <div className={styles.counter_cart}>
            <p>{total}</p>
        </div>
    )
}

export default CounterCart