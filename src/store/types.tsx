export interface Reviews{
    date?: string;
    txt: string;
}

export interface Products{
    id: string;
    img: string | null;
    title: string;
    desc: string;
    review: Reviews[];  
}

export interface State{
    pending: boolean;
    products: Products[];
    error: null | string;
} 

export interface ReduxAction<T, P = any> {
    type: T;
    payload?: P;
}

export enum ActionNames {
    FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
    ADD_PRODUCT = 'ADD_PRODUCT'
}