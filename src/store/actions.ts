import { Products,Reviews, ReduxAction, ActionNames } from './types';



const fetchProductsPending = (): ReduxAction<typeof ActionNames.FETCH_PRODUCTS_PENDING> => {
    return{
        type: ActionNames.FETCH_PRODUCTS_PENDING
    }
}

const fetchProductsSuccess = (products: Products): ReduxAction<typeof ActionNames.FETCH_PRODUCTS_SUCCESS, Products> => {
    return{
        type: ActionNames.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

const fetchProductsError = (error: string): ReduxAction<typeof ActionNames.FETCH_PRODUCTS_ERROR, string> => {
    return{
        type: ActionNames.FETCH_PRODUCTS_ERROR,
        payload: error
    }
}

const addProduct = (product: Products): ReduxAction<typeof ActionNames.ADD_PRODUCT, Products> => {
    return{
        type: ActionNames.ADD_PRODUCT,
        payload: product
    }
}

const addProductReview = (review: Reviews): ReduxAction<typeof ActionNames.ADD_PRODUCT_REVIEW, Reviews> => {
    return{ 
        type: ActionNames.ADD_PRODUCT_REVIEW,
        payload: review
    }
}