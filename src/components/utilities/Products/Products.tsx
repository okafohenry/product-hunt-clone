import React, {useState} from 'react';
import styled from 'styled-components';
import { Grid} from '@material-ui/core';
import './Products.css';


const Wrapper = styled.div` 
    >ul{
       padding: 0;
    }
    
    .product{        
        padding: 10px;
        background: #fff;
        border-bottom: 1px solid #bbbbbb2d;
        list-style: none;
        cursor: pointer;
    }
    
    .img-container{
        background: #bbbbbb2d;
        height: 110px;
    }

    

    
    
`

interface Products{
    image: string;
    title: string;
    description: string;
    //date?: string;
}

export const Products: React.FC<Products> = ({image, title, description}) => {
    const [products, setProducts] = useState([]);

    return(
        <Wrapper>
            <h3 className="display-prod-text">Display Products</h3>
            <ul>
                { products.map(product => ( 
                    <Grid container justify="space-between" className="product">    
                        <Grid item xs={12} sm={3} className="img-container">
                            <li className="prod-image">{product.image}</li>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <li className="prod-title">
                                <h5>{product.title}</h5>
                            </li>
                            <li className="prod-desc">
                                <p>{product.desc}</p>
                            </li>
                        </Grid>
                    </Grid>
                ))}
            </ul>
        </Wrapper>
        
    );
};