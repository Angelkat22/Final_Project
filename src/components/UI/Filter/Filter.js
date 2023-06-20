import React from 'react'
import Input from '../Input/Input'
import styles from './Filter.module.css'
import { useDispatch } from 'react-redux'
import { filterProductsByPriceAction, filterProductsBySaleAction, sortProductsByDefaultAction, sortProductsByPriceAscendAction, sortProductsByPriceDescAction, sortProductsByTitleAAction, sortProductsByTitleZAction } from '../../../store/reducers/productsListReducer'
import { useState } from 'react'




// function Filter({show_sort_by_discont, without_discount, point }) {
  function Filter({ type, style, ...otherProps }) {
  const dispatch = useDispatch()

  const handleDiscount = (e) => {
		dispatch(filterProductsBySaleAction(e.target.checked));
	}

  const handleSort =(e) =>{
    //console.log((e.target.value));
      e.preventDefault()
      switch (e.target.value) {
          case 'default':
              dispatch(sortProductsByDefaultAction())
              break
          case 'titleA':
              dispatch(sortProductsByTitleAAction())
              break
          case 'titleZ':
                dispatch(sortProductsByTitleZAction())
                break
          case 'priceDesc':
              dispatch(sortProductsByPriceDescAction())   
              break
          case 'priceAscend':
              dispatch(sortProductsByPriceAscendAction())   
                  break
          default:
              break;
      }
}

const [fromValue, setFromValue] = useState('')
const [toValue, setToValue] = useState('')

  const handlePrice = (e) => {
    const interval = {
      from: fromValue,
      to: toValue
    }
    if(e.target.name=== 'min'){
      interval.from = e.target.value
      setFromValue(e.target.value)
    } else {
      interval.to = e.target.value
      setToValue(e.target.value)
    }
    dispatch (filterProductsByPriceAction(interval))
  } 

  return (
    <div className={styles.filter} >
      
      <div className={styles.filter_price}>
        
            <label className={styles.search_form}>Price </label>
            <Input type={'text'} placeholder={'from'} name={'min'} min={'0'}  value={fromValue} style={'price_search_form'} onChange={handlePrice}/>
            <Input type={'text'} placeholder={'to'}  name={'max'} min={'0'} value={toValue} style={'price_search_form'} onChange={handlePrice}/>
  
      </div>

        {
          type !=='sale' && <div className={styles.filter_checkbox} >
        <label className={styles.filter_checkbox_wrapper} >Discounted items
          <Input   type={'checkbox'} 
                    id={'checkbox'} 
                    name={'checkbox'} 
                    onClick={handleDiscount}/>
                    <span className={styles.checkmark}></span>
        </label>
    </div>
      } 
{/* 
      <div className={`${styles.filter_sort} ${styles[style]}`}> */}
      <div className={styles.filter_sort}> 
        <label>Sorted</label>
          <select className={styles.sort_wrapper} onInput={handleSort} >
            <option value='default'>by default</option>
            <option value='titleA'>by title from A-Z</option>
            <option value='titleZ'>by title from Z-A</option>
            <option value='priceDesc'>by price descending</option>
            <option value='priceAscend'>by price ascending</option>
          </select>
        </div>
          
      </div>
    
  )
}

export default Filter