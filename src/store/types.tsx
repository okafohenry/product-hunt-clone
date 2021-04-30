interface Reviews{
    date?: string;
    txt: string;
}

export interface Products{
    id?: string;
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