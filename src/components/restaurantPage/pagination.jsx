import React from 'react'
import styles from './restaurant.module.css'
function Pagination({ cardsPerPage, totalCards, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }
    // console.log(pageNumbers);
    return (
        <nav>
            <ul className={styles['pagination']}>
                {pageNumbers.map(number => (
                    <li key={number} className={styles['page-item']}>
                        <a onClick={() => paginate(number)} href="#restaurant" className={styles['page-link']}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;