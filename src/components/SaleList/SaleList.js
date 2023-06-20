import React, { forwardRef, useEffect } from 'react'
import styles from './SaleList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import ProductsList from '../ProductsList/ProductsList';
import { fetchAllProducts } from '../../AsyncActions/requests';


const SaleList = forwardRef((props, ref) => {
    const dispatch = useDispatch()

    useEffect(() => 
        dispatch(fetchAllProducts('sale')), [dispatch])

    const products = useSelector(store => store.productsList.productsList)
    //console.log(products)

    //Метод sort мутирует массив - поэтому, изначально используем метод .slice () - получая копию массива, а затем уже делаем сортировку.
    const discount_products = products
                                    .filter(elem => elem.discont_price)
                                    .slice ()
                                    .sort(() => Math.random() - 0.5)
                                    .slice(0, 4)
    return (
        <div ref={ref} className={styles.sale_list_section}>
            <h2 className={styles.sale_list_title}>Sale</h2>
            <ProductsList products={discount_products}  style={'sale_list'} showPagination={'false'}/>
        </div>
    )
})

export default SaleList













