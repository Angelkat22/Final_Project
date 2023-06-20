import React, { useEffect } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import styles from './ProductsPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts, fetchProductsByCategory } from '../../AsyncActions/requests'
import { useParams } from 'react-router-dom'
import { getProductsBySaleAction } from '../../store/reducers/productsListReducer'
import Filter from '../../components/UI/Filter/Filter'


function ProductsPage({ type, style }) {
    const dispatch = useDispatch()
    const { id } = useParams()

    const titlePage = useSelector(store => store.productsList.titlePage)
    const productsList = useSelector(store => store.productsList.productsList).filter(elem => elem.showBySale && elem.showByInterval)

    //console.log(productsList)
    useEffect(() => {
        window.scrollTo(0, 0);
        if (type === 'category') {
            dispatch(fetchProductsByCategory(id))
        } else {
            dispatch(fetchAllProducts(type))
            if (type === 'sale') {
            dispatch(getProductsBySaleAction())
            }
        }
        }, [id, type])

    return (
    
        <div className={styles.products_list}>
            <h2 className={styles.products_page_title}>{titlePage.title}</h2>
        
            <Filter type={type} style={style}/>
            <ProductsList   products={productsList} 
        
            />
        </div>
        

    )
}

export default ProductsPage

