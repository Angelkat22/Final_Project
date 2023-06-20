import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Order.module.css'
import { clearCartAction } from '../../store/reducers/cartReducer'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import { sent_order } from '../../AsyncActions/requests'

function Order() {
    
    const dispatch = useDispatch()
    const cart = useSelector(store => store.cart)
    const total_order = +cart.reduce((accum, elem) => accum + elem.count * (elem.discont_price ? elem.discont_price : elem.price), 0).toFixed(2)

    const submit = (e) => {
        e.preventDefault()
        sent_order(e.target.phone.value)
        e.target.reset()
        alert('Thank you for your purchase. We will be glad to see you again in our store.')
        dispatch(clearCartAction())
    }

    return (
        <div className={styles.order_wrapper}>
            <h2 className={styles.order_title}>Order details</h2>
        <div className={styles.order_total}>
            <p className={styles.order_text}>Total</p>
            <p className={styles.order_total_sum}>{total_order}<span> $</span></p>
        </div>
        <form onSubmit={submit}>
            <Input  style={'order_input'} 
                    type={'phone'} 
                    placeholder={'Phone number'}
                    pattern={'[+]{1}[0-9]{11}'}
                    name={'phone'} required 
            />
            <Button text={'Order'} 
                    style={'order_btn'}
            />
        </form>

        </div>
    )
}

export default Order