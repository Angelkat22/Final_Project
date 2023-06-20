import React from 'react'

import {AiOutlineCloseCircle} from 'react-icons/ai'
import styles from './ModalWindow.module.css'

function ModalWindow({modalActive, setModalActive, cong_text, follow_text}) {
  return (
    <div onClick={() => setModalActive(false)} className={`${styles.modal} ${modalActive && styles.active}`}>
      <div onClick={(e) => e.stopPropagation()} className={`${styles.modal_window} ${modalActive && styles.active}`}>
        <div className={styles.window}>
          <AiOutlineCloseCircle className={styles.close_btn} onClick={() => {
            setModalActive(false);
            document.body.style.overflow = '';
          }} />
          <p>{cong_text}</p>
          <p>{follow_text}</p>
        </div>

      </div>
    </div>

    
  )
}

export default ModalWindow