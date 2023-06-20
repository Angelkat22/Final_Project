import {applyMiddleware, combineReducers,createStore} from 'redux'
import thunk from 'redux-thunk'
import { productsListReducer, productsReducer } from './reducers/productsListReducer'
import { categoriesReducer } from './reducers/categoriesReducer'
import { cartReducer } from './reducers/cartReducer'


const rootReducer = combineReducers({
    
    categories: categoriesReducer,
    productsList: productsListReducer,
    cart: cartReducer,
    // products: productsReducer,
    // products_category: productsCategoryReducer,
    
})

export const store = createStore(rootReducer, applyMiddleware(thunk))