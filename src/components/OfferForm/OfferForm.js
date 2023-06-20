import React, { useState } from 'react'
import styles from './OfferForm.module.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import { sent_discount_request } from '../../AsyncActions/requests'
import { useForm } from 'react-hook-form'
import ModalWindow from '../ModalWindow/ModalWindow'



function OfferForm() {

    const {
		register,
		handleSubmit,
		formState: { errors },
        reset
	} = useForm({mode: 'all'})

    //Требования к функции
    const phoneInp = register('phone', {
		required: 'Field is required',
		pattern: {
			value: /[+]{1}[0-9]{11}/,
			message: 'invalid phone format',
		}
	})

    const onSubmit = (data) => {
        console.log(data);
        sent_discount_request()
        setModalActive(true)
        document.body.style.overflow = 'hidden';
        reset()
	}
    // const activeWarning = errors.phone && 'active'
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className={styles.offer_form_wrapper}>
            <p className={styles.offer_form_wrapper_title}>5% off </p>
            <p className={styles.offer_form_wrapper_conditions}>on the first order</p>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div>
                    {
                        errors.phone && <p className={`${styles.warning_text} ${errors.phone && styles.active}`}>{errors.phone.message}</p>

                    }
                </div>
            
                <Input style={'discount_input'} 
                        type={'phone'} 
                        placeholder={'+49'} 
                        name={'phone'} 
                        phoneInp={phoneInp}
                />
                <Button style ={'discount_btn'} 
                        text ={'Get a discount'} />
            
            </form>

            <ModalWindow    modalActive={modalActive}
                            setModalActive={setModalActive}
                            cong_text={'Your phone number is registered!'}
                            follow_text={'Your discount will be applied to your first order.'}
            />
        </div>
        
    )
}

export default OfferForm