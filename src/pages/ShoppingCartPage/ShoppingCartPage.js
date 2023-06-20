import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './ShoppingCartPage.module.css'
import CartList from '../../components/CartList/CartList'
import Order from '../../components/Order/Order'
import { SlArrowRight } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'
import OrderModal from '../../components/Order/OrderModal'


function ShoppingCartPage() {

  let cart = useSelector(store =>store.cart)

  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className={styles.cart_list_section}>
      <h2 className={styles.cart_list_title}>Shopping cart</h2>
      <NavLink to='/products'>
          <div className={styles.backto_container}>
            <p className={styles.backto_text}>Back to the store</p>
            <SlArrowRight className={styles.backto_icon} />
          </div>
        </NavLink>
      <div className={styles.cart_list_wrapper}>
        {
          cart.length !== 0 ? <CartList /> : <p className={styles.warn_info}>Your cart is empty!</p>
        }
        {
          cart.length !== 0 ? <OrderModal /> : ''
        } 
      </div> 

  </div>
  )
}

export default ShoppingCartPage