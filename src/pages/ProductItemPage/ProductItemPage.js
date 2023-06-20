import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from './ProductItemPage.module.css'
import Button from '../../components/UI/Button/Button'
import { addToCartAction } from '../../store/reducers/cartReducer'
// import ImageZoom from "react-image-zoom";




function ProductItemPage() {
  const { id } = useParams()
  const dispatch =  useDispatch()
  const base_url = "http://localhost:3333"

  const product_url = base_url + '/products/'

  const [product, setProduct] = useState([])

  useEffect (() => {
    window.scrollTo(0, 0)
    fetch (`${product_url}${id}`)
    .then (res => res.json())
    .then (data => setProduct(data))
  }, [id])

  //console.log(product)
  
  const productItem = product ? Object.assign({}, ...product) : {}

  const {title, image, discont_price, price, description} = productItem
  
  //console.log(productItem)

  const discount_value = Math.floor(100 - discont_price * 100 / price)

  return (
    <div className={styles.product_wrapper}>
      <h2 className={styles.product_title}>{title}</h2>
      <div className={styles.product_info}>
        <div className={styles.product_img}>
          <img  src={`${base_url}${image}`} alt={title} />
        </div>
        
        <div className={styles.product_info_details}>
          <div className={styles.price_wrapper}>
            <p className={styles.discount_price}>{discont_price !== null ? discont_price : price}<span>$</span></p>
            {
            discont_price && <p className={styles.product_price}>{price}$</p>
            }
            {
            discont_price && <p className={styles.discount_value}>-{discount_value}%</p>
            }
          </div>
      
            <Button text={'To cart'} style={'item_to_cart_btn'}  onClick = {() => dispatch(addToCartAction(product[0]))} />
            <h4 className={styles.product_info_description}>Description</h4>
          <p className={styles.info_text}>{description}</p>
        </div>
      </div>
    </div >
)
}

export default ProductItemPage