import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, ADD_PRODUCT} from './actions';
import { State } from './types';

const initialState: State = {
    pending: false,
    products: [
        {
            "id": "1",
            "img": "",
            "title": "Vintage shirt",
            "desc": "Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum",
            "review": [
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                }
            ]
        },
        {
            "id": "2",
            "img": "",
            "title": "Green striped pencil skirt",
            "desc": "Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum",
            "review": [
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                }
            ]
         },
        {
            "id": "3",
            "img": "",
            "title": "Gucci Shorts",
            "desc": "Loren Ipsum Loren Ipsum Loren IpsumLoren Ipsum Loren Ipsum Loren Ipsum Loren IpsumIpsumLoren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum",
            "review": [
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                }
            ] 
        },
        {
            "id": "4",
            "img": "",
            "title": "Balenciaga roll-up",
            "desc": "Loren Ipsum Loren Ipsum Loren IpsumLoren Ipsum LorenIpsumLoren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Ipsum Loren Ipsum Loren Ipsum",
            "review": [
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                }
            ]
        },
        {
            "id": "5",
            "img": "",
            "title": "Green striped pencil skirt",
            "desc": "Loren Ipsum Loren Ipsum Loren IpsumLoren Ipsum Loren Ipsum LorenIpsumLoren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Ipsum Loren Ipsum",
            "review": [
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                }
            ]
        },
        {
            "id": "6",
            "img": "",
            "title": "Green striped pencil skirt",
            "desc": "Loren Ipsum Loren Ipsum Loren IpsumLoren Ipsum Loren Ipsum Loren Ipsum Loren IpsumIpsumLoren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum",
            "review": [
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                }
            ]
        },
        {
            "id":"7",
            "img": "",
            "title": "Green striped pencil skirt",
            "desc": "Loren Ipsum Loren Ipsum Loren IpsumLoren Ipsum LorenIpsumLoren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Ipsum Loren Ipsum Loren Ipsum",
            "review": [
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                }
            ]
        },
        {         
            "id": "8",
            "img": "",
            "title": "Green striped pencil skirt",
            "desc": "Loren Ipsum Loren Ipsum Loren IpsumLoren Ipsum Loren Ipsum LorenIpsumLoren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Ipsum Loren Ipsum",
            "review": [
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                },
                {
                    "date": "2020-10-02",
                    "txt": " Very amazing product, I really recommend!"
                }
            ]
        }
    ],
    error: null
}

export const fetchProductReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS_PENDING: { 
            return{
                ...state,
                pending: true
            }
        }

        case FETCH_PRODUCTS_SUCCESS: {
            return{
                ...state,
                pending: false,
                products: action.payload
            }
        }

        case FETCH_PRODUCTS_ERROR: {
            return{
                ...state,
                pending: false,
                error: action.error
            }
        }

        default:
            return state;
    }
}


const addProductReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            return{

            }
    }
}

//Add selectors here                                                          