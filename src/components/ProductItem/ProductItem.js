import React, { useEffect, useState } from 'react'
import styles from './ProductItem.module.css'
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { addToCartAction } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';

function ProductItem({ product }) {
    const dispatch = useDispatch()

    const { id, image, price, title, discont_price } = product
    const base_url = "http://localhost:3333"
    const discount_value =  Math.floor(100 - discont_price * 100 / price)

//   console.log(product);

    const handleAddToCart = (e) => {     
        e.preventDefault()
        dispatch(addToCartAction(product));
}

    return (
        <NavLink to={`/products/${id}`}> 
            <div className={styles.product_item}>
                <div className={styles.product_image_wrapper}>
                    <img className={styles.product_image} src={`${base_url}${image} `} alt={title}/>
                        <Button text={'Add to cart'} style={'to_cart_btn'} onClick={handleAddToCart} /> 
                </div>
                <div className={styles.product_price_list}>
                    <p className={styles.discount_price} >{discont_price !== null ? discont_price : price}$</p>
                    
                    {
                        discont_price && <p className={styles.price}>{price}$</p>
                    }
                    {
                        discont_price && <p className={styles.discount_value}>-{discount_value}%</p>
                    } 
                </div>
                <p className={styles.product_title}>{title}</p>
            </div>
        </NavLink>


  );
};

export default ProductItem;


{/* <NavLink to={`/products/${id}`}>
<div className={styles.product_item}>
  <div className={styles.product_image_wrapper}>
    <img className={styles.product_image} src={`${baseUrl}${image}`} alt={title} />
    <Button text="Add to Cart" onClick={handleAddToCart} />
  </div>
  <div className={styles.product_price_list}>
    {discont_price && (
      <>
        <p className={styles.discount_price}>{discont_price}$</p>
        <p className={styles.price}>{price}$</p>
        <p className={styles.discount_value}>-{discount_value}%</p>
      </>
    )}
    {!discont_price && <p className={styles.price}>{price}$</p>}
  </div>
  <p className={styles.product_title}>{title}</p>
</div>
</NavLink> */}

