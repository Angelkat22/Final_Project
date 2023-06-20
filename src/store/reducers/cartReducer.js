// Переменная storage ссылается на localStorage и вытягивает оттуда данные
// массив, который хранится в localStorage будет называться cart  
const storage = JSON.parse(localStorage.getItem('cart'))

//если storage существует, то записываем в него storage, если нет, то пустой массив
const defaultState = storage ? storage : []

const ADD_TO_CART = 'ADD_TO_CART'
const INCR_COUNT = 'INCR_COUNT'
const DECR_COUNT = 'DECR_COUNT'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'


const checkProduct = (state, payload) => {
        const productInState = state.find(el => el.id === payload.id)
        if(productInState) {
        productInState.count++
        return [...state]
        } else {
        return [...state, {...payload, count: 1}]
        }
    }

const updateLocalStorage = (copyState) => localStorage.setItem('cart', JSON.stringify(copyState))

export const cartReducer = (state = defaultState, action) =>{
    switch (action.type) {

        case ADD_TO_CART:
            const copyState = checkProduct(state, action.payload)
            updateLocalStorage(copyState)
            return copyState

        case INCR_COUNT:
            state.find(elem => elem.id === action.payload).count++;
            updateLocalStorage([...state])
            return [...state]

        case DECR_COUNT:
            const item = state.find(elem => elem.id === action.payload)
                if (item.count === 1) {
                    state = state.filter(elem => elem.id !== action.payload)
                    } else {
                        item.count--
                    }
                    updateLocalStorage([...state])
                    return [...state]

        case REMOVE_FROM_CART:
            const tempState = state.filter(elem => elem.id !== action.payload)
            updateLocalStorage(tempState)
            return tempState

        case CLEAR_CART:
            updateLocalStorage([])
            return []
    
        default:
            return state
    }
}

export const addToCartAction = (payload) =>({ type:ADD_TO_CART, payload})
export const incrCountAction = (payload) => ({ type: INCR_COUNT, payload })
export const decrCountAction = (payload) => ({ type: DECR_COUNT, payload })
export const removeFromCartAction = (payload) => ({ type: REMOVE_FROM_CART, payload })
export const clearCartAction = (payload) => ({ type: CLEAR_CART, payload })