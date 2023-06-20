import React, { useEffect } from 'react'
import styles from './MainPage.module.css'
import Button from '../../components/UI/Button/Button'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchAllProducts, fetchCategoriesList, fetchProductsList } from '../../AsyncActions/requests'
import { useRef } from 'react'
import Banner from '../../components/Banner/Banner'
import Offer from '../../components/Offer/Offer'

import SaleList from '../../components/SaleList/SaleList'


function MainPage() {

    const dispatch = useDispatch()

    const categories = useSelector(store => store.categories)
    const categories_part = categories.slice(0,4)

    let saleRef = useRef()

    function scrollToSaleList(){
        saleRef.current.scrollIntoView({behavior:'smooth'})
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchCategoriesList())
        dispatch(fetchAllProducts())
        
    }, [])

    return (
        <>
            <Banner scrollToSaleList={scrollToSaleList}/>
            <CategoriesList categories={categories_part} title={'Catalog'} show_btn={true} />   
            <Offer />  
            <SaleList ref={saleRef}/>      
    
        </>
    )
}

export default MainPage