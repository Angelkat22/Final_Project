import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Order.module.css'
import { clearCartAction } from '../../store/reducers/cartReducer'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import { sent_order } from '../../AsyncActions/requests'
import { useForm } from 'react-hook-form'
import ModalWindow from '../ModalWindow/ModalWindow'


function OrderModal() {

    const cart = useSelector(store => store.cart)
    const total_order = +cart.reduce((accum, elem) => accum + elem.count * (elem.discont_price ? elem.discont_price : elem.price), 0).toFixed(2)

    const {
		register,
		handleSubmit,
		formState: { errors },
        reset
	} = useForm({mode: 'all'})


    const phoneInp = register('phone', {
		required: 'Field is required',
		pattern: {
			value: /[+]{1}[0-9]{11}/,
			message: 'invalid phone format',
		}
	})

    const [modalActive, setModalActive] = useState(false)

    const onSubmit = (data) => {
        console.log(data);
        sent_order()
        setModalActive(true)
        document.body.style.overflow = 'hidden';
        reset()
	}

    return (
        <div className={styles.order_wrapper}>
            <h2 className={styles.order_title}>Order details</h2>
        <div className={styles.order_total}>
            <p className={styles.order_text}>Total</p>
            <p className={styles.order_total_sum}>{total_order}<span> $</span></p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {
                    errors.phone && <p className={`${styles.warning_text} ${errors.phone && styles.active}`}>{errors.phone.message}</p>

                }
            </div>
            <Input  style={'order_input'} 
                    type={'phone'} 
                    placeholder={'Phone number'}
                    pattern={'[+]{1}[0-9]{11}'}
                    name={'phone'} 
                    phoneInp={phoneInp}
            />
            <Button text={'Order'} 
                    style={'order_btn'}
                    
            />
        </form>
        <ModalWindow    modalActive={modalActive}
                        setModalActive={setModalActive}
                        cong_text={'Thank you for your purchase!'}
                        follow_text={'We will be glad to see you again in our store.'}
        />

        </div>
    )
}

export default OrderModal