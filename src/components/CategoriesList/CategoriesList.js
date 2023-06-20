import React from 'react'
import styles from './CategoriesList.module.css'
import CategoryItem from '../CategoryItem/CategoryItem'
import Button from '../UI/Button/Button'
import { NavLink } from 'react-router-dom'

function CategoriesList({categories, title, show_btn }) {

    console.log(categories);
    return (
        
        <div id='catalog' className={styles.catalog_section} > 
            <div className={styles.catalog_wrapper}> 
                <h2 className={styles.catalog_title}>{title}</h2>
                    {show_btn && <NavLink to='/categories'>
                    <Button text={'All categories'} style={'catalog_btn'}/>
                    </NavLink>}
                </div>
                <div className={styles.categories_list}>
                {
                    categories.map ((elem, index) => 
                                        <NavLink to={`/categories/${elem.id}`} key={index} ><CategoryItem  {...elem} /></NavLink>
                                        
                                    )
                }
                </div> 
        </div>
        
    )
}

export default CategoriesList