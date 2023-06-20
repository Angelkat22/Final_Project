import React from 'react'
import { useDispatch } from 'react-redux';
import { decrCountAction, incrCountAction, removeFromCartAction } from '../../store/reducers/cartReducer';
import styles from './CartItem.module.css'
import { RxCross2 } from 'react-icons/rx'
import Button from '../UI/Button/Button';
// import {base_url} from '../../index'

function CartItem ({ id, title, image, count, discont_price, price }) {

    const base_url = 'http://localhost:3333'

    const dispatch = useDispatch();

    return (
        <div className={styles.cart_item_wrapper}>
            <img src={`${base_url}${image}`} alt={title} className={styles.cart_image} />
            <div className={styles.counter_wrapper}>
                <p className={styles.cart_item_title}>{title}</p>
                <div className={styles.counter_btn}>
                    <button onClick={() => dispatch(decrCountAction(id))}>-</button>
                    <p className={styles.cart_item_counter}>{count}</p>
                    <button onClick={() => dispatch(incrCountAction(id))}>+</button>
                </div>
            </div>
            <h2 className={styles.item_discount_price}>{discont_price ? discont_price : price}<span>$</span></h2>
                {
                    discont_price && <h3 className={styles.item_price}>{price}$</h3>
                }
                <RxCross2 className={styles.close_icon} onClick={() => dispatch(removeFromCartAction(id))} />
        </div>
    )
}

export default  CartItem