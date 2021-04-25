interface Reviews{
    date?: string;
    txt: string;
}

export interface Products{
    id: string;
    img: string;
    title: string;
    desc: string;
    review: Reviews[];  
}