import { Products } from './types';

export const  FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const  ADD_PRODUCT = 'ADD_PRODUCT';

interface ReduxAction<T, P = any>{
    type: T;
    payload?: P;
}


const fetchProductsPending = (): ReduxAction<typeof FETCH_PRODUCTS_PENDING> => {
    return{
        type: FETCH_PRODUCTS_PENDING
    }
}

const fetchProductsSuccess = (products: Products): ReduxAction<typeof FETCH_PRODUCTS_SUCCESS, Products> => {
    return{
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

const fetchProductsError = (error: string): ReduxAction<typeof FETCH_PRODUCTS_ERROR, string> => {
    return{
        type: FETCH_PRODUCTS_ERROR,
        payload: error
    }
}

const addProduct = (product: Products): ReduxAction<typeof ADD_PRODUCT, Products> => {
    return{
        type: ADD_PRODUCT,
        payload: product
    }
}
