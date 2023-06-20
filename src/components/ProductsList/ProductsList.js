import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductsList.module.css'
import Pagination from '../Pagination/Pagination';

export default function ProductsList({ products, showPagination }) {

    console.log(products);

    const [currentPage, setCurrentPage] = useState(1)
    const [countProductItemsPage, setCountProductItemsPage] = useState(8)

    const lastElem = currentPage * countProductItemsPage
    const firstElem = lastElem - countProductItemsPage
    const productItemsPageList = products.slice(firstElem, lastElem)
    const countElem = Math.ceil(products.length / countProductItemsPage)

    useEffect(() => {
        if ( countElem < currentPage) {
            setCurrentPage(1)
        }
        window.scrollTo(0, 0)
    }, [products, currentPage])


    return (
        <div className={styles.products_list_section}>
            <div className={styles.products_list}>
                { 
                    products.length === 0 ? <p className={styles.warning_text}>Sorry, no products in this price interval</p> : 
                    productItemsPageList.map(elem => <ProductItem key={elem.id} product={elem}  />)
                }
            </div>
            {
                !showPagination && <Pagination setCurrentPage={setCurrentPage} countElem={countElem} currentPage={currentPage} />
            }
        </div>
    )
}