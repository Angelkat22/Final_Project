import { getCategoriesAction } from "../store/reducers/categoriesReducer";
import { getProductsByCategoryAction, getProductsBySaleAction } from "../store/reducers/productsListReducer";

const base_url = 'http://localhost:3333';

const sent_discount_url = base_url + '/sale/send'

export const fetchCategoriesList =()=>{
    return function (dispatch) {
        fetch (`${base_url}/categories/all`)
            .then (res => res.json())
            .then (data => dispatch(getCategoriesAction(data)))
    }
}
export const fetchProductsByCategory =(id)=>{
    return function (dispatch) {
        fetch (`${base_url}/categories/${id}`)
        .then (res => res.json())
        .then (data => dispatch(getProductsByCategoryAction(data)))
    }
}
export const fetchAllProducts =(type)=>{
    return function (dispatch) {
        fetch (`${base_url}/products/all`)
        .then (res => res.json())
        .then (data => {
            dispatch(getProductsByCategoryAction({category:{}, data }))
            if (type === 'sale') {
            dispatch(getProductsBySaleAction())
            }
        })
    }
}

export const sent_discount_request = (phone) =>{
    fetch(sent_discount_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(phone)
    })
        .then(res => res.json())
        .then(data => console.log('Request sent', data))
        .catch(error => console.error('Error: ', error))
}

export const sent_order = (phone) =>{
    fetch((`${base_url}/order/send`), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(phone)
    })
        .then(res => res.json())
        .then(data => console.log('Request sent', data))
        .catch(error => console.error('Error: ', error))
}
