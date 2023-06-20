import React, { useEffect } from 'react'
import styles from './CategoryItemPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import ProductsList from '../../components/ProductsList/ProductsList'
import { fetchProductsByCategory } from '../../AsyncActions/requests'
import { useParams } from 'react-router-dom'

function CategoryItemPage() {
    
    const { id } = useParams()
    const dispatch = useDispatch()

    const base_url = 'http://localhost:3333';
    const products_category_url = base_url + '/categories/'

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchProductsByCategory(id))
        
    }, [])

    const products_category = useSelector(store => store.products_category)
    console.log(products_category);
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     fetch (`${products_category_url}${id}`)
    //             .then (res => res.json())
    //             .then (data => dispatch(getProductsCategoryAction(data)))
                    
    // }, [])

        const products = products_category.data ? products_category.data : []
        const title = products_category.data ? products_category.category.title : ''

        //console.log(products)
    
    return (
            
        <div className={styles.products_list}>
            <ProductsList   products={products} 
                            title={title}  
                            style={'all_products_page'} 
                            show_filter={true} 
                            show_sort_by_discont={true}
                            point={'category_item_page'}
                        
            />
        </div>
        
    )
}

export default CategoryItemPage