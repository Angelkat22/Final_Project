import React from 'react'
import styles from './CategoryItem.module.css'

function CategoryItem({title, image}) {

    const base_url = 'http://localhost:3333'

    return (
        <div className={styles.category_item}>
            <img src={`${base_url}${image}`} alt={title} className={styles.category_image} />
            <h3 className={styles.category_title}>{title}</h3>
            </div>
    
    )
}

export default CategoryItem

