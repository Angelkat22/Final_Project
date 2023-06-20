const defaultState = {
    titlePage:{},
    productsList: []
}

const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY'
const GET_PRODUCTS_BY_SALE = 'GET_PRODUCTS_BY_SALE';

const FILTER_PRODUCTS_BY_PRICE = 'FILTER_PRODUCTS_BY_PRICE';
const FILTER_PRODUCTS_BY_SALE = 'FILTER_PRODUCTS_BY_SALE'

const SORT_PRODUCTS_BY_DEFAULT = 'SORT_PRODUCTS_BY_DEFAULT'
const SORT_PRODUCTS_BY_TITLEA = 'SORT_PRODUCTS_BY_TITLEA'
const SORT_PRODUCTS_BY_TITLEZ = 'SORT_PRODUCTS_BY_TITLEZ'
const SORT_PRODUCTS_BY_PRICE_DESC = 'SORT_PRODUCTS_BY_PRICE_DESC'
const SORT_PRODUCTS_BY_PRICE_ASCEND = 'SORT_PRODUCTS_BY_PRICE_ASCEND'


export const productsListReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case GET_PRODUCTS_BY_CATEGORY:
            if (action.payload.category.title) {
                return {
                    titlePage: action.payload.category,
                    productsList: action.payload.data.map(elem => ({...elem, showBySale: true, showByInterval: true}))
                }
            } else {
                return {
                    titlePage: { title: 'All products' },
                    productsList: action.payload.data.map(elem => ({ ...elem, showBySale: true, showByInterval: true }))
                }
            }
        case GET_PRODUCTS_BY_SALE:
            return {
                titlePage: {title: 'Products with sale'},
                productsList: state.productsList.filter(elem => elem.discont_price).map(elem => ({ ...elem, showBySale: true, showByInterval: true}))
            }    
            
        case FILTER_PRODUCTS_BY_PRICE:
                console.log(action.payload)
                if (action.payload.to ===''){
                    action.payload.to = Infinity
                } if (action.payload.from ===''){
                    action.payload.from = 0
                }
                return {
                    ...state,
                    productsList: [...state.productsList].map(
                        elem =>({ ...elem, showByInterval: 
                            elem.price >= action.payload.from && 
                            elem.price <= action.payload.to
                        })
                    )
                }


        case FILTER_PRODUCTS_BY_SALE:
            return {
                ...state,
                productsList: state.productsList.map(elem => {
                    if (elem.discont_price===null) {
                        elem.showBySale = !action.payload
                    }
                    return elem
                })
            }
        case SORT_PRODUCTS_BY_DEFAULT:
            return { ...state, productsList: [...state.productsList].sort((a, b) => a.id - b.id) }
        case SORT_PRODUCTS_BY_TITLEA:
            return { ...state, productsList: [...state.productsList].sort((a, b) => a.title.localeCompare(b.title)) }
        case SORT_PRODUCTS_BY_TITLEZ:
                return { ...state, productsList: [...state.productsList].sort((a, b) => b.title.localeCompare(a.title)) }

        case SORT_PRODUCTS_BY_PRICE_DESC:
            return { ...state, productsList: [...state.productsList].sort((a, b) => (b.discont_price ? b.discont_price : b.price) - (a.discont_price ? a.discont_price : a.price)) }

        case SORT_PRODUCTS_BY_PRICE_ASCEND:
            return { ...state, productsList: [...state.productsList].sort((a, b) => (a.discont_price ? a.discont_price : a.price) - (b.discont_price ? b.discont_price : b.price)) }
            
            default:
                return state
    }

}

export const getProductsByCategoryAction = (payload) =>({type:GET_PRODUCTS_BY_CATEGORY, payload})
export const getProductsBySaleAction = (payload) =>({type:GET_PRODUCTS_BY_SALE, payload})

export const filterProductsByPriceAction = (payload) => ({type: FILTER_PRODUCTS_BY_PRICE, payload})
export const filterProductsBySaleAction = (payload) => ({type: FILTER_PRODUCTS_BY_SALE, payload})

export const sortProductsByDefaultAction = () => ({ type: SORT_PRODUCTS_BY_DEFAULT })

export const sortProductsByTitleAAction = () => ({ type: SORT_PRODUCTS_BY_TITLEA })
export const sortProductsByTitleZAction = () => ({ type: SORT_PRODUCTS_BY_TITLEZ })

export const sortProductsByPriceDescAction = () => ({ type: SORT_PRODUCTS_BY_PRICE_DESC  })
export const sortProductsByPriceAscendAction = () => ({ type: SORT_PRODUCTS_BY_PRICE_ASCEND })
