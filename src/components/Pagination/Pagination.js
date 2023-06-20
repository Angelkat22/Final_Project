import React from 'react'
import styles from './Pagination.module.css'

export default function Pagination({ setCurrentPage, countElem, currentPage }) {

    const numberPage = [];
    for (let i = 1; i < countElem + 1; i++) {
        numberPage.push(i);
    }

    return (
        <div className={styles.pagination}>
        {
            numberPage.map(elem =>
                <div key={elem} className={elem === currentPage ? styles.active_page_number : styles.page_number} onClick={() => setCurrentPage(elem)}>
                    {elem}
                </div>
        )}
        </div>
    )
}