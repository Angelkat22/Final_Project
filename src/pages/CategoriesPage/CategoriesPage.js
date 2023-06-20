import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import styles from './CategoriesPage.module.css'
import { fetchCategoriesList } from '../../AsyncActions/requests'


function CategoriesPage() {
    const dispatch = useDispatch()
    const categories = useSelector(store => store.categories)
    
    useEffect(() => { 
        window.scrollTo(0, 0)
        dispatch(fetchCategoriesList())
    }, []);
    
        //console.log(categories)
    return (
        <div>
            <CategoriesList categories={categories} title={'Categories'} show_btn={false} />
        
        </div>
    )
}

export default CategoriesPage

