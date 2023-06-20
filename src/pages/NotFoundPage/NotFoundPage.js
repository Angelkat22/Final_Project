import { useEffect } from 'react';
import styles from './NotFoundPage.module.css'

function NotFoundPage(){

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return(
        <div className={styles.not_found_section}>
                <img  src='./Images/NoN.png' alt='not_found_page_image' />
            </div>
    )
}

export default NotFoundPage